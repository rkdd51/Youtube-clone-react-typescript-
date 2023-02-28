const GOOGLE_API_KEY: string = "AIzaSyAzYRukG22Z_VXdm60H0fdm9OdvdSH-G_4";

export const YOUTUBE_API: string =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API: string =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
