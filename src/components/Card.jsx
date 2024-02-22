import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import { productQuantity, shortenText } from "../helper/helper";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrease, increase, removeItem } from "../features/cart/cartSlice";

 
function Card({ data }) {
  const { id, title, image, price } = data;

 const state=useSelector((store)=>store.cart)

 const dispatch= useDispatch()
 
  const quantity = productQuantity(state,id)


 

  return (
    <div className="w-[270px] m-[10px] p-5 flex flex-col justify-end items-start bg-[#fff]  rounded-[20px] border-dashed border-[#e2e2e2] border-2">
      <img
        src={image}
        alt={title}
        className="w-[230px] h-[230px] p-5 mb-5 bg-[#fff]"
      />
      <h3 className="text-[#988dff] text-[1.1rem]">{shortenText(title)}</h3>

      <p className="text-[#666] text-[0.9rem] font-[600] mt-2.5 mr-0 mb-[30px] ">
        {price} $
      </p>
      <div className="flex items-center justify-between w-full ">
        <Link
          to={`/products/${id}`}
          className="cursor-pointer h-[25px] text-[#988dff] text-[1.5rem]"
        >
          <TbListDetails />
        </Link>
        <div className="flex items-center">
          {quantity == 1 && (
            <button
              onClick={() => dispatch(removeItem(data))}
              className="bg-[#988dff] text-[#fff] border-none text-[1.7rem] h-8 w-8 leading-8 p-[2px] rounded-lg cursor-pointer text-center"
            >
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button
              onClick={() => dispatch(decrease(data))}
              className="bg-[#988dff] text-[#fff] border-none text-[1.7rem] h-8 w-8 leading-8 p-[2px] rounded-lg cursor-pointer text-center"
            >
              -
            </button>
          )}
          {!!quantity && <span className="w-5 text-center my-2.5 mx-0">{quantity}</span>}
          {quantity == 0 ? (
            <button
              onClick={() => dispatch(addItem(data))}
              className="bg-[#988dff] text-[#fff] border-none text-[1.7rem] h-8 w-8 leading-8 p-[2px] rounded-lg cursor-pointer text-center"
            >
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button
              onClick={() => dispatch(increase(data))}
              className="bg-[#988dff] text-[#fff] border-none text-[1.7rem] h-8 w-8 leading-8 p-[2px] rounded-lg cursor-pointer text-center "
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
