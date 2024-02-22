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
      <div className="w-[200px] flex items-center mb-2.5 text-[#988dff] font-medium">
        <FaListUl />
        <p className="ml-2.5">Categories</p>
      </div>

      <ul onClick={categoryHandler}>
        {/* <li className="list-none p-[5px] cursor-pointer hover:text-[#988dff]"> */}
        {Categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() == query.category
                ? "list-none p-[5px] cursor-pointer hover:text-[#171248] bg-[#988dff] rounded-[10px] text-[#fff]"
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
