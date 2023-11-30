import { Outlet } from "react-router-dom";
import { Header } from "@components/Layout/Header/Header";
import { Footer } from "@components/Layout/Footer/Footer";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop";
import * as styles from "@components/Layout/Layout.styles";

const Layout = () => {
  return (
    <ScrollToTop>
      <styles.Container>
        <Header />
        <Outlet />
        <Footer />
      </styles.Container>
    </ScrollToTop>
  );
};

export default Layout;
