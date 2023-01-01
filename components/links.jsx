import { faGithub, faArtstation , faInstagram } from "@fortawesome/free-brands-svg-icons";
import LinkItem from "./link-item";
const Links = () => {
  const socials = <>
        <LinkItem
            icon={faInstagram}
            text="Instagram"
            link="https://www.instagram.com/mo_ali_art/"
          />
         <LinkItem
            icon={faArtstation}
            text="artstation"
            link="https://www.artstation.com/mohammed_ahmed"
          />
          <LinkItem
            icon={faGithub}
            text="Github"
            link="https://github.com/mohammedahmed18"
          />
       
  </>
  return (
    <>
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex="0" className="btn btn-primary m-1 btn-sm">
          Socials
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box space-y-2 w-52"
        >
         {socials}
        </ul>
      </div>

      <ul className="items-center gap-3 hidden md:flex">
        {socials}       
      </ul>
    </>
  );
};

export default Links;
