import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";
import { useState } from "react";

const MyProjectsUsers = () => {
  const [pageNumber, setPageNumber] = useState(0);

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
    />
  );
};
export default MyProjectsUsers;
