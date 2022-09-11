import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";

interface SidebarElementsProps {
  clickHandler?: () => void;
  directTo: string;
  elementName: string;
  svg: string;
}

const SidebarElements = (props: SidebarElementsProps) => {
  return (
    <li onClick={props.clickHandler}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex items-center p-2 text-base font-bold bg-blue-600 !text-white rounded-lg stroke-white fill-white"
            : "flex items-center p-2 text-base !text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 !dark:hover:bg-gray-700 stroke-current fill-current"
        }
        to={props.directTo}
      >
        <SVG
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400"
          src={props.svg}
        />

        <span className="flex-1 ml-3 whitespace-nowrap">
          {props.elementName}
        </span>
      </NavLink>
    </li>
  );
};
export default SidebarElements;
