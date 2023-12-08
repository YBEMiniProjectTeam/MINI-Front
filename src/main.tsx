import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";
import { ChakraProvider, Box, Spinner } from "@chakra-ui/react";
import theme from "./theme/index";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CookiesProvider } from "react-cookie";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import Fonts from "@theme/Fonts.tsx";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <Toaster />
    <ChakraProvider theme={theme}>
      <Fonts />
      <CookiesProvider>
        <Suspense
          fallback={
            <Box
              width="100vw"
              height="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                size="xl"
              />
            </Box>
          }
        >
          <RecoilRoot>
            <GlobalStyles />
            <App />
          </RecoilRoot>
        </Suspense>
      </CookiesProvider>
    </ChakraProvider>
  </QueryClientProvider>
);
