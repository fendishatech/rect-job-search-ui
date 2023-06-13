import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div className="grid gap-10 bg-grayIsh rounded-[10px] p-[3rem]">
      {/* Search */}
      <form action="">
        <div className="flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-grayIsh-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] cursor-pointer" />
            <input
              type="text"
              className="w-[100%] bg-transparent text-blue-500 focus:outline-none "
              placeholder="Search top Jobs ..."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor cursor-pointer" />
          </div>
          {/* section two */}
          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] cursor-pointer" />
            <input
              type="text"
              className="w-[100%] bg-transparent text-blue-500 focus:outline-none "
              placeholder="Search by company ..."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor cursor-pointer" />
          </div>
          {/* Section three */}
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] cursor-pointer" />
            <input
              type="text"
              className="w-[100%] bg-transparent text-blue-500 focus:outline-none "
              placeholder="Search by location ..."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor cursor-pointer" />
          </div>
          {/* Search Button */}
          <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white">
            Search
          </button>
        </div>
      </form>
      {/* Filters */}
      <div className="flex justify-center items-center gap-10">
        {/* Relevance */}
        <div className="flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            {" "}
            Sort by:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] focus:outline-none px-4 py-1"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>
        {/* Job Types */}
        <div className="flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold">
            {" "}
            Type:
          </label>
          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] focus:outline-none px-4 py-1"
          >
            <option value="">Full Time</option>
            <option value="">Contractual</option>
            <option value="">Remote</option>
            <option value="">Part-time</option>
          </select>
        </div>
        {/* Level */}
        <div className="flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold">
            {" "}
            Level:
          </label>
          <select
            name=""
            id="level"
            className="bg-white rounded-[3px] focus:outline-none px-4 py-1"
          >
            <option value="">Intern</option>
            <option value="">Junior</option>
            <option value="">Senior</option>
            <option value="">Expert</option>
            <option value="">Advocate</option>
          </select>
        </div>
        {/* Clear presets */}
        <span className="px-2 py-1 text-[#a1a1a1] border-[1px] border-[#a1a1a1] rounded hover:bg-slate-200 cursor-pointer">
          Clear All
        </span>
      </div>
    </div>
  );
};

export default Search;
