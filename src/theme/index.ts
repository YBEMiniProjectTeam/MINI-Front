import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    styles: {
      global: () => ({
        body: {
          bg: ""
        }
      })
    },
    fonts: {
      heading: `Pretendard, sans-serif`,
      body: `Pretendard, sans-serif`
    },
    colors: {
      primary: {
        100: "#fcf7f8",
        200: "#ffe6ed",
        500: "#de2e5f",
        600: "#B1244C"
      },
      border: {
        100: "rgb(240, 240, 240)"
      }
    }
  },
  withDefaultColorScheme({
    colorScheme: "primary"
  })
);

export default theme;
