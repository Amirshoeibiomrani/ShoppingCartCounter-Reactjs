import { useEffect, useState } from "react";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import { createQueryObject, filterProducts, getInitialQuery, searchProducts } from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

function ProductsPage() {
  const products = useProducts();
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
    <Sidebar setQuery={setQuery}/>
      </div>
    </>
  );
}

export default ProductsPage;
