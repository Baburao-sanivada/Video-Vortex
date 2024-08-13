const Base_Url = "https://video-vortex-backend-n3zc.onrender.com";

export const video_recommendations_api = `${Base_Url}/video/recommendations?channelId=`;

export const videoDetailsApi = `${Base_Url}/video/details?videoId=`;

export const youtube_video_api = `${Base_Url}/home/getRecommendations`;

export const youtube_search_api = `${Base_Url}/search/suggestions?searchText=`;

export const Search_results_api = `${Base_Url}/search/searchResults?searchItem=`;

export const channelImage_api = `${Base_Url}/video/channelImage?channelId=`;

export const video_comments_details_api = `${Base_Url}/video/comments?videoId=`;

var nameList = [
  "Adil",
  "Babu",
  "Afroz",
  "Kiran",
  "Vinay",
  "Balu",
  "Hk",
  "Sai Teja",
];
export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

// Generating Random Text for Live Chat
export function getRandomText(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
