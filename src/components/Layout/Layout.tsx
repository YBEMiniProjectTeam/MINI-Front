import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "@components/Layout/Footer.tsx";
import * as styles from "@components/Layout/Layout.styles.ts";

const Layout: React.FC = () => {
  return (
    <styles.Container>
      {/* 헤더 컴포넌트 */}
      <Outlet />
      <Footer />
    </styles.Container>
  );
};

export default Layout;
