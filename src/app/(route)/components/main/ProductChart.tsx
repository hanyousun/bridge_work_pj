"use client";

import DonutChart, { ChartColor } from "@/components/widgets/DonutCharts"; // 네가 만든 컴포넌트
import { useMemo } from "react";

type Slice = { name: string; value: number; color: string };

const newChartColor = ChartColor;

export default function ProductChart() {
  const data = useMemo<Slice[]>(
    () => [
      { name: "Nexacro", value: 24, color: newChartColor[0] },
      { name: "Websqure", value: 7, color: newChartColor[1] },
      { name: "React", value: 11, color: newChartColor[2] },
      { name: "Vue.js", value: 16, color: newChartColor[3] },
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
          startAngle={360}
          endAngle={0}
          paddingAngle={3}
          className="absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2"
        />
        {/* 중앙 합계/배지 오버레이 */}
        <div className="absolute transform translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 text-center">
          <div className="font-extrabold text-4xl">
            {total}
            <span className="pl-1 text-xs font-normal text-accent">건</span>
          </div>
        </div>
      </div>

      {/* 범례 */}
      <ul className="flex flex-col gap-3 text-sm w-1/2">
        {data
          .slice()
          .sort((a, b) => (a.name === "Nexacro" ? -1 : b.name === "Websqure" ? 1 : 0))
          .map((item) => (
            <li key={item.name} className="flex items-center justify-start gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: item.color }} />
              <span className="text-gray-700 text-sm w-18">{item.name}</span>
              <span className=" font-semibold text-gray-900 ">{item.value.toString().padStart(2, "0")}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
