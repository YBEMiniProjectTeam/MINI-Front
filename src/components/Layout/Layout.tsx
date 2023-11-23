import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Layout/Footer/Footer";
import * as styles from "@components/Layout/Layout.styles.ts";
import { Header } from "./Header/Header";
const Layout: React.FC = () => {
  return (
    <styles.Container>
      <Header />
      <Outlet />
      <Footer />
    </styles.Container>
  );
};

export default Layout;
