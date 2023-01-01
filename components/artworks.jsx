import axios from "axios";
import { useEffect, useState } from "react";
import * as NProgress from "nprogress";
import "nprogress/nprogress.css";
import Artwork from "./artwork";
import Tabs from "./tabs";
import usePrevious from "../hooks/usePrevious";

const ArtworkList = () => {
  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading , setLoading] = useState(false)
  const [tab, setTab] = useState("trending");
  const prevTab = usePrevious(tab);

  const getArtworks = async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        `/api/getArtworks?tab=${tab}&page=${page}`
      );
      const artworks = response.data;
      setArtworks((prev) => [...prev, ...artworks]);
    } catch (ex) {
      console.log(ex);
    } finally {
      setLoading(false)
    }
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if(loading) NProgress.start()
    else NProgress.done()
  } , [loading])

  useEffect(() => {
    if (prevTab) {
      // not first render
      setArtworks([]);
      setPage(1);
    }
  }, [tab]);

  useEffect(() => {
      getArtworks()
  } , [page])
  
  return (
    <>
      <Tabs currentTab={tab} setTab={setTab} />
      <div className="grid grid-cols-1 mt-14 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
        {artworks.map((artwork,i) => (
          <Artwork artwork={artwork} key={i} />
        ))}
      </div>

      {artworks.length != 0 && (
        <div className="flex flex-col space-y-4 justify-center mt-5 py-3 items-center">
          <button className="btn" onClick={loadMore} disabled={loading}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default ArtworkList;
