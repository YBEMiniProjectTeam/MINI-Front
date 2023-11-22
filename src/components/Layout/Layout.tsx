import React from "react";
import { Footer } from "@components/Layout/Footer.tsx";
import { LayoutProps } from "@components/Layout/Layout.types.ts";
import * as styles from "@components/Layout/Layout.styles.ts";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <styles.Container>
      {/* 헤더 컴포넌트 */}
      {children}
      <Footer />
    </styles.Container>
  );
};

export default Layout;
