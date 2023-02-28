import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

// interface PropVideoContainer {

// }
const VideoContainer = () => {
  const [videos, setVideos] = useState<any>([]);
  const getVideos = async () => {
    const apiCall = await fetch(YOUTUBE_API);
    const convertDataToJson = await apiCall.json();
    setVideos(convertDataToJson.items);
    //console.log("convertDataToJson: ", convertDataToJson);
  };
  useEffect(() => {
    getVideos();
  }, []);

  if (videos.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="flex flex-wrap">
      {videos.map((content: any) => (
        <Link to={`/watch?v=${content.id}`}>
          <VideoCard key={content.id} info={content} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
