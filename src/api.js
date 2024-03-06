import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 49US2PFCnzIO3n0NzMsNtYnNwoDLkUCS_WEALbcHz0Q",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
