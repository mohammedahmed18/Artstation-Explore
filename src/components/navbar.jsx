import logo from "../images/artstation-white.png";
import Links from "./links";
const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 py-3 bg-base-300/75 backdrop-blur-sm z-[999999]">
      <div className="mx-auto w-full md:w-[90%] lg:w-[80%] md:px-1 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} className="w-10" />
            <span className="text-lg font-bold">Artstation Explore</span>
          </div>
          {/* links */}
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
