import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "@pages/main/Main";
import { Register } from "@pages/register/Register";
import { Login } from "@pages/login/Login";
import { SearchResult } from "@pages/searchResult/SearchResult";
import { ProductDetail } from "@pages/productDetail/ProductDetail";
import { RoomDetail } from "@pages/roomDetail/RoomDetail.tsx";
import { Payment } from "@pages/payment/Payment";
import CompletePayment from "@pages/completePayment/CompletePayment.tsx";
import { ShoppingCart } from "@pages/shoppingCart/ShoppingCart";
import { Reservations } from "@pages/reservations/Reservations";
import { ReservationDetails } from "@pages/reservationDetails/ReservationDetails";
import { WishList } from "@pages/wishList/WishList";
import Layout from "@components/Layout/Layout";
import { NotFound } from "@pages/notFound/NotFound";
import { NotLogin } from "@pages/notLogin/NotLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "searchResult", element: <SearchResult /> },
      { path: "products", element: <ProductDetail /> },
      { path: "rooms/:roomId", element: <RoomDetail /> },
      { path: "orders", element: <Payment /> },
      { path: "reservationComplete", element: <CompletePayment /> },
      { path: "shoppingCart", element: <ShoppingCart /> },
      { path: "reservations", element: <Reservations /> },
      {
        path: "reservations/:reservationNumber",
        element: <ReservationDetails />
      },
      { path: "wishList", element: <WishList /> },
      { path: "notLogin", element: <NotLogin /> },
      { path: "notFound", element: <NotFound /> }
    ]
  },
  { path: "*", element: <NotFound /> }
]);

const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
