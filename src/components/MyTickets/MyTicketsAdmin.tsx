import PageSkeleton from "../../Utilities/Common-Page-Structures/PageSkeleton";

const MyTicketsAdmin = () => {
  return (
    <PageSkeleton
      pageHeader="All Tickets in your database"
      searchInputPlaceHolder="Search Ticket"
      firstTableHeader="Title"
      secondTableHeader="Project"
      thirdTableHeader="Submitter"
      fourthTableHeader="Created"
      fifthTableHeader=""
      pageType="ticket"
      data={[]}
    />
  );
};
export default MyTicketsAdmin;
