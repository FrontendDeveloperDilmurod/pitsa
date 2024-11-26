import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../servers/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { store } from "../../store";
import EmptyCart from "../cart/EmptyCart";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

function CreateOrder() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector(getTotalPrice);
  const [withPriority, setWithPriority] = useState(false);
  const { username } = useSelector((state) => state.user);
  const [phoneNumber, setPhoneNumber] = useState("");
  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className=" px-4 py-6">
      <h2 className="  text-xl font-semibold tracking-wide mb-8">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className=" flex items-center mb-8 gap-2">
          <label className=" basis-40">First Name</label>
          <input type="text" name="customer" required className=" input grow" defaultValue={username} />
        </div>

        <div className=" flex items-center gap-2 mb-8">
          <label className=" basis-40">Phone number</label>
          <div className=" grow ">
            <PhoneInput
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              inputStyle={{
                width: "100%",
                outline: "none",
                border: "none",
                borderRadius: "20px",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
              inputProps={{
                name: "phone",
              }}
              country={"uz"}
            />
          </div>
        </div>

        <div className=" flex items-center gap-2 mb-8">
          <label className=" basis-40">Address</label>
          <div className=" grow">
            <input type="text" name="address" required className=" input w-full" />
          </div>
        </div>

        <div className=" flex items-center gap-2 mb-8">
          <input type="checkbox" name="priority" id="priority" className=" w-4 h-4 accent-yellow-400  text-stone-800 scale-150 mr-8" value={withPriority} onChange={(e) => setWithPriority(e.target.checked)} />
          <label htmlFor="priority" className="  tracking-wide text-lg text-stone-800 font-semibold">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type={"primary"} disabled={navigation.state === "submitting"}>
            Order now {withPriority ? formatCurrency(totalPrice + totalPrice * 0.2) : formatCurrency(totalPrice)}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const object = Object.fromEntries(formData);
  const newOrder = { ...object, cart: JSON.parse(object.cart), priority: object.priority == "true", number: object.number };
  const order = await createOrder(newOrder);
  store.dispatch({ type: "cart/clearCart" });
  return redirect(`/order/${order.id}`);
}

export default CreateOrder;
