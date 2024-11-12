// api/authService.js
import { auth, db } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  deleteUser,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// Registro de usuario
export const register = async (email, password, additionalData) => {
  const { username, fullName } = additionalData;

  // Verificamos que el username no esté en uso
  const usersRef = collection(db, "users");
  const usernameQuery = query(usersRef, where("username", "==", username));
  const querySnapshot = await getDocs(usernameQuery);
  if (!querySnapshot.empty) {
    throw new Error("Username already in use");
  }

  try {
    // Creamos el usuario con Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;

    await updateProfile(user, { displayName: fullName });

    // Intentamos guardar los datos adicionales en Firestore
    await setDoc(doc(db, "users", user.uid), {
      email,
      username,
      fullName,
    });

    return user;
  } catch (error) {
    console.log(error)
    // Si falla la escritura en Firestore, eliminamos el usuario autenticado
    if (auth.currentUser) {
      await deleteUser(auth.currentUser);
    }
    throw new Error("Registration failed, please try again");
  }
};

// Login de usuario con email o username
export const login = async (identifier, password) => {
  let email;

  // Verificamos si el identificador es un email o un username
  if (identifier.includes("@")) {
    email = identifier;
  } else {
    // Buscamos el email usando el username en Firestore
    const usersRef = collection(db, "users");
    const usernameQuery = query(usersRef, where("username", "==", identifier));
    const querySnapshot = await getDocs(usernameQuery);
    if (querySnapshot.empty) {
      throw new Error("Username not found");
    }
    email = querySnapshot.docs[0].data().email;
  }

  // Iniciamos sesión con email y password
  const loginData = await signInWithEmailAndPassword(auth, email, password);
  console.log(loginData);
  return loginData;
};

// Logout de usuario
export const logout = () => signOut(auth);
