//interface
import { ITicketsRoot } from "../../Interfaces/Firebase-Interfaces/TicketsInterface";

//components
import BarChart from "../../Utilities/ChartJS/BarChart";

interface IProps {
  dbData: ITicketsRoot[];
}

enum PriorityType {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

const TicketByPriority = (props: IProps) => {
  //*get tickets from database and assign to their priority
  let lowPriority = 0,
    mediumPriority = 0,
    highPriority = 0;

  if (props) {
    props.dbData.forEach((item) => {
      if (item.ticketPriority === PriorityType.LOW) {
        lowPriority += 1;
      } else if (item.ticketPriority === PriorityType.MEDIUM) {
        mediumPriority += 1;
      } else if (item.ticketPriority === PriorityType.HIGH) {
        highPriority += 1;
      } else {
        return new Error();
      }
    });
  }
  //*--------------------------------------------

  return (
    <BarChart
      header="TICKET PRIORITY"
      labels={["Low", "Medium", "High"]}
      backgroundColor={["#3CCF4E", "#2F3A8F", "#CD113B"]}
      data={[lowPriority, mediumPriority, highPriority]}
      dbData={props.dbData}
    />
  );
};
export default TicketByPriority;
