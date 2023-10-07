import { Route, Routes } from "react-router-dom";
import SellerLayout from "../pages/Layouts/SellerLayout";
import { SellerHome } from "../seller/pages/Home/SellerHome";

export default function SellerRoute() {
  return (
    <Routes>
      <Route path="/seller" element={<SellerLayout />}>
        <Route index element={<SellerHome />} />
      </Route>
    </Routes>
  );
}
