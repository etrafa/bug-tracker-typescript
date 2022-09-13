//react
import { useState } from "react";

//firebase
import { useGetDocs } from "../../../customHooks/useGetDocs";

//components
import PagePagination from "../../../Utilities/Common-Page-Structures/PagePagination";
import PageSearch from "../../../Utilities/Common-Page-Structures/PageSearch";
import PageTable from "../../../Utilities/Common-Page-Structures/PageTable";

//interfaces
import { ITicketsRoot } from "../../../Interfaces/Firebase-Interfaces/TicketsInterface";

interface TicketForSingleProjectProps {
  projectID: string;
}

const TicketForSingleProject = (props: TicketForSingleProjectProps) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  //GET ALL THE TICKETS FOR SELECTED PROJECTS
  const { dbData } = useGetDocs<ITicketsRoot>(
    `projects/${props.projectID}/tickets`
  );

  return (
    <div className="w-full lg:w-7/12 text-center overflow-auto">
      <header>
        <h1 className="text-3xl text-black mb-10 font-bold">
          All tickets for this Project
        </h1>
      </header>

      {/* //*SHOW DATA IF EXIST ELSE SHOW NO FOUND MESSAGE */}
      {dbData && dbData.length >= 1 ? (
        <>
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

          {/* //*SHOW PAGINATION ONLY IF THERE IS MORE ITEM THAN ITEM_PER_PAGE */}
          {dbData && dbData?.length > 5 && (
            <PagePagination
              ITEM_PER_PAGE={5}
              pageNumber={pageNumber}
              searchTerm=""
              setPageNumber={setPageNumber}
              ticketData={dbData}
            />
          )}
        </>
      ) : (
        <p className="lg:mt-24 font-bold">No ticket found.</p>
      )}
    </div>
  );
};
export default TicketForSingleProject;
