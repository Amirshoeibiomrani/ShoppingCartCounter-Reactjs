import { shortenText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";
function BasketCard({ data, clickHandler }) {

  const { image, title, quantity } = data;
  return (
    <div className="flex items-center justify-between border border-2 border-dashed-[#e2e2e2] rounded-[4px] p-4 mb-5">
      <img className="w-[50px] h-[50px]" src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className="flex items-center">
        {quantity == 1 && (
          <button className="bg-[#fe5d42] text-[#fff] border-none text-[1.3rem] h-[25px] w-[25px] leading-[25px] p-2 rounded-lg cursor-pointer" onClick={() => clickHandler("REMOVE_ITEM")}>
            <MdDeleteOutline />{" "}
          </button>
        )}
        {quantity > 1 && (
          <button className="bg-[#fe5d42] text-[#fff] border-none text-[1.3rem] h-[25px] w-[25px] leading-[25px] p-2 rounded-lg cursor-pointer" onClick={() => clickHandler("DECREASE")}>-</button>
        )}
        <span className="w-5 mx-2 my-0 text-center">{quantity}</span>
        <button className="bg-[#fe5d42] text-[#fff] border-none text-[1.3rem] h-[25px] w-[25px] leading-[25px] p-2 rounded-lg cursor-pointer" onClick={() => clickHandler("INCREASE")}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
