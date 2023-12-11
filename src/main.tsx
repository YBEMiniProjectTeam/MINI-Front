import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CookiesProvider } from "react-cookie";
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
        <RecoilRoot>
          <GlobalStyles />
          <App />
        </RecoilRoot>
      </CookiesProvider>
    </ChakraProvider>
  </QueryClientProvider>
);
