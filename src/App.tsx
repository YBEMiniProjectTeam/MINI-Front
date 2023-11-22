import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { SearchResult } from "./pages/searchResult/SearchResult";
import { ProductDetail } from "./pages/productDetail/ProductDetail";
import { RoomDetail } from "./pages/roomDetail/RoomDetail.tsx";
import { Payment } from "./pages/payment/Payment";
import { CompletePayment } from "./pages/completePayment/C/CompletePayment";
import { ShoppingCart } from "./pages/shoppingCart/ShoppingCart";
import { ReservationDetails } from "./pages/reservationDetails/ReservationDetails";
import { WishList } from "./pages/wishList/WishList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route
        path="/searchResult"
        element={<SearchResult></SearchResult>}
      ></Route>
      <Route
        path="/products/:productDetail"
        element={<ProductDetail></ProductDetail>}
      ></Route>

      <Route path="/room/:roomId" element={<RoomDetail></RoomDetail>}></Route>
      <Route path="/order/:orderId" element={<Payment></Payment>}></Route>
      <Route
        path="/completePayment/:productDetail/:RoomDetail"
        element={<CompletePayment></CompletePayment>}
      ></Route>
      <Route
        path="/shoppingCart"
        element={<ShoppingCart></ShoppingCart>}
      ></Route>
      <Route
        path="/reservationDetails"
        element={<ReservationDetails></ReservationDetails>}
      ></Route>
      <Route path="/wishList" element={<WishList></WishList>}></Route>
    </Routes>
  );
};
export default App;
