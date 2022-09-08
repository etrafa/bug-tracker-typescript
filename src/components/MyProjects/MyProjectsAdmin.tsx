import { useState } from "react";
import { useGetDocs } from "../../customHooks/useGetDocs";
import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";

const MyProjectsAdmin = () => {
  const { dbData, loading } = useGetDocs("projects");
  const [pageNumber, setPageNumber] = useState(0);

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
    />
  );
};
export default MyProjectsAdmin;
