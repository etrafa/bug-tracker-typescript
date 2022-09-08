import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";

const MyProjectsUsers = () => {
  return (
    <PageSkeleton
      pageHeader="My Projects"
      searchInputPlaceHolder="Search Project"
      firstTableHeader="Project Name"
      secondTableHeader="Project Description"
      thirdTableHeader="Actions"
    />
  );
};
export default MyProjectsUsers;
