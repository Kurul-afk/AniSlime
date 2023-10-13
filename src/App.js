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
        <div
          style={{
            background:
              "url('https://kartinki.pics/uploads/posts/2021-07/1626975274_14-kartinkin-com-p-anime-oboi-v-fioletovikh-tonakh-anime-kras-14.jpg') no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            height: "100vh",
          }}
        >
          <Navbar />
          <Routing />
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
