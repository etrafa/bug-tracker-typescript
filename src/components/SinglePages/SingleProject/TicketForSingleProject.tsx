import { useState } from "react";
import { useGetDocs } from "../../../customHooks/useGetDocs";
import { IProject } from "../../../Interfaces/Firebase-Interfaces/ProjectInterface";
import { ITicketsRoot } from "../../../Interfaces/Firebase-Interfaces/TicketsInterface";
import PageSearch from "../../../Utilities/Common-Page-Structures/PageSearch";
import PageTable from "../../../Utilities/Common-Page-Structures/PageTable";
import PageTableBodyForProjects from "../../../Utilities/Common-Page-Structures/PageTableBodyForProjects";
import PageTableBodyForTickets from "../../../Utilities/Common-Page-Structures/PageTableBodyForTickets";

interface TicketForSingleProjectProps {
  projectID: string;
}

const TicketForSingleProject = (props: TicketForSingleProjectProps) => {
  const [pageNumber, setPageNumber] = useState(0);
  const { dbData } = useGetDocs<ITicketsRoot>(
    `projects/${props.projectID}/tickets`
  );
  console.log(dbData);

  return (
    <div className="w-full lg:w-6/12 text-center overflow-auto mr-16">
      <PageSearch
        searchInputPlaceHolder="Search ticket"
        searchInputChangeHandler={() => console.log("hey")}
      />
      <PageTable
        ITEM_PER_PAGE={5}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        data={dbData}
        firstTableHeader="Title"
        pageType="ticket"
        searchTerm=""
        secondTableHeader="Submitter"
        thirdTableHeader="Status"
        fourthTableHeader="Created"
        fifthTableHeader=""
        ticketData={dbData}
      />
    </div>
  );
};
export default TicketForSingleProject;
