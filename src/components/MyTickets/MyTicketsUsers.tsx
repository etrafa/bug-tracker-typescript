import { useState } from "react";
import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";

const MyTicketsUsers = () => {
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <PageSkeleton
      pageHeader="My Tickets"
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
export default MyTicketsUsers;
