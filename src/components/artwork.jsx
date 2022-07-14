import { LazyLoadImage } from "react-lazy-load-image-component";
import User from "./user";

const Artwork = ({ artwork }) => {
  return (
    <div className="bg-base-300 p-3 rounded-md drop-shadow-lg flex flex-col justify-between">
      <LazyLoadImage
        alt="artwork cover"
        src={artwork.smaller_square_cover_url}
      />
      <p className="my-4 font-bold text-lg">{artwork.title}</p>
      <User user={artwork.user} />
      <a href={artwork.url} target="_blank" className="btn btn-ghost mt-2">
        view on artstation
      </a>
    </div>
  );
};

export default Artwork;
