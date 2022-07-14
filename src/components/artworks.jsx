import axios from "axios";
import { useEffect, useState } from "react";
import Artwork from "./artwork";
import artstationLogo from "../images/artstation.png";
import Navbar from "./navbar";
const ArtworkList = () => {
  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const getApiUrl = (page) => {
    return `/api/v2/community/explore/projects/community.json?page=${page}&per_page=48&dimension=all`;
  };
  useEffect(() => {
    const getArtworks = async () => {
      try {
        const response = await axios.get(getApiUrl(page));
        const artworks = response.data.data;
        setArtworks(artworks);
      } catch (ex) {
        console.log(ex);
      }
    };
    getArtworks();
  }, []);

  const loadMore = async () => {
    setLoading(true);
    const nextPage = page + 1;
    setPage(nextPage);
    const response = await axios.get(getApiUrl(nextPage));
    setLoading(false);
    const new_artworks = response.data.data;
    setArtworks([...artworks, ...new_artworks]);
  };
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 mt-14 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
        {artworks.map((artwork) => (
          <Artwork artwork={artwork} key={artwork.id} />
        ))}
      </div>

      {artworks.length != 0 && (
        <div className="flex flex-col space-y-4 justify-center mt-5 py-3 items-center">
          {loading && (
            <img className="w-20 h-20 arstaion-loader" src={artstationLogo} />
          )}
          <button className="btn" onClick={loadMore}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default ArtworkList;
