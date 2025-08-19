// MainBarChart.tsx
"use client";

import { useMemo } from "react";
import BarCharts from "@/components/widgets/BarCharts";

type D = { label: string; value: number };

const DEFAULT_MONTHLY: D[] = [
  { label: "1월", value: 150 },
  { label: "2월", value: 180 },
  { label: "3월", value: 210 },
  { label: "4월", value: 240 },
  { label: "5월", value: 200 },
  { label: "6월", value: 150 },
];

export default function MainBarChart({ fill = "var(--chart-3)" }: { fill?: string }) {
  const data = DEFAULT_MONTHLY;

  const total = useMemo(() => data.reduce((s, d) => s + d.value, 0), [data]);
  const totalDisplay = useMemo(
    () => new Intl.NumberFormat("ko-KR").format(total * 1_000_000), // 필요시 배수 조정
    [total]
  );

  return (
    <div>
      <div className="flex items-center mb-5 ml-5 gap-2">
        <h3 className="text-sm font-semibold" style={{ color: fill }}>
          총매출
        </h3>
        <span className="w-1 h-1 rounded-full" style={{ background: fill }}></span>
        <div className="text-2xl font-extrabold ">{totalDisplay}</div>
      </div>

      <div className="relative">
        <div className="absolute left-0 bottom-2 text-xs text-right text-gray-400">
          단위
          <br />
          (백만원)
        </div>
        <BarCharts data={data} fill={fill} />
      </div>
    </div>
  );
}
