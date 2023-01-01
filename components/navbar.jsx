import Image from "next/image";
import Links from "./links";
const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 py-1 bg-base-300/80 backdrop-blur-md z-[999999]">
      <div className="mx-auto w-full md:w-[90%] lg:w-[80%] md:px-1 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src={`/images/artstation-white.png`}  width={30} height={30} alt="logo"/>
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
