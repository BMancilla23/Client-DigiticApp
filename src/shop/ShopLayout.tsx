import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Outlet } from "react-router-dom";

function ShopLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />

      <div className="bg-gray-100">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default ShopLayout;
