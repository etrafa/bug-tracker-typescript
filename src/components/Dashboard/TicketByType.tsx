import { ITicketsRoot } from "../../Interfaces/Firebase-Interfaces/TicketsInterface";
import DougnutChart from "../../Utilities/ChartJS/DougnutChart";

interface IProps {
  dbData: ITicketsRoot[];
}

enum TicketTypes {
  SERVER_ISSUES = "Server Issues",
  BUGS_OR_ERROR = "Bugs/Error",
  DESIGN = "Design",
  COMPABILITY = "Compatibility",
  OTHER = "Other",
}

const TicketByType = (props: IProps) => {
  //* get tickets from database and assign to their type
  let serverIssuesCounter = 0,
    bugsOrErrorCounter = 0,
    designCounter = 0,
    compabilityCounter = 0,
    otherCounter = 0;

  if (props) {
    props.dbData.forEach((item) => {
      if (item.ticketType === TicketTypes.SERVER_ISSUES) {
        serverIssuesCounter += 1;
      } else if (item.ticketType === TicketTypes.BUGS_OR_ERROR) {
        bugsOrErrorCounter += 1;
      } else if (item.ticketType === TicketTypes.DESIGN) {
        designCounter += 1;
      } else if (item.ticketType === TicketTypes.COMPABILITY) {
        compabilityCounter += 1;
      } else if (item.ticketType === TicketTypes.OTHER) {
        otherCounter += 1;
      } else {
        throw new Error();
      }
    });
  }
  //*--------------------------------------------

  return (
    <DougnutChart
      header="TICKET TYPES"
      labels={[
        "Server Issues",
        "Bugs/Error",
        "Design",
        "Compatibility",
        "Other",
      ]}
      backgroundColor={["#f37208", "#089df3", "#02ffdd", "#f3084f", "#2F3A8F"]}
      data={[
        serverIssuesCounter,
        bugsOrErrorCounter,
        designCounter,
        compabilityCounter,
        otherCounter,
      ]}
      dbData={props.dbData}
    />
  );
};
export default TicketByType;
