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
      heading: `'Pretendard', sans-serif`,
      body: `'Pretendard', sans-serif`
    }
  },
  withDefaultColorScheme({
    colorScheme: "pink"
  })
);

export default theme;
