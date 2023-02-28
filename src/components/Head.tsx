import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
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
      <div className="flex justify-center col-span-10">
        <input className=" w-1/2 border border-black  rounded-l-full p-2" />
        <button className="border border-black  rounded-r-full p-2">
          Search
        </button>
      </div>
      <div className="col-span-1">
        {" "}
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
