import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";
import { useState } from "react";
import { useGetDocsWithQuery } from "../../customHooks/useGetDocsWithQuery";
import { useAuth } from "../../firebase/firebaseConfig";

const MyProjectsUsers = () => {
  const { dbData, loading } = useGetDocsWithQuery(
    "users",
    "email",
    "testdeveloper@gmailc.om"
  );

  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  //? FUNCTIONS ----------------------------------------
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  //? --------------------------------------------------

  return (
    <PageSkeleton
      //*PAGE HEADER
      pageHeader="My Projects" //page header
      //*PAGE TABLE
      firstTableHeader="Project Name" //table header
      secondTableHeader="Project Description" //table header
      thirdTableHeader="Actions" //table header
      //*PAGE FUNCTIONS
      searchInputChangeHandler={(e) => changeHandler(e)} // filter the search function
      //*PAGE STATES
      searchTerm={searchTerm} //whatever user inputs filter the search.
      pageNumber={pageNumber} //change page.
      setPageNumber={setPageNumber} // change page number for pagination.
      //*PAGE ERROR
      NO_DATA_MESSAGE="No project found." //when there is no data OR and error show this message
      //*PAGE DATA
      data={dbData} // data fetched from database.
      //*OTHER
      loading={loading}
      searchInputPlaceHolder="Search Project" //search input placeholder
      pageType="project" //page type
      ITEM_PER_PAGE={5} //how many items to show on the UI per page.
    />
  );
};
export default MyProjectsUsers;
