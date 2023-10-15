import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const authContext = createContext();

const API = "http://34.89.235.149/api/v1";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Auth
  const handleSignUp = async (user, navigate) => {
    setLoading(true);
    try {
      await axios.post(`${API}/account/register/`, user);
      navigate("/sign-in");
    } catch (error) {
      console.log(`Error ->: ${error.message}`);
      alert("Пользователь уже зарегистрирован!");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (user, navigate) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/account/login/`, user);
      if (data) {
        localStorage.setItem("tokkens", JSON.stringify(data));
        localStorage.setItem("email", user.email);
        navigate("/");
      }
    } catch (error) {
      console.log(`Error ->: ${error.message}`);
      if (error.response) {
        console.log(`error response status: ${error.response.status}`);
        if (error.response.status === 401) {
          toast.warning("error");
        }
      }
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    setLoading(false);
    localStorage.removeItem("tokkens");
    localStorage.removeItem("email");
    setLoading(true);
  };

  // Settings
  const handleChangePassword = () => {};
  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        loading,
        handleSignUp,
        handleSignIn,
        handleSignOut,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
