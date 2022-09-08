import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";

const MyTicketsUsers = () => {
  return (
    <PageSkeleton
      pageHeader="My Tickets"
      searchInputPlaceHolder="Search Ticket"
      firstTableHeader="Title"
      secondTableHeader="Project"
      thirdTableHeader="Submitter"
      fourthTableHeader="Created"
      fifthTableHeader=""
    />
  );
};
export default MyTicketsUsers;
