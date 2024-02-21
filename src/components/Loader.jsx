 import { RotatingLines } from 'react-loader-spinner'

function Loader() {
  return (
    <div className= 'flex justify-center w-full h-[100px] p-2.5 text-center mt-[100px]'> 
    <RotatingLines width='90px' height="90px" strokeWidth='3' strokeColor='#fe5d42' />
    </div>
  )
}

export default Loader