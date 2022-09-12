//react
import { useState } from "react";

//components
import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";

//firebase
import { useAuth } from "../../firebase/firebaseConfig";
import { useGetDocsArrayQuery } from "../../customHooks/useGetDocsArrayQuery";
import { IProject } from "../../Interfaces/Firebase-Interfaces/ProjectInterface";

const MyTicketsUsers = () => {
  const currentUser = useAuth();

  //GET EVERY TICKET BELONGS TO CURRENT USER
  const { dbData, loading } = useGetDocsArrayQuery<IProject>(
    "tickets",
    "userEmails",
    currentUser?.email || "undefined"
  );
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  //? FUNCTIONS ----------------------------------------
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  //? --------------------------------------------------

  console.log(dbData);

  return (
    <PageSkeleton
      //*PAGE HEADER
      pageHeader="My Tickets" //page header
      //*PAGE TABLE
      firstTableHeader="Title" //table header0
      secondTableHeader="Project" //table header
      thirdTableHeader="Submitter" //table header
      fourthTableHeader="Created" //table header
      fifthTableHeader="" //table header
      //*PAGE FUNCTIONS
      searchInputChangeHandler={(e) => changeHandler(e)} // filter the search function
      //*PAGE STATES
      searchTerm={searchTerm} //whatever user inputs filter the search.
      pageNumber={pageNumber} //change page.
      setPageNumber={setPageNumber} // change page number for pagination.
      //*PAGE ERROR
      NO_DATA_MESSAGE="No ticket found." //when there is no data OR and error show this message
      //*PAGE DATA
      data={dbData} // data fetched from database.
      //*OTHER
      loading={loading}
      searchInputPlaceHolder="Search Ticket" //search input placeholder
      pageType="ticket" //page type
      ITEM_PER_PAGE={5} //how many items to show on the UI per page.
    />
  );
};
export default MyTicketsUsers;
