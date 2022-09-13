//components
import PageTableBodyForTickets, {
  PageTableBodyForTicketsProps,
} from "./PageTableBodyForTickets";
import PageTableBodyForProjects, {
  PageTableBodyForProjectsProps,
} from "./PageTableBodyForProjects";

//interfaces
import { IProject } from "../../Interfaces/Firebase-Interfaces/ProjectInterface";
import { ITicketsRoot } from "../../Interfaces/Firebase-Interfaces/TicketsInterface";
import PageTableBodyForUser, {
  PageTableBodyForUserProps,
} from "./PageTableBodyForUser";
import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";

export interface PageTableProps
  extends PageTableBodyForProjectsProps,
    PageTableBodyForTicketsProps,
    PageTableBodyForUserProps {
  firstTableHeader: string;
  secondTableHeader: string;
  thirdTableHeader?: string;
  fourthTableHeader?: string;
  fifthTableHeader?: string;
  pageType: string;
  data: IProject[] | ITicketsRoot[] | IFirebaseUser[] | null;
  searchTerm: string;
  ITEM_PER_PAGE: number;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const PageTable = ({
  firstTableHeader,
  secondTableHeader,
  thirdTableHeader,
  fourthTableHeader,
  fifthTableHeader,
  pageType,
  searchTerm,
  ITEM_PER_PAGE,
  pageNumber,
  projectData,
  ticketData,
  setPageNumber,
  userDataForTable,
}: PageTableProps) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-12">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="px-6 py-3">{firstTableHeader}</th>
          <th className="px-6 py-3">{secondTableHeader}</th>
          {thirdTableHeader && (
            <th className="px-6 py-3">{thirdTableHeader}</th>
          )}
          {fourthTableHeader && (
            <th className="px-6 py-3">{fourthTableHeader}</th>
          )}
          {fifthTableHeader && (
            <th className="px-6 py-3">{fifthTableHeader}</th>
          )}
        </tr>
      </thead>

      {projectData && pageType === "project" && (
        <PageTableBodyForProjects
          projectData={projectData}
          ITEM_PER_PAGE={ITEM_PER_PAGE}
          pageNumber={pageNumber}
          searchTerm={searchTerm}
          setPageNumber={setPageNumber}
        />
      )}

      {ticketData && pageType === "ticket" && (
        <PageTableBodyForTickets
          ticketData={ticketData}
          ITEM_PER_PAGE={ITEM_PER_PAGE}
          pageNumber={pageNumber}
          searchTerm={searchTerm}
          setPageNumber={setPageNumber}
        />
      )}

      {userDataForTable && pageType === "user" && (
        <PageTableBodyForUser
          userDataForTable={userDataForTable}
          ITEM_PER_PAGE={ITEM_PER_PAGE}
          pageNumber={pageNumber}
          searchTerm={searchTerm}
          setPageNumber={setPageNumber}
        />
      )}
    </table>
  );
};
export default PageTable;
