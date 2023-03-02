import React, { useEffect } from "react";
//import { useDispatch } from "react-redux";
import { useAppDispatch } from "../utils/hooks";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat.jsx";

const WatchPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let [searchParams] = useSearchParams();
  //console.log("searchParams: ", searchParams.get("v")); // Still not clear how this is being done
  return (
    <div className="m-2 p-2 flex w-full">
      <div>
        {" "}
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="w-full">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
