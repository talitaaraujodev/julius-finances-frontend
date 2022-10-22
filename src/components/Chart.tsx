import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

type ChartProps = {
  options: ApexOptions;
  series: ApexOptions["series"];
  width: string;
  type: string;
};
export function Chart(props: ChartProps) {
  return (
    <>
      <ReactApexChart
        options={props.options}
        series={props.series}
        width={props.width}
        type={props.type}
      />
    </>
  );
}
