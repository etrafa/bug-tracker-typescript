//interface
import { ITicketsRoot } from "../../Interfaces/Firebase-Interfaces/TicketsInterface";

//components
import BarChart from "../../Utilities/ChartJS/BarChart";

interface IProps {
  dbData: ITicketsRoot[];
}

enum StatusType {
  OPEN = "Open",
  IN_PROGRESS = "In Progress",
  CLOSED = "Closed",
}

const TicketByStatus = (props: IProps) => {
  //*get tickets from database and assign to their status
  let openStatus = 0,
    inProgressStatus = 0,
    closedStatus = 0;

  if (props) {
    props.dbData.forEach((item) => {
      if (item.ticketStatus === StatusType.OPEN) {
        openStatus += 1;
      } else if (item.ticketStatus === StatusType.IN_PROGRESS) {
        inProgressStatus += 1;
      } else if (item.ticketStatus === StatusType.CLOSED) {
        closedStatus += 1;
      } else {
        throw new Error();
      }
    });
  }

  //*--------------------------------------------

  return (
    <BarChart
      header="TICKET STATUS"
      labels={["Open", "In Progress", "Closed"]}
      backgroundColor={["#3CCF4E", "#2F3A8F", "#CD113B"]}
      data={[openStatus, inProgressStatus, closedStatus]}
      dbData={props.dbData}
    />
  );
};
export default TicketByStatus;
