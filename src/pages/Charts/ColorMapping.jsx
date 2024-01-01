import { Header } from "../../components";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import { dataColorMapping } from "../../data/otherData";

export default function ColorMapping() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Chart" title="Color Mapping" />
      <div className="h-[500px]">
        <ResponsiveHeatMap
          data={dataColorMapping}
          margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
          valueFormat=" >-.2s"
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -90,
            legend: "",
            legendOffset: 46,
          }}
          axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "country",
            legendPosition: "middle",
            legendOffset: 70,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "country",
            legendPosition: "middle",
            legendOffset: -72,
          }}
          colors={{
            type: "diverging",
            scheme: "brown_blueGreen",
            minValue: -100000,
            maxValue: 100000,
            divergeAt: 0.6,
          }}
          emptyColor="#555555"
          borderRadius={5}
          opacity={0.8}
          inactiveOpacity={0.1}
          borderWidth={2}
          borderColor={{
            from: "color",
            modifiers: [["darker", "0.6"]],
          }}
          legends={[
            {
              anchor: "bottom",
              translateX: 0,
              translateY: 30,
              length: 400,
              thickness: 8,
              direction: "row",
              tickPosition: "after",
              tickSize: 3,
              tickSpacing: 4,
              tickOverlap: false,
              tickFormat: ">-.2s",
              title: "Value →",
              titleAlign: "start",
              titleOffset: 4,
            },
          ]}
        />
      </div>
    </div>
  );
}
