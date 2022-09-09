import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";
import { useState } from "react";

const MyProjectsUsers = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  //? FUNCTIONS ----------------------------------------
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  //? --------------------------------------------------

  return (
    <PageSkeleton
      pageHeader="My Projects"
      searchInputPlaceHolder="Search Project"
      firstTableHeader="Project Name"
      secondTableHeader="Project Description"
      thirdTableHeader="Actions"
      pageType="project"
      data={[]}
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
      ITEM_PER_PAGE={5}
      searchTerm={searchTerm}
      searchInputChangeHandler={(e) => changeHandler(e)}
      NO_DATA_MESSAGE="No project found."
    />
  );
};
export default MyProjectsUsers;
