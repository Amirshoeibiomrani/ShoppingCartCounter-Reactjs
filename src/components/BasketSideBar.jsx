import {TbChecklist} from 'react-icons/tb'
import {FaHashtag} from 'react-icons/fa6'
import {BsPatchCheck} from 'react-icons/bs'

function BasketSideBar({state}) {
  return (
    <div>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{state.total}</span>
        </div>  
        <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.quantity}</span>
        </div>  
        <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.checkout && "Pending..."}</span>
        </div>  
    </div>
  )
}

export default BasketSideBar