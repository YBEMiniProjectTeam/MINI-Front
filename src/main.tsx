import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />

    <ChakraProvider theme={theme}>
      <CookiesProvider>
        <GlobalStyles />
        <App />
      </CookiesProvider>
    </ChakraProvider>
  </QueryClientProvider>
);
