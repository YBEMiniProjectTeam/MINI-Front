import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    fonts: {
      heading: `Pretendard, sans-serif`,
      body: `Pretendard, sans-serif`
    },
    colors: {
      primary: {
        "100": "#fcf7f8",
        "200": "#ffe6ed",
        "500": "#de2e5f",
        "600": "#B1244C"
      },
      gray: {
        "100": "#f8f8f8",
        "200": "#e6e6e6",
        "300": "#CCCCCC",
        "400": "#919191",
        "500": "#616161"
      },
      disabled: {
        "100": "#ffffff",
        "500": "#e6e6e6",
        "600": "#CCCCCC",
        "700": "#919191"
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
