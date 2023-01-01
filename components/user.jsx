import { LazyLoadImage } from "react-lazy-load-image-component";

const User = ({ user }) => {
  return (
    <div className="my-2 flex gap-2 items-center bg-base-100 py-2 rounded-2xl hover:bg-base-100/70 duration-300 ease-in-out px-1">
      <LazyLoadImage
        src={user.medium_avatar_url}
        className="rounded-full w-12 h-12"
      />
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.artstation.com/${user.username}`}
        className="ml-2 text-primary-content overflow-hidden hover:text-primary-focus transition-colors duration-300"
      >
        @{user.username}
      </a>
    </div>
  );
};

export default User;
