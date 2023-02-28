const VideoCard = ({ info }: any) => {
  // console.log("info: ", info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { likeCount, viewCount } = statistics;
  return (
    <div className="p-3 m-2 shadow-2xl w-64 h-72 rounded-lg">
      <img alt="Thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <div className="flex">
          <span>
            <b>Likes</b>
          </span>
          :<li>{likeCount}</li>
          <span className="ml-2">
            <b>Views</b>
          </span>
          :<li>{viewCount}</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
