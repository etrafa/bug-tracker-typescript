import { useGetDocs } from "../../customHooks/useGetDocs";
import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";

const MyProjectsAdmin = () => {
  const { dbData, loading } = useGetDocs("projects");

  return (
    <PageSkeleton
      pageHeader="All Projects in the database"
      searchInputPlaceHolder="Search Project"
      firstTableHeader="Project Name"
      secondTableHeader="Project Description"
      thirdTableHeader="Actions"
      pageType="project"
      data={dbData}
    />
  );
};
export default MyProjectsAdmin;
