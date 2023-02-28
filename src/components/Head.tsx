import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
// interface PropHead {
//   searchQuery: string;
//   setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
// }
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const getSearchSuggestions = async () => {
    //console.log("searchQuery:----- ", searchQuery);
    const apiCallForSearch = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const apiCallForSearchToJSON = await apiCallForSearch.json();
    console.log("apiCallForSearchToJSON: ", apiCallForSearchToJSON);
    setSuggestions(apiCallForSearchToJSON[1]);
  };
  useEffect(() => {
    let timer = setTimeout(() => getSearchSuggestions(), 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="w-10 h-10 cursor-pointer"
          src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg"
          alt="hamberger"
        />
        <a href="/">
          <img
            className="w-20 h-16 ml-3 mt-[-12px]"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="user"
          />
        </a>
      </div>
      <div className="px-10 col-span-10">
        <div>
          <input
            className=" w-1/2 border border-gray-400  rounded-l-full p-1"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400  rounded-r-full p-1 px-3 bg-slate-100 ">
            🔍
          </button>
        </div>
        <div className="absolute  bg-white py-2 px-3 shadow-lg rounded-lg border border-gray-100 w-[45rem]">
          {showSuggestions && (
            <ul>
              {suggestions?.map((s) => (
                <li
                  key={s}
                  className="p-2 m-2 shadow-sm hover:bg-slate-200 border"
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="w-10 h-10"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
