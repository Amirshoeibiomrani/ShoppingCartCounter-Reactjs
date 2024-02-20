import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { createQueryObject, filterProducts, getInitialQuery, searchProducts } from "../helper/helper";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";
// import { useProducts } from "../context/ProductContext";

function ProductsPage() {
  // const products = useProducts();
  const products = []
  
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams,setSearchParams]= useSearchParams()
  
  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams))
  }, [products]);

  useEffect(() => {
    // console.log(query)
    setSearchParams(query)
    setSearch(query.search ||"")
    
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    //  console.log(finalProducts)

    setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = () => {
    // console.log("Search");
    setQuery((query) => createQueryObject(query,{search: search}));
  };


  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className="flex justify-between">
        <div className="flex flex-wrap justify-between w-full">
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
    <Sidebar query={query} setQuery={setQuery}/>
      </div>
    </>
  );
}

export default ProductsPage;
