import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkItem = ({ text, icon, link }) => {
  return (
    // <li className="flex items-center">
      <a target="_blank" rel="noreferrer" href={link} className="btn btn-ghost">
        <FontAwesomeIcon icon={icon} size="2x" width={25} height={25}/>
        <span className="ml-2 text-primary-content">{text}</span>
      </a>
    // </li>
  );
};

export default LinkItem;
