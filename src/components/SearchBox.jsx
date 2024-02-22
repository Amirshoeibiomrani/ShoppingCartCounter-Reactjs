import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

function SearchBox({search,setSearch,setQuery}) {
    const searchHandler = () => {
        // console.log("Search");
        setQuery((query) => createQueryObject(query,{search: search}));
      };
  return (
<div className="mt-0 flex justify-center mb-[50px]">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())} className="border-2 border-dashed border-[#988dff] p-2.5 w-[250px] text-[0.9rem ] text-[#988dff] rounded-[10px] mr-2.5 focus:outline-none  "
        />
        <button onClick={searchHandler} className="p-2.5 text-[1rem] bg-[#988dff] text-[#fff] border-none rounded-[10px] cursor-pointer">
          <ImSearch />
        </button>
      </div>  )
}

export default SearchBox