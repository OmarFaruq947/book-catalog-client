import { Outlet } from "react-router-dom";
import Footer from "../Sheared/Footer";
import Navbar from "../Sheared/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
