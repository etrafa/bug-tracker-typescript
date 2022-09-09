import { useState } from "react";
import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";

const MyTicketsUsers = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  //? FUNCTIONS ----------------------------------------
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  //? --------------------------------------------------

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
      searchTerm={searchTerm}
      searchInputChangeHandler={(e) => changeHandler(e)}
    />
  );
};
export default MyTicketsUsers;
