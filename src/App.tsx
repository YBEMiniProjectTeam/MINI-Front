import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AsyncWrapper from "@components/AsyncWrapper";
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
          <AsyncWrapper key="main" fallback={<div>로딩중...</div>}>
            <Main />
          </AsyncWrapper>
        )
      },
      {
        path: "register",
        element: (
          <AsyncWrapper key="register" fallback={<div>로딩중...</div>}>
            <Register />
          </AsyncWrapper>
        )
      },
      {
        path: "login",
        element: (
          <AsyncWrapper key="login" fallback={<div>로딩중...</div>}>
            <Login />
          </AsyncWrapper>
        )
      },
      {
        path: "searchResult",
        element: (
          <AsyncWrapper key="searchResult" fallback={<div>로딩중...</div>}>
            <SearchResult />
          </AsyncWrapper>
        )
      },
      {
        path: "products",
        element: (
          <AsyncWrapper key="products" fallback={<div>로딩중...</div>}>
            <ProductDetail />
          </AsyncWrapper>
        )
      },
      {
        path: "orders",
        element: (
          <AsyncWrapper key="orders" fallback={<div>로딩중...</div>}>
            <Payment />
          </AsyncWrapper>
        )
      },
      {
        path: "reservationComplete",
        element: (
          <AsyncWrapper
            key="reservationComplete"
            fallback={<div>로딩중...</div>}
          >
            <CompletePayment />
          </AsyncWrapper>
        )
      },
      {
        path: "shoppingCart",
        element: (
          <AsyncWrapper key="shoppingCart" fallback={<div>로딩중...</div>}>
            <ShoppingCart />
          </AsyncWrapper>
        )
      },
      {
        path: "reservations",
        element: (
          <AsyncWrapper key="reservations" fallback={<div>로딩중...</div>}>
            <Reservations />
          </AsyncWrapper>
        )
      },
      {
        path: "reservationDetails",
        element: (
          <AsyncWrapper
            key="reservationDetails"
            fallback={<div>로딩중...</div>}
          >
            <ReservationDetails />
          </AsyncWrapper>
        )
      },
      {
        path: "wishList",
        element: (
          <AsyncWrapper key="wishList" fallback={<div>로딩중...</div>}>
            <WishList />
          </AsyncWrapper>
        )
      },
      { path: "notLogin", element: <NotLogin /> },
      { path: "notFound", element: <NotFound /> }
    ]
  },
  { path: "*", element: <NotFound /> }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
