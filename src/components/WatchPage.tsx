import React, { useEffect } from "react";
//import { useDispatch } from "react-redux";
import { useAppDispatch } from "../utils/hooks";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let [searchParams] = useSearchParams();
  //console.log("searchParams: ", searchParams.get("v")); // Still not clear how this is being done
  return (
    <div className="m-2 p-2 ">
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
