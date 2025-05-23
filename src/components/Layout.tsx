import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
