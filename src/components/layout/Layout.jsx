import {} from "react";
import MainRoutes from "../../routes/MainRoutes";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <MainRoutes />
      </main>
      {location.pathname !== "/register" && location.pathname !== "/login" ? (
        <Footer />
      ) : (
        ""
      )}
    </div>
  );
};

export default Layout;
