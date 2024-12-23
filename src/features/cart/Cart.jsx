import { useDispatch, useSelector } from "react-redux";

import { clearCart, getCart } from "./cartSlice";
import { getUsername } from "../user/userSlice";

import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  function handleClear() {
    dispatch(clearCart());
  }

  console.log(cart);
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={handleClear}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
