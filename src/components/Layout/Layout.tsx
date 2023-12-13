import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "@components/Layout/Header/Header";
import { Footer } from "@components/Layout/Footer/Footer";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop";

const Layout = () => {
  return (
    <ScrollToTop>
      <Box
        width="full"
        maxW="768px"
        mx="auto"
        px={{ base: "12px", sm: "16px", md: "24px" }}
        bgColor="white"
        display="flex"
        flexDirection="column"
      >
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </ScrollToTop>
  );
};

export default Layout;
