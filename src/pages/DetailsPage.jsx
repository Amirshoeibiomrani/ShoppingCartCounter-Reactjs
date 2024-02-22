import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import Loader from "../components/Loader";
import { fetchProducts } from "../features/product/productSlice";
import { useEffect } from "react";

function DetailsPage() {

  // baraye gereftan ettlae mahsul bayad id mahsul ro begirim  
  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
       
// Baraye tabdil meghdar string be number >>> +id
  const productDetails = useSelector(store=>store.product.products.find(i => i.id == +id))

  if (!productDetails) return <Loader />;

  return (
    <div className="flex items-start min-h-[1000px] w-full">
      <img className="w-[300px ] py-[15px] px-[25px]  bg-[#fff] border-2 border-dashed border-[#988dff] rounded-[50px] m-2.5 mr-[50px]" src={productDetails.image} alt={productDetails.title} />
      <div className="w-full border-[#e2e2e2] border-2 border-dashed m-2.5 p-[25px] rounded-[50px] ">
        
      <h3 className="text-[#988dff] text-[1.5rem] mb-10 ">{productDetails.title}</h3>
      <p className="text-gray-600 w-[500px] text-[1.1rem] mb-10">{productDetails.description}</p>
      <p className = "mb-2.5">
        <SiOpenproject className="text-[#988dff] mr-2.5"/>
        {productDetails.category}
      </p> 
      <div className="flex justify-between">
        <span className="price">
          <IoMdPricetag className="text-[#988dff] mr-2.5"/>
          {productDetails.price} $
        </span>
        
        <Link to="/products" className="flex items-center bg-[#988dff] py-[5px] px-[10px] text-[#fff] rounded-[12px]">
          <FaArrowLeft className="mr-2.5"/>
          <span>Back to Shop</span>
        </Link>
      </div>
      </div>
    </div>
    
  );
}

export default DetailsPage;
