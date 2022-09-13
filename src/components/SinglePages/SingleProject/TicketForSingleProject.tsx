import { useState } from "react";
import { useGetDocs } from "../../../customHooks/useGetDocs";
import { IProject } from "../../../Interfaces/Firebase-Interfaces/ProjectInterface";
import { ITicketsRoot } from "../../../Interfaces/Firebase-Interfaces/TicketsInterface";
import PagePagination from "../../../Utilities/Common-Page-Structures/PagePagination";
import PageSearch from "../../../Utilities/Common-Page-Structures/PageSearch";
import PageTable from "../../../Utilities/Common-Page-Structures/PageTable";
import PageTableBodyForProjects from "../../../Utilities/Common-Page-Structures/PageTableBodyForProjects";
import PageTableBodyForTickets from "../../../Utilities/Common-Page-Structures/PageTableBodyForTickets";

interface TicketForSingleProjectProps {
  projectID: string;
}

const TicketForSingleProject = (props: TicketForSingleProjectProps) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const { dbData } = useGetDocs<ITicketsRoot>(
    `projects/${props.projectID}/tickets`
  );

  const url = window.location.href;

  return (
    <div className="w-full lg:w-6/12 text-center overflow-auto mr-16">
      <header>
        <h1 className="text-3xl text-black mb-10 font-bold">
          All tickets for this Project
        </h1>
      </header>
      <PageSearch
        searchInputPlaceHolder="Search ticket"
        searchInputChangeHandler={(e) => setSearchTerm(e.target.value)}
      />
      <PageTable
        ITEM_PER_PAGE={5}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        data={dbData}
        firstTableHeader="Title"
        pageType="ticket"
        searchTerm={searchTerm}
        secondTableHeader="Status"
        thirdTableHeader="Submitter"
        fourthTableHeader="Created"
        fifthTableHeader=""
        ticketData={dbData}
      />
      <PagePagination
        ITEM_PER_PAGE={5}
        pageNumber={pageNumber}
        searchTerm=""
        setPageNumber={setPageNumber}
        ticketData={dbData}
      />
    </div>
  );
};
export default TicketForSingleProject;
