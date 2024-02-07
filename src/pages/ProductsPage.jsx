import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";

function ProductsPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");

  const searchHandler = () => {
    console.log(search);
  };

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    // console.log(tagName)
    const category = event.target.innerText.toLowerCase();
    if (tagName != "LI") return;
    console.log(category);
  };
  return (
    <>
      <div className="">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-wrap justify-between w-full">
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
