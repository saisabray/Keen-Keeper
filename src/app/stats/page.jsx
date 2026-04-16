"use client";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import { TimeLineContext } from "@/context/timeLineContext";

const DashboardPage = () => {
  const { timeLine } = useContext(TimeLineContext);
  const counts = {
    call: 0,
    text: 0,
    video: 0,
  };

  timeLine.forEach((item) => {
    const type = item.action?.toLowerCase();

    if (counts[type] !== undefined) {
      counts[type]++;
    }
  });
  const total = counts.call + counts.text + counts.video;
  const getChartData = (counts) => {
    const total = counts.call + counts.text + counts.video;

    return total === 0
      ? [{ name: "No activity", value: 1, fill: "#8884d8" }]
      : [
          { name: "Call", value: counts.call, fill: "#244D3F" },
          { name: "Text", value: counts.text, fill: "#7E35E1" },
          { name: "Video", value: counts.video, fill: "#00C49F" },
        ];
  };
  const data = getChartData(counts);
  return (
    <div className="container mx-auto h-full md:min-h-screen my-5 md:my-15 p-3 md:p-0 ">
      <h2 className="text-2xl md:text-3xl lg:text-[48px] text-[#1F2937] font-bold">
        Friendship Analytics
      </h2>

      <div className="my-5 md:my-10 shadow-sm p-5 md:p-10 rounded-xl bg-white">
        <h4 className="font-medium text-2xl text-[#244D3F]">
          By Interaction Type
        </h4>
        <PieChart
          style={{
            width: "100%",
            maxWidth: "350px",
            maxHeight: "80vh",
            margin: "auto",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default DashboardPage;
