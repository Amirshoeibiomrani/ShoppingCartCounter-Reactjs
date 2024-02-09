import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";

function Card({ data }) {
  const { id, title, image, price } = data;
  return (
    <div className="w-[270px] m-[10px] p-5 flex flex-col justify-end items-start bg-[#fff]  rounded-[20px] border-dashed border-[#e2e2e2] border-2">
      <img
        src={image}
        alt={title}
    
        className="w-[230px] h-[230px] p-5 mb-5 bg-[#fff]"
      />
      <h3 className="text-[#fe5d42] text-[1.1rem]">{shortenText(title)}</h3>

      <p className="text-[#666] text-[0.9rem] font-[600] mt-2.5 mr-0 mb-[30px] ">
        {price} $
      </p>
      <div className="flex items-center justify-between w-full">
        <Link
          to={`/products/${id}`}
          className="cursor-pointer h-[25px] text-#fe5d42 text-[1.5rem]"
        >
          <TbListDetails />
        </Link>
        <div className="flex items-center">
          <button className="bg-[#fe5d42] text-[#fff] border-none font-[1.7rem] h-8 w-8 leading-8 p-[2px] rounded-lg cursor-pointer">
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
