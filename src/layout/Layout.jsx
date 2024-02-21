import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useSelector } from "react-redux";

 
function Layout({ children }) {
const state = useSelector((store) => store.cart) 
  return (
    <>
      <header className="flex items-center justify-between bg-[#fe5d42] text-[#fff] py-2.5 px-5 mt-0 mr-2.5 mb-[60px] rounded-[10px]">
        <Link to="/products" className="text-[1.5rem] font-semibold ">
          AmirShop
        </Link> 
        <Link to="/checkout" className="text-[1.5rem] font-semibold ">
          <div className="text-center text-[1.6rem] bg-[#fff] text-[#fe5d42] h-[35px] w-[35px] rounded-[9px] p-2 relative flex justify-center">
            <PiShoppingCartSimpleBold />
          {!!state.itemsCounter && <span className="text-[0.8rem] w-5 h-5 leading-5 bg-[#000] text-[#fff] rounded-[50%] absolute top:[-10px] right-[-10px]">{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className="text-center bg-[#fe5d42] p-8 m-2.5 mt-20 rounded-[10px] text-[#fff]  ">
        <p>Developed by AMIR With ❤️❤️❤️</p>{" "}
      </footer>
    </>
  );
}

export default Layout;
