import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductContext";
import Loader from "../components/Loader";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

function DetailsPage() {
  const { id } = useParams();

  const productDetails = useProductDetails(+id);

  if (!productDetails) return <Loader />;

  return (
    <div className="flex items-start min-h-[1000px] w-full">
      <img className="w-[300px ] px-[15px] py-[25px] bg-[#fff] border-2 border-dashed border-[#fe5d42] rounded-[50px] m-2.5 mr-[50px]" src={productDetails.image} alt={productDetails.title} />
      <div className="w-full border-[#e2e2e2] border-2 border-dashed m-2.5 p-[25px] rounded-[50px] ">
        
      <h3 className="text-[#fe5d42] text-[1.5rem ] mb-10 ">{productDetails.title}</h3>
      <p className="text-gray-600 w-[500px] text-[1.1rem] mb-10>{productDetails.description}</p>
      <p className="mb-2.5">
        <SiOpenproject />
        {productDetails.category}
      </p>
      <div className="">
        <span className="price">
          <IoMdPricetag />
          {productDetails.price}$
        </span>
      </div>
        <Link to="/products">
          <FaArrowLeft />
          <span>Back to Shop</span>
        </Link>
      </div>
    </div>
  );
}

export default DetailsPage;
