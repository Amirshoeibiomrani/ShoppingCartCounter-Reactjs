import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";

function Sidebar({setQuery}) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    // console.log(tagName)
    const category = event.target.innerText.toLowerCase();

    if (tagName != "LI") return;
    // console.log(category);
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div>
      {" "}
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
  );
}

export default Sidebar;
