import { useState } from "react"
import {ImSearch} from "react-icons/im"

import Card from "../components/Card"
import Loader from "../components/Loader"
import {useProducts} from "../context/ProductContext"

function ProductsPage() {
  const products = useProducts()

const [search ,setSearch] = useState("")
 
const searchHandler = ()=>{
  console.log(search)
}
  return (
   <>
    <div className="">
      <input type="text" placeholder="Search ..." value={search} onChange={e=>setSearch(e.target.value.toLowerCase().trim())} />
      <button onClick={searchHandler}><ImSearch /></button>
    </div>
    <div className="flex justify-between">
      <div className="flex flex-wrap justify-between w-full">
        {!products.length&& <Loader />}
        {products.map((p)=>(
          <Card key={p.id} data={p}/>
        ))}

      </div>
      <div>sidebar</div>
    </div>
    </>
  )
}

export default ProductsPage