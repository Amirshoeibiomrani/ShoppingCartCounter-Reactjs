import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
// import { useCart } from "../context/CartContext";

function CheckoutPage() {
  // const [state, dispatch] = useCart();

  // const clickHandler = (type, payload) => dispatch({ type, payload });

  // if(!state.itemsCounter){
  //   return(
  //     <div className="flex justify-between items-start p-2.5 min-h-[1000px]">
  //     <p>Empty</p>

  //     </div>
  //   )
  // }
  return (
    <div className="flex justify-between items-start p-2.5 min-h-[1000px]">
      {/* <BasketSideBar state={state} />
      <div className="w-full">
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div> */}
    </div>
  );
}

export default CheckoutPage;
