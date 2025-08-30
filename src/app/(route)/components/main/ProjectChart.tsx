"use client";
import { useMemo } from "react";
import { format } from "date-fns";
import DonutChart, { ChartColor } from "@/components/widgets/DonutCharts"; // 네가 만든 컴포넌트

type Slice = { name: string; value: number; color: string };

const newChartColor = ChartColor;

export default function ProjectChart() {
  const data = useMemo<Slice[]>(
    () => [
      { name: "완료예정", value: 5, color: newChartColor[0] },
      { name: "진행예정", value: 12, color: newChartColor[1] },
      { name: "진행중", value: 19, color: newChartColor[2] },
    ],
    []
  );

  const total = useMemo(() => data.reduce((s, d) => s + d.value, 0), [data]);

  return (
    <div className="flex items-center justify-center">
      {/* 차트 영역 */}
      <div className="flex-auto relative w-full min-h-52">
        <DonutChart
          data={data}
          startAngle={180}
          endAngle={0}
          paddingAngle={3}
          className="absolute translate-x-[-50%] translate-y-[-50%] top-2/3 left-1/2"
        />
        {/* 중앙 합계/배지 오버레이 */}
        <div className="absolute transform translate-x-[-50%] translate-y-[-50%] left-1/2 top-2/3 text-center">
          <div className="font-extrabold text-4xl">
            {total}
            <span className="pl-1 text-xs font-normal text-accent">건</span>
          </div>
          <div className="mt-2.5 px-3 py-0.5 text-xs text-white bg-ring rounded-full">
            {format(new Date(), "yyyy년 MM월")}
          </div>
        </div>
      </div>

      {/* 범례 */}
      <ul className="flex flex-col gap-4 text-sm w-1/2">
        {data
          .slice() // 원하는 노출 순서(예: 진행중, 진행예정, 완료예정)
          .sort((a, b) => (a.name === "진행중" ? -1 : b.name === "진행중" ? 1 : 0))
          .map((item) => (
            <li key={item.name} className="flex items-center justify-start gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: item.color }} />
              <span className="text-gray-700 text-sm w-15">{item.name}</span>
              <span className=" font-semibold text-gray-900 ">{item.value.toString().padStart(2, "0")}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
