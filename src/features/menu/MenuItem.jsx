import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentItemQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateQuatity from "../cart/UpdateQuatity";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const CurrentQuantity = useSelector(getCurrentItemQuantity(id));

  const isInCart = CurrentQuantity > 0;

  const addToCart = () => {
    const cartItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: 1 * unitPrice,
    };
    dispatch(addItem(cartItem));
  };

  return (
    <li className=" flex  gap-4  py-2">
      <img src={imageUrl} alt={name} className={` h-24 ${soldOut ? " opacity-70 grayscale" : ""}`} />
      <div className=" flex flex-col pt-1 grow">
        <p className=" font-medium  ">{name}</p>
        <p className=" text-sm italic capitalize text-stone-400">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className=" font-semibold text-stone-500">Sold out</p>}
          {isInCart && (
            <div className=" flex items-center gap-x-2">
              <UpdateQuatity id={id} />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button onClick={addToCart} type={"small"}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
