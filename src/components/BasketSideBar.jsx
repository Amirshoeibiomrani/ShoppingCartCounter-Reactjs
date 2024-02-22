import {TbChecklist} from 'react-icons/tb'
import {FaHashtag} from 'react-icons/fa6'
import {BsPatchCheck} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { checkout } from '../features/cart/cartSlice'

function BasketSideBar({state}) {
  const dispatch = useDispatch()

  return (
    <div className='w-[300px] mr-[30px] border-2 border-dashed border-[#988dff] rounded-[30px] p-5'>
      <div className='flex items-center text-[#988dff] mb-[15px] '>
        <TbChecklist className='text-[1.3rem] mr-[5px] '/>
        <p>Total:</p>
        <span className='text-gray-600 ml-2.5'>{state.total} $</span>
        </div>  
        <div  className='flex items-center text-[#988dff] mb-[15px]'>
        <FaHashtag className='text-[1.3rem] mr-[5px] ' />
        <p>Quantity:</p>
        <span className='text-gray-600 ml-2.5'>{state.itemsCounter}</span>
        </div>  
        <div className='flex items-center text-[#988dff] mb-[15px]'>
        <BsPatchCheck className='text-[1.3rem] mr-[5px] ' />
        <p>Status:</p>
        <span className='text-gray-600 ml-2.5'>{!state.checkout && "Pending... "}</span>
        </div>  
        <button onClick={()=>dispatch(checkout())} className="w-full mt-10 bg-[#988dff] text-[#fff] border-none text-[1.1rem] p-[5px] rounded-[10px] cursor-pointer">Checkout</button>
    </div>
  )
}

export default BasketSideBar