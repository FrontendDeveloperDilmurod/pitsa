import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQuantitiy, getCurrentItemQuantity, increaseQuantitiy } from "./cartSlice";

function UpdateQuatity({ id }) {
  const currenQuantity = useSelector(getCurrentItemQuantity(id));
  const dispatch = useDispatch();

  return (
    <div className=" flex gap-x-4 items-center">
      <Button type={"rounded"} onClick={() => dispatch(increaseQuantitiy(id))}>
        +
      </Button>
      <p className=" text-md font-semibold">{currenQuantity}</p>

      <Button type={"rounded"} onClick={() => dispatch(decreaseQuantitiy(id))}>
        -
      </Button>
    </div>
  );
}

export default UpdateQuatity;
