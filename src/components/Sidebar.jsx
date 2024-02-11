import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
// Pro style
import { Categories } from "../constants/list";



function Sidebar({ query, setQuery }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    // console.log(tagName)
    const category = event.target.innerText.toLowerCase();

    if (tagName != "LI") return;
    // console.log(category);
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className="w-[200px] h-fit m-2.5 p-5 ml-[30px] bg-[#fff] border-2 border-dashed border-[#e2e2e2] rounded-[20px] ">
      <div className="w-[200px] flex items-center mb-2.5 text-[#fe5d42] font-medium">
        <FaListUl />
        <p className="ml-2.5">Categories</p>
      </div>

      <ul onClick={categoryHandler}>
        {/* <li className="list-none p-[5px] cursor-pointer hover:text-[#fe5d42]"> */}
        {Categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() == query.category
                ? "list-none p-[5px] cursor-pointer hover:text-[#fe5d42] bg-[#f7753d49] rounded-[10px] text-[#fe5d42]"
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
