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
      heading: `'Pretendard-Regular', sans-serif`,
      body: `'Pretendard-Regular', sans-serif`
    }
  },
  withDefaultColorScheme({
    colorScheme: "pink"
  })
);

export default theme;
