import { faGithub, faArtstation } from "@fortawesome/free-brands-svg-icons";
import LinkItem from "./link-item";
const Links = () => {
  return (
    <>
      <div class="dropdown dropdown-end md:hidden">
        <label tabindex="0" class="btn btn-primary m-1">
          Socials
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box space-y-2 w-52"
        >
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
        </ul>
      </div>

      <ul className="items-center gap-3 hidden md:flex">
        {/* githun */}
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
      </ul>
    </>
  );
};

export default Links;
