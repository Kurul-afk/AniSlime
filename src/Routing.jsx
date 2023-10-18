import React from "react";
import { Route, Routes } from "react-router-dom";
import AnimeList from "./pages/animeList";
import AnimeDetail from "./pages/animeDetail";
import UserProfile from "./pages/userProfile";
import Main from "./pages/Main";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import SettingsPage from "./pages/settingsPage";
import RecoveryPage from "./pages/recoveryPage";
import RecoveryAccount from "./pages/recoveryAccount";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/anime-list" element={<AnimeList />} />
      <Route path="/anime-detail" element={<AnimeDetail />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/send-code" element={<RecoveryPage />} />
      <Route path="/recovery-account" element={<RecoveryAccount />} />
    </Routes>
  );
};

export default Routing;
