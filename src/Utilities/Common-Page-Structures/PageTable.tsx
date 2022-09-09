import PageTableBodyForProjects, {
  PageTableBodyForProjectsProps,
} from "./PageTableBodyForProjects";
import PageTableBodyForTickets from "./PageTableBodyForTickets";

export interface PageTableProps extends PageTableBodyForProjectsProps {
  firstTableHeader: string;
  secondTableHeader: string;
  thirdTableHeader: string;
  fourthTableHeader?: string;
  fifthTableHeader?: string;
  pageType: string;
}

const PageTable = ({
  firstTableHeader,
  secondTableHeader,
  thirdTableHeader,
  fourthTableHeader,
  fifthTableHeader,
  pageType,
  ITEM_PER_PAGE,
  pageNumber,
  searchTerm,
  data,
  setPageNumber,
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

      {pageType === "project" && (
        <PageTableBodyForProjects
          data={data}
          ITEM_PER_PAGE={ITEM_PER_PAGE}
          pageNumber={pageNumber}
          searchTerm={searchTerm}
          setPageNumber={setPageNumber}
        />
      )}

      {pageType === "ticket" && (
        <PageTableBodyForTickets
          data={data}
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
