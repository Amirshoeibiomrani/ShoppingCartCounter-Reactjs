import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
import { useCart } from "../context/CartContext";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if(!state.itemsCounter){
    return(
      <div>
      <p>Empty</p>

      </div>
    )
  }
  return (
    <div>
      <BasketSideBar state={state} />
      <div className="">
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
