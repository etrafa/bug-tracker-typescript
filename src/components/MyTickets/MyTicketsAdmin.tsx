import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";
import { useState } from "react";

const MyTicketsAdmin = () => {
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <PageSkeleton
      pageHeader="All Tickets in your database"
      searchInputPlaceHolder="Search Ticket"
      firstTableHeader="Title"
      secondTableHeader="Project"
      thirdTableHeader="Submitter"
      fourthTableHeader="Created"
      fifthTableHeader=""
      pageType="ticket"
      data={[]}
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
      ITEM_PER_PAGE={5}
    />
  );
};
export default MyTicketsAdmin;
