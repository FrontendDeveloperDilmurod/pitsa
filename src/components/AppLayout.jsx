import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loading from "../ui/Loading";

function AppLayout() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state == "loading" && <Loading />}
      <div className=" grid  grid-rows-[auto_1fr_auto] h-screen font-pizza">
        <Header />
        <div className=" overflow-y-scroll">
          <main className="max-w-3xl mx-auto">
            <Outlet />
          </main>
        </div>
        <CartOverview />
      </div>
    </>
  );
}

export default AppLayout;
