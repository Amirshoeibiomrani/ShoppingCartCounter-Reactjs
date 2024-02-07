import Card from "../components/Card"
import {useProducts} from "../context/ProductContext"

function ProductsPage() {
  const products = useProducts()
  console.log(products)
  return (
    <div className="flex justify-between">
      <div className="flex flex-wrap justify-between w-full">
        {!products.length&& <p>Loading...</p>}
        {products.map((p)=>(
          <Card key={p.id} data={p}/>
        ))}

      </div>
      <div>sidebar</div>
    </div>
  )
}

export default ProductsPage