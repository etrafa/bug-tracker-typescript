import { IProject } from "../../Interfaces/Firebase-Interfaces/ProjectInterface";
import { Link } from "react-router-dom";

export interface PageTableBodyForUserProps {
  projectData?: IProject[] | null;
  pageNumber: number;
  searchTerm: string;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  ITEM_PER_PAGE: number;
}

const PageTableBodyForUser = (props: PageTableBodyForUserProps) => {
  const pagesVisited = props.pageNumber * props.ITEM_PER_PAGE;

  const showProjects = props?.projectData
    ?.filter((val) => {
      if (props.searchTerm === "") return val;
      else if (
        val.projectName?.toLowerCase().includes(props.searchTerm.toLowerCase())
      )
        return val;
    })
    .slice(pagesVisited, pagesVisited + props.ITEM_PER_PAGE)
    .map((project) => {
      return (
        <tr
          key={project?.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {project.projectName}
          </th>
          <td className="px-6 py-4">{project.projectDescription}</td>
          <td className="px-6 py-4">
            <ul className="list-disc">
              <Link to={`/manage-project-user`}>
                <li className="text-fbFillColor cursor-pointer underline hover:text-black">
                  Manage Users
                </li>
              </Link>
              <Link to={`/projects/${project.id}`}>
                <li className="text-fbFillColor cursor-pointer underline hover:text-black mt-3">
                  Details
                </li>
              </Link>
            </ul>
          </td>
        </tr>
      );
    });

  return <tbody>{showProjects}</tbody>;
};
export default PageTableBodyForUser;
