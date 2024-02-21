import { useDispatch, useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
 
function CheckoutPage() {
 const state = useSelector((store)=>store.cart)

  
  if(!state.itemsCounter){
    return(
      <div className="flex justify-between items-start p-2.5 min-h-[1000px]">
      <p>Empty</p>

      </div>
    )
  }
  return (
    <div className="flex justify-between items-start p-2.5 min-h-[1000px]">
      <BasketSideBar state={state}     />
      <div className="w-full">
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}  
           
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
