import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const authContext = createContext();

const API = "http://34.89.235.149/api/v1";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // refresh

  const refreshTokens = async () => {
    const { refresh } = JSON.parse(localStorage.getItem("tokkens") || "{}");
    if (refresh) {
      try {
        const { data } = await axios.post(`${API}/account/refresh/`, {
          refresh,
        });
        const { access, refresh } = data;
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Отсутствует refreshToken в локальном хранилище.");
    }
  };

  // Auth
  const handleSignUp = async (user, navigate) => {
    setLoading(true);
    try {
      await axios.post(`${API}/account/register/`, user);
      navigate("/sign-in");
    } catch (error) {
      console.log(`Error ->: ${error.message}`);
      toast.warning("Пользователь уже зарегистрирован!", {
        position: "top-center",
      });
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
        setCurrentUser(user.email);
        navigate("/");
      }
    } catch (error) {
      console.log(`Error ->: ${error.message}`);
      if (error.response) {
        console.log(`error response status: ${error.response.status}`);
        if (error.response.status === 401) {
          toast.warning(
            "Проверьте свою почту, или же этого пользователя не существует",
            { position: "top-center" }
          );
          refreshTokens();
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
    setCurrentUser(null);
    setLoading(true);
  };

  // Settings

  const handleChangePassword = async (user, navigate) => {
    const { access } = JSON.parse(localStorage.getItem("tokkens") || "{}");
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${API}/account/change-password/`,
        user,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );
      console.log(`data: ${data}\nuser: ${user}`);
      localStorage.removeItem("tokkens");
      localStorage.removeItem("email");
      navigate("/sign-in");
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 401) {
        console.log(error.response.status);
        refreshTokens();
      }
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const sendCode = async (user, navigate) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/account/send-code/`, user);
      toast.warning(
        "На этот адрес электронной почты было отправлено письмо с кодом",
        { position: "top-center" }
      );
      navigate("/recovery-account");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRecoveryAccount = async (user, navigate) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${API}/account/recovery-password/`,
        user
      );
      if (data) {
        console.log(data);
        toast.success("Ваш аккаунт восстановлен!", { position: "top-center" });
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <authContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        error,
        loading,
        handleSignUp,
        handleSignIn,
        handleSignOut,
        handleChangePassword,
        refreshTokens,
        sendCode,
        handleRecoveryAccount,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
