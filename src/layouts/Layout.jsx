import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div>
      <Toaster></Toaster>

      <div className="h-[120px]">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-344px)] py-16 container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
