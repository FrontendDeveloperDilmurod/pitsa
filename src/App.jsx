import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Order, { loader as orderLoader } from "./features/order/Order";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import AppLayout from "./components/AppLayout";
import Cart from "./features/cart/Cart";
import CreateOrder, { action as createOrderAction } from "./features/order/CreateOrder";
import NotFound from "./components/Error";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function PrivetRoute({ children }) {
  const { username } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    !username && navigate("/");
  }, []);
  return username && children;
}

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "order/new",
          element: (
            <PrivetRoute>
              <CreateOrder />
            </PrivetRoute>
          ),
          action: createOrderAction,
        },
        {
          path: "menu",
          element: (
            <PrivetRoute>
              <Menu />
            </PrivetRoute>
          ),
          loader: menuLoader,
          errorElement: <NotFound />,
        },
        {
          path: "cart",
          element: (
            <PrivetRoute>
              <Cart />
            </PrivetRoute>
          ),
        },
        {
          path: "order/:orderId",
          element: (
            <PrivetRoute>
              <Order />
            </PrivetRoute>
          ),
          errorElement: <NotFound />,
          loader: orderLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
