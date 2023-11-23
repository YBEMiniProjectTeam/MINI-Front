import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "@pages/main/Main";
import { Register } from "@pages/register/Register";
import { Login } from "@pages/login/Login";
import { SearchResult } from "@pages/searchResult/SearchResult";
import { ProductDetail } from "@pages/productDetail/ProductDetail";
import { RoomDetail } from "@pages/roomDetail/RoomDetail.tsx";
import { Payment } from "@pages/payment/Payment";
import { CompletePayment } from "@pages/completePayment/C/CompletePayment";
import { ShoppingCart } from "@pages/shoppingCart/ShoppingCart";
import { ReservationDetails } from "@pages/reservationDetails/ReservationDetails";
import { WishList } from "@pages/wishList/WishList";
import Layout from "@components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 레이아웃 컴포넌트
    children: [
      { index: true, element: <Main /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "searchResult", element: <SearchResult /> },
      { path: "products/:productDetail", element: <ProductDetail /> },
      { path: "rooms/:roomId", element: <RoomDetail /> },
      { path: "orders/:orderId", element: <Payment /> },
      { path: "orders/:orderId/complete", element: <CompletePayment /> },
      { path: "shoppingCart", element: <ShoppingCart /> },
      { path: "reservationDetails", element: <ReservationDetails /> },
      { path: "wishList", element: <WishList /> }
    ]
  }
]);

const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
