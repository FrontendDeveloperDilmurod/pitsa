import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantitiy } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQnty = useSelector(getTotalQuantitiy);

  const totalPrice = useSelector(getTotalPrice);

  if (totalQnty < 1) {
    return null;
  }
  return (
    <div className=" bg-stone-800 uppercase tracking-widest text-white flex justify-between py-4 px-4">
      <p className=" space-x-4 font-semibold text-stone-300">
        <span>{totalQnty} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
