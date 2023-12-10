import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "@components/AsyncWrapper/ErrorBoundary";
import ErrorFallback from "@components/AsyncWrapper/ErrorFallback";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import Layout from "@components/Layout/Layout";
import NotFound from "@pages/notFound/NotFound";
import NotLogin from "@pages/notLogin/NotLogin";
const Main = lazy(() => import("@pages/main/Main"));
const Register = lazy(() => import("@pages/register/Register"));
const Login = lazy(() => import("@pages/login/Login"));
const SearchResult = lazy(() => import("@pages/searchResult/SearchResult"));
const ProductDetail = lazy(() => import("@pages/productDetail/ProductDetail"));
const Payment = lazy(() => import("@pages/payment/Payment"));
const CompletePayment = lazy(
  () => import("@pages/completePayment/CompletePayment")
);
const ShoppingCart = lazy(() => import("@pages/shoppingCart/ShoppingCart"));
const Reservations = lazy(() => import("@pages/reservations/Reservations"));
const ReservationDetails = lazy(
  () => import("@pages/reservationDetails/ReservationDetails")
);
const WishList = lazy(() => import("@pages/wishList/WishList"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>로딩중...</div>}>
            <Main />
          </Suspense>
        )
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<div>로딩중...</div>}>
            <Register />
          </Suspense>
        )
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<div>로딩중...</div>}>
            <Login />
          </Suspense>
        )
      },
      {
        path: "searchResult",
        element: (
          <Suspense fallback={<div>로딩중...</div>}>
            <SearchResult />
          </Suspense>
        )
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<div>로딩중...</div>}>
            <ProductDetail />
          </Suspense>
        )
      },
      {
        path: "orders",
        element: (
          <Suspense fallback={<div>로딩중...</div>}>
            <Payment />
          </Suspense>
        )
      },
      {
        path: "reservationComplete",
        element: (
          <Suspense fallback={<div>로딩중...</div>}>
            <CompletePayment />
          </Suspense>
        )
      },
      {
        path: "shoppingCart",
        element: (
          <Suspense fallback={<div>로딩중...</div>}>
            <ShoppingCart />
          </Suspense>
        )
      },
      {
        path: "reservations",
        element: (
          <Suspense fallback={<div>로딩중...</div>}>
            <Reservations />
          </Suspense>
        )
      },
      {
        path: "reservationDetails",
        element: (
          <Suspense fallback={<div>로딩중...</div>}>
            <ReservationDetails />
          </Suspense>
        )
      },
      {
        path: "wishList",
        element: (
          <Suspense fallback={<div>로딩중...</div>}>
            <WishList />
          </Suspense>
        )
      },
      { path: "notLogin", element: <NotLogin /> },
      { path: "notFound", element: <NotFound /> }
    ]
  },
  { path: "*", element: <NotFound /> }
]);

const App = () => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary fallback={ErrorFallback} onReset={reset}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
