import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";

const MyProjectsAdmin = () => {
  return (
    <PageSkeleton
      pageHeader="All Projects in the database"
      searchInputPlaceHolder="Search Project"
      firstTableHeader="Project Name"
      secondTableHeader="Project Description"
      thirdTableHeader="Actions"
    />
  );
};
export default MyProjectsAdmin;
