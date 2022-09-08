import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";

const MyProjectsUsers = () => {
  return (
    <PageSkeleton
      pageHeader="My Projects"
      searchInputPlaceHolder="Search Project"
      firstTableHeader="Project Name"
      secondTableHeader="Project Description"
      thirdTableHeader="Actions"
      pageType="project"
      data={[]}
    />
  );
};
export default MyProjectsUsers;
