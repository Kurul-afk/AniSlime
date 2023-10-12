import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routing from "./Routing";
import Footer from "./components/Footer";
import AuthContextProvider from "./context/authContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <AuthContextProvider>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
