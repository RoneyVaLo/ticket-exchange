// components/AuthForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ onSubmit, buttonText, isRegister, isLoading }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = isRegister
      ? { email, password, username, fullName }
      : { identifier: email, password };
    onSubmit(credentials);
  };

  const handleChangeForm = (e) => {
    e.preventDefault();
    if (isRegister) {
      navigate("/signin");
    } else {
      navigate("/signup");
    }
  };

  // TODO: Componetizar los inputs del formulario
  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50">
      <div className="w-11/12 max-w-sm md:max-w-md md:w-full">
        <div className="bg-white shadow-lg rounded-lg px-2 md:px-8 pt-6 pb-8 mb-4 mt-4 transform transition-all duration-500 ease-in-out hover:shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-cursive text-rose-700 mb-2">
              {isRegister ? "Join Our Love Story" : "Welcome Back"}
            </h2>
            <p className="text-rose-400 font-serif">
              {isRegister ? "Begin your romantic journey" : "We've missed you!"}
            </p>
          </div>

          <form
            className="flex flex-col items-center gap-8"
            onSubmit={handleSubmit}
          >
            {isRegister && (
              <>
                <div className="flex flex-col w-full gap-2">
                  <label
                    htmlFor="fullName"
                    className="text-rose-600 font-serif text-center font-bold"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    className="px-2 border-b-2 border-rose-300 focus:border-rose-400 focus:outline-none"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="flex flex-col w-full gap-2">
                  <label
                    htmlFor="userName"
                    className="text-rose-600 font-serif text-center font-bold"
                  >
                    Username
                  </label>

                  <input
                    id="userName"
                    type="text"
                    className="px-2 border-b-2 border-rose-300 focus:border-rose-400 focus:outline-none"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                  />
                </div>
              </>
            )}

            <div className="flex flex-col w-full gap-2">
              <label
                htmlFor="email"
                className="text-rose-600 font-serif text-center font-bold"
              >
                {isRegister ? "Email" : "Email or Username"}
              </label>

              <input
                id="email"
                type={isRegister ? "email" : "text"}
                className="px-2 border-b-2 border-rose-300 focus:border-rose-400 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={`Enter your ${
                  isRegister ? "Email" : "Email or Username"
                }`}
                required
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <label
                htmlFor="password"
                className="text-rose-600 font-serif text-center font-bold"
              >
                Password
              </label>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="px-2 border-b-2 border-rose-300 focus:border-rose-400 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                required
              />

              <button
                className="px-2 py-1 border border-t-0 mt-2 rounded border-rose-400 hover:border-rose-500 font-bold max-w-44 active:scale-95 transition-transform"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
              </button>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-serif py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="w-full flex justify-center">{buttonText}</span>
            </button>
          </form>

          <div className="text-center mt-6">
            <button
              onClick={handleChangeForm}
              className="text-rose-500 hover:text-rose-700 font-serif transition-colors duration-300"
            >
              {isRegister
                ? "Already have an account? Sign in"
                : "Need an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
