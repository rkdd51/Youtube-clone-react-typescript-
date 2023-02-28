const VideoCard = ({ info }: any) => {
  // console.log("info: ", info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { likeCount, viewCount } = statistics;
  //Convert 1000 to 1K
  const formatCash = (n: number) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };
  let likeCountData = formatCash(likeCount);
  let viewCountData = formatCash(viewCount);

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
          :<li>{likeCountData}</li>
          <span className="ml-2">
            <b>Views</b>
          </span>
          :<li>{viewCountData}</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
