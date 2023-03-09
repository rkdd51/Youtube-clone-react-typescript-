import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
// interface PropHead {
//   searchQuery: string;
//   setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
// }
const Head = () => {
  const [searchQuery, setSearchQuery] = useState(""); //For input box
  const [suggestions, setSuggestions] = useState([]); // For  storing API Value
  const [showSuggestions, setShowSuggestions] = useState(false); // For handling blur and focus of input box
  const dispatch = useDispatch();
  const getSearchSuggestions = async () => {
    try {
      const apiCallForSearch = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const apiCallForSearchToJSON = await apiCallForSearch.json();
      setSuggestions(apiCallForSearchToJSON[1]);

      //cache Dispatch
      dispatch(
        cacheResults({
          [searchQuery]: apiCallForSearchToJSON[1],
        })
      );
    } catch (err) {
      console.log(err, "Error hai bhai");
    }
  };

  const searchCache = useSelector((state) => state.search);
  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  // };
  return (
    <div className="flex p-2 m-2 shadow-lg justify-between">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="w-10 h-10 cursor-pointer"
          src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg"
          alt="hamburger"
        />
        <a href="/">
          <img
            className="w-20 h-16 ml-3 mt-[-12px]"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="user"
          />
        </a>
      </div>
      <div className="col-span-10 w-1/2 relative">
        <div>
          <input
            className="w-full border border-gray-400  rounded-l-full p-2 bg-gray-100"
            type="text"
            value={searchQuery}
            onChange={function handleSearch(e) {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="absolute border border-gray-400  rounded-r-full py-2 px-3 bg-slate-100 ">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div
            className={`absolute bg-gray-100  shadow-lg rounded-lg border border-gray-100 w-full  ${
              searchQuery === "" ? "invisible" : null
            }`}
          >
            s
            <ul>
              {suggestions?.map((s) => (
                <li
                  key={s}
                  className="p-2 m-2 shadow-sm hover:bg-slate-200 border "
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="w-10 h-10 text-end"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
