import React from "react";
//import { useSelector } from "react-redux";
import { useAppSelector } from "../utils/hooks";

const SideBar = () => {
  const isMenuOpen = useAppSelector((state) => state.app.isMenuOpen);
  return (
    <>
      {isMenuOpen ? (
        <div className="w-40 shadow-lg p-5 h-full">
          <h1 className="font-bold">Home</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>Podcast</li>
          </ul>
          <hr />
          <h1 className="font-bold py-2">Shorts</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>Podcast</li>
          </ul>
          <hr />
          <h1 className="font-bold py-2">Subscription</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>Podcast</li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default SideBar;
