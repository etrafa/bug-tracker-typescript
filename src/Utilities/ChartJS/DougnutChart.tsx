import { Doughnut } from "react-chartjs-2";
import { ITicketsRoot } from "../../Interfaces/Firebase-Interfaces/TicketsInterface";

interface DougnutProps {
  header: string;
  labels: string[];
  backgroundColor: string[];
  data: number[];
  dbData: ITicketsRoot[] | undefined | null;
}

const DougnutChart = (props: DougnutProps) => {
  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12 max-w-screen-md">
      <h1 className="text-center bg-gray-200 font-black text-xl h-12 pt-3">
        {props.header}
      </h1>
      {!props.dbData ||
      props.dbData === undefined ||
      props.dbData.length === 0 ? (
        <p className="text-center py-12 lg:pt-24 font-bold">No ticket found.</p>
      ) : (
        <Doughnut
          className="max-h-64 mt-2"
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          data={{
            labels: props.labels,
            datasets: [
              {
                data: props.data,
                backgroundColor: props.backgroundColor,
                borderWidth: 0,
              },
            ],
          }}
        />
      )}
    </div>
  );
};
export default DougnutChart;
