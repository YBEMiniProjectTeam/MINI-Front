import SuspenseFallback from "@components/AsyncWrapper/SuspenseFallback.tsx";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AsyncWrapper from "@components/AsyncWrapper";
import DeferredComponent from "@components/AsyncWrapper/DeferredComponent";
import Layout from "@components/Layout/Layout";
import NotFound from "@pages/notFound/NotFound";
import NotLogin from "@pages/notLogin/NotLogin";
import Login from "@pages/login/Login";
import Register from "@pages/register/Register";
import { MainSkeleton } from "@components/Main/MainSkeleton/MainSkeleton";
import { SearchResultSkeleton } from "@components/SearchResultSkeleton/SearchResultSkeleton";

const Main = lazy(() => import("@pages/main/Main"));
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
          <AsyncWrapper
            key="main"
            fallback={
              <DeferredComponent>
                <MainSkeleton />
              </DeferredComponent>
            }
          >
            <Main />
          </AsyncWrapper>
        )
      },
      {
        path: "register",
        element: (
          <AsyncWrapper
            key="register"
            fallback={
              <DeferredComponent>
                <SuspenseFallback />
              </DeferredComponent>
            }
          >
            <Register />
          </AsyncWrapper>
        )
      },
      {
        path: "login",
        element: (
          <AsyncWrapper
            key="login"
            fallback={
              <DeferredComponent>
                <SuspenseFallback />
              </DeferredComponent>
            }
          >
            <Login />
          </AsyncWrapper>
        )
      },
      {
        path: "searchResult",
        element: (
          <AsyncWrapper
            key="searchResult"
            fallback={
              <DeferredComponent>
                <SearchResultSkeleton />
              </DeferredComponent>
            }
          >
            <SearchResult />
          </AsyncWrapper>
        )
      },
      {
        path: "products",
        element: (
          <AsyncWrapper
            key="products"
            fallback={
              <DeferredComponent>
                <SuspenseFallback />
              </DeferredComponent>
            }
          >
            <ProductDetail />
          </AsyncWrapper>
        )
      },
      {
        path: "orders",
        element: (
          <AsyncWrapper
            key="orders"
            fallback={
              <DeferredComponent>
                <SuspenseFallback />
              </DeferredComponent>
            }
          >
            <Payment />
          </AsyncWrapper>
        )
      },
      {
        path: "reservationComplete",
        element: (
          <AsyncWrapper
            key="reservationComplete"
            fallback={
              <DeferredComponent>
                <SuspenseFallback />
              </DeferredComponent>
            }
          >
            <CompletePayment />
          </AsyncWrapper>
        )
      },
      {
        path: "shoppingCart",
        element: (
          <AsyncWrapper
            key="shoppingCart"
            fallback={
              <DeferredComponent>
                <SuspenseFallback />
              </DeferredComponent>
            }
          >
            <ShoppingCart />
          </AsyncWrapper>
        )
      },
      {
        path: "reservations",
        element: (
          <AsyncWrapper
            key="reservations"
            fallback={
              <DeferredComponent>
                <SuspenseFallback />
              </DeferredComponent>
            }
          >
            <Reservations />
          </AsyncWrapper>
        )
      },
      {
        path: "reservationDetails",
        element: (
          <AsyncWrapper
            key="reservationDetails"
            fallback={
              <DeferredComponent>
                <SuspenseFallback />
              </DeferredComponent>
            }
          >
            <ReservationDetails />
          </AsyncWrapper>
        )
      },
      {
        path: "wishList",
        element: (
          <AsyncWrapper
            key="wishList"
            fallback={
              <DeferredComponent>
                <SuspenseFallback />
              </DeferredComponent>
            }
          >
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
