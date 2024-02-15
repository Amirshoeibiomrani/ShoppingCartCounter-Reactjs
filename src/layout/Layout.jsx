import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "rect-icons/pi";

import { useCart } from "../context/CartContext";}

function Layout({ children }) {
    const [state] = useCart()

  return (
    <>
      <header className="flex items-center justify-between bg-[#fe5d42] text-[#fff] py-2.5 px-5 mt-0 mr-2.5 mb-[60px] rounded-[10px]">
        <Link to="/products" className="text-[1.5rem] font-semibold ">BotoShop</Link>
        <Link to="/checkout" className="text-[1.5rem] font-semibold ">
        <div className="text-[1.6rem] bg-[#fff ] text-center text-[#fe5d42] h-[35px] w-[35px] rounded-[9px] p-2 relative ">

          <PiShoppingCartSimpleBold />
         {!!state.itemsCounter&& <span className="text-[0.9rem] w-5 h-5 leading-5 bg-black text-[#fff] rounded-[50%] absolute top-[-10px] right-[-10px] ">{state.itemsCounter}</span>}
        </div>
        </Link>
      </header>
      {children}
      <footer  className="text-center bg-[#fe5d42] p-5 m-2.5 mt-20 rounded-[10px] text-[#fff]  ">
        <p>Developed by Milad With ❤️❤️❤️</p> </footer>
    </>
  );
}

export default Layout;