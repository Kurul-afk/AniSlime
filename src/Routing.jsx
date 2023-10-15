import React from "react";
import { Route, Routes } from "react-router-dom";
import AnimeList from "./pages/animeList";
import AnimeDetail from "./pages/animeDetail";
import UserProfile from "./pages/userProfile";
import Main from "./pages/Main";
import SignUp from "./pages/signUp";
// ad
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} /> 
      <Route path="/anime-list" element={<AnimeList />} />
      <Route path="/anime-detail" element={<AnimeDetail />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default Routing;
