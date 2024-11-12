// components/Login.js
import { useState } from "react";
import AuthForm from "./AuthForm";
import { login } from "../api/authService";
import Loader1 from "./Loaders/Loader1";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();

  console.log(auth);

  const handleLogin = async ({ identifier, password }) => {
    try {
      setIsLoading(true);
      await login(identifier, password);
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthForm
      onSubmit={handleLogin}
      buttonText={isLoading ? <Loader1 /> : "Login"}
      isRegister={false}
      isLoading={isLoading}
    />
  );
};

export default Login;
