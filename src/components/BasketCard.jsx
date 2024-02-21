import { useDispatch } from "react-redux";
import { shortenText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";
 
import {decrease,increase,removeItem} from "../features/cart/cartSlice"

function BasketCard({ data }) {
//comments:
  const { image, title, quantity } = data

  const dispatch=useDispatch ()
  return (
    <div className="flex items-center justify-between border-2 border-dashed-[#e2e2e2] rounded-[4px] p-4 mb-5">
      <img className="w-[50px] h-[50px]" src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className="flex items-center">
        {quantity == 1 && (
          <button className="bg-[#fe5d42] text-[#fff] border-none text-[1.3rem] h-[25px] w-[25px] leading-[25px] p-4 rounded-lg cursor-pointer" onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}

        {quantity > 1 && (
          <button className="bg-[#fe5d42] text-[#fff] border-none text-[1.3rem] h-[25px] w-[25px] leading-[25px] p-4 rounded-lg cursor-pointer" onClick={() => dispatch(decrease(data))}>-</button>
        )} 

        <span className="w-5 mx-2 my-0 text-center">{quantity}</span>
        <button className="bg-[#fe5d42] text-[#fff] border-none text-[1.3rem] h-[25px] w-[25px] leading-[25px] p-4 rounded-lg cursor-pointer" onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
