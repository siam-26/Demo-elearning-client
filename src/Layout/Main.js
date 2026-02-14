import { Outlet } from "react-router";
import Navbar from "../shared_pages/Navbar";
import Footer from "../shared_pages/Footer";


const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
