import { IProject } from "../../Interfaces/Firebase-Interfaces/ProjectInterface";
import { Link } from "react-router-dom";
import { useAuth } from "../../firebase/firebaseConfig";
import { useGetSingleDoc } from "../../customHooks/useGetSingleDoc";
import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";

export interface PageTableBodyForProjectsProps {
  projectData?: IProject[] | null;
  pageNumber: number;
  searchTerm: string;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  ITEM_PER_PAGE: number;
}

const PageTableBodyForProjects = (props: PageTableBodyForProjectsProps) => {
  const currentUser = useAuth(); // get current user id
  //get current user ROLE
  const { dbData: user } = useGetSingleDoc<IFirebaseUser>(
    "users",
    currentUser?.uid || "undefined"
  );

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
        <tr key={project?.id} className="bg-white border-b hover:bg-gray-50 ">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            {project.projectName}
          </th>
          <td className="px-6 py-4">{project.projectDescription}</td>
          <td className="px-6 py-4">
            <ul className="list-disc">
              {/* //*IF CURRENT USER'S ROLE IS ADMIN SHOW MANAGE USERS SECTION */}
              {user?.role === "admin" ? (
                <Link to={`/manage-project-user`}>
                  <li className="text-fbFillColor cursor-pointer underline hover:text-black">
                    Manage Users
                  </li>
                </Link>
              ) : null}
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
export default PageTableBodyForProjects;
