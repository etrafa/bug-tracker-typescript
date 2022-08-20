//* interfaces
import { ITicketsRoot } from "../../Interfaces/Firebase-Interfaces/TicketsInterface";

//* chartJS
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

interface BarProps {
  header: string;
  labels: string[];
  backgroundColor?: string[];
  data: number[];
  dbData: ITicketsRoot[] | undefined | null;
}

const BarChart = (props: BarProps) => {
  return (
    <div className="w-11/12 bg-gray-50 mx-auto mt-12 lg:w-10/12 max-w-screen-md">
      <h1 className="text-center bg-gray-200 font-black text-xl h-12 pt-3">
        {props.header}
      </h1>
      {!props.dbData ||
      props.dbData === undefined ||
      props.dbData?.length === 0 ? (
        <p className="text-center py-12 lg:pt-24 font-bold">No ticket found.</p>
      ) : (
        <Bar
          className="max-h-72 bg-gray-50"
          options={{
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  precision: 0,
                  callback: (yValue) => {
                    if (typeof yValue === "number") return yValue;
                  },
                },
              },
            },
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
              },
            ],
          }}
        />
      )}
    </div>
  );
};
export default BarChart;
