import { useState } from "react";
import { useGetDocs } from "../../customHooks/useGetDocs";
import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";

const MyProjectsAdmin = () => {
  const { dbData, loading } = useGetDocs("projects");
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  //? FUNCTIONS ----------------------------------------
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  //? --------------------------------------------------

  return (
    <PageSkeleton
      pageHeader="All Projects in the database"
      searchInputPlaceHolder="Search Project"
      firstTableHeader="Project Name"
      secondTableHeader="Project Description"
      thirdTableHeader="Actions"
      pageType="project"
      data={dbData}
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
      ITEM_PER_PAGE={5}
      searchTerm={searchTerm}
      searchInputChangeHandler={(e) => changeHandler(e)}
      NO_DATA_MESSAGE="No project found."
    />
  );
};
export default MyProjectsAdmin;
