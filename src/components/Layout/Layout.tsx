import { Outlet } from "react-router-dom";
import { Header } from "@components/Layout/Header/Header";
import { Footer } from "@components/Layout/Footer/Footer";
import * as styles from "@components/Layout/Layout.styles";

const Layout = () => {
  return (
    <styles.Container>
      <Header />
      <Outlet />
      <Footer />
    </styles.Container>
  );
};

export default Layout;
