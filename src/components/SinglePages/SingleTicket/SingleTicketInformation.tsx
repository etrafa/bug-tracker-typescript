import { ITicketsRoot } from "../../../Interfaces/Firebase-Interfaces/TicketsInterface";

interface SingleTicketInformationsProps extends ITicketsRoot {}

const SingleTicketInformations = (props: SingleTicketInformationsProps) => {
  const ticketElementsForHTML = [
    {
      element: "Ticket Title",
      value: props && props.ticketDescription,
    },
    { element: "Project", value: props && props.projectName },

    { element: "Author", value: props && props.ticketOwner },
    {
      element: "Ticket Priority",
      value: props && props.ticketPriority,
    },
    {
      element: "Ticket Status",
      value: props && props.ticketStatus,
    },
    { element: "Ticket Type", value: props && props.ticketType },

    { element: "Date", value: props && props.submitTime },
  ];

  //* change element background color based on TICKET PRIORITY
  const ticketPriorityClassNames = [
    "text-center text-white font-bold text-sm h-6 w-14 bg-green-700 rounded-md mx-auto pt-1", //low priority
    "text-center text-white font-bold text-sm h-6 w-14 bg-orange-400 rounded-md mx-auto pt-1", //medium priority
    "text-center text-white font-bold text-sm h-6 w-14 bg-strongRed rounded-md mx-auto pt-1", //high priority
  ];

  return (
    <div className="w-full lg:w-6/12 max-w-2xl overflow-auto mt-12 mx-auto">
      <h2 className="text-center font-bold text-lg">Ticket Details</h2>
      <div className="grid grid-cols-2 mx-auto justify-center gap-8 mt-8">
        {ticketElementsForHTML.map((el) => (
          <div>
            <h2 className="text-sm text-gray-900 font-bold bg-gray-200 rounded-md w-28 h-8 pt-2 my-2 text-center mx-auto">
              {el?.element}
            </h2>
            <p
              className={
                el?.value === "Low"
                  ? ticketPriorityClassNames[0]
                  : el?.value === "Medium"
                  ? ticketPriorityClassNames[1]
                  : el?.value === "High"
                  ? ticketPriorityClassNames[2]
                  : "text-center text-gray-900 text-sm"
              }
            >
              {el?.value}
            </p>
          </div>
        ))}
        <div>
          <h2 className="text-sm text-gray-900 font-bold bg-gray-200 rounded-md w-28 h-8 pt-2 my-2 text-center mx-auto">
            Users
          </h2>
          {props.assignedUsers?.map((item, index) => (
            <p className="text-center">
              <span>{index + 1}- </span>
              {item.fullName}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SingleTicketInformations;
