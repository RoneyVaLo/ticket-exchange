import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from "./config";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const insertDataIntoCollection = async (nameCollection, data) => {
  if (!nameCollection || !data) {
    console.warn("Collection name and data are required.");
    return null;
  }

  try {
    const docRef = await addDoc(collection(db, nameCollection), data);
    console.log(`Document written with ID: ${docRef.id}`);
    return docRef.id;
  } catch (error) {
    console.error(
      `Error adding document to collection "${nameCollection}":`,
      error
    );
    return null;
  }
};

export const getCollectionDocuments = async (nameCollection) => {
  if (!nameCollection) {
    console.warn("Collection name is required.");
    return [];
  }

  try {
    const querySnapshot = await getDocs(collection(db, nameCollection));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(
      `Error fetching documents from collection "${nameCollection}":`,
      error
    );
    return [];
  }
};
