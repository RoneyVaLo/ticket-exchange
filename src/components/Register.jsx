// components/Register.js
import { useState } from "react";
import AuthForm from "./AuthForm";
import { register } from "../api/authService";
import toast from "react-hot-toast";
import Loader1 from "./Loaders/Loader1";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async ({ email, password, username, fullName }) => {
    try {
      setIsLoading(true);
      await register(email, password, { username, fullName });
      toast.success("Registered successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthForm
      onSubmit={handleRegister}
      buttonText={isLoading ? <Loader1 /> : "Register"}
      isRegister={true}
      isLoading={isLoading}
    />
  );
};

export default Register;
