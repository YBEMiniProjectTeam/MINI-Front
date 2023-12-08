import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
  fonts: {
    heading: `'Pretendard', sans-serif`,
    body: `'Pretendard', sans-serif`,
  },
  colors: {
    pink: "#db074a"
  },
});

export default theme;
