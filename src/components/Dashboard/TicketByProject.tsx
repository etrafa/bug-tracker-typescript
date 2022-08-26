//interfaces
import { ITicketsRoot } from "../../Interfaces/Firebase-Interfaces/TicketsInterface";

//components
import DoughnutChart from "../../Utilities/ChartJS/DougnutChart";

interface IProps {
  dbData: ITicketsRoot[];
}

interface IProjectTicket {
  [key: string]: number;
}

const TicketByProject = (props: IProps) => {
  //push the project name's from db to this array and show them as label
  let projectLabels: string[] = [];
  //push project's ticket to this array and show them as data
  let projectLabelsData: number[] = [];

  //dynamically create colors for chart
  let chartColors: string[] = [];

  if (props) {
    props.dbData.forEach((ticket) => {
      if (typeof ticket.projectName === "string") {
        projectLabels.push(ticket.projectName);
      }
    });
  }

  /* see how many tickets one project have 
    and push that into array so we can show on chartJS data. */

  let counts: IProjectTicket = {};
  for (let i = 0; i < projectLabels.length; i++)
    if (projectLabels[i] in counts) {
      counts[projectLabels[i]]++;
    } else {
      counts[projectLabels[i]] = 1;
    }

  //push project's ticket number to an array.
  if (counts) {
    const objMap = new Map(Object.entries(counts));
    objMap.forEach((item) => projectLabelsData.push(item));
  }

  //adjust chart color depending on the length of the array
  const colors: string[] = [
    "#f37208",
    "#089df3",
    "#02ffdd",
    "#f3084f",
    "#2F3A8F",
    "#CD113B",
  ];
  for (let i = 0; i <= projectLabelsData.length; i++) {
    chartColors.push(colors[i]);
  }

  return (
    <DoughnutChart
      header="TICKETS BY PROJECT"
      labels={projectLabels}
      backgroundColor={chartColors}
      data={projectLabelsData}
      dbData={props.dbData}
    />
  );
};
export default TicketByProject;
