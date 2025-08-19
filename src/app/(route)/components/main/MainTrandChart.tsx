"use client";

import TrendChartBase, { LineSpec } from "@/components/widgets/TrendCharts";

type Point = { month: string; sales: number; purchase: number };

const data: Point[] = [
  { month: "1월", sales: 120, purchase: 80 },
  { month: "2월", sales: 140, purchase: 200 },
  { month: "3월", sales: 240, purchase: 300 },
  { month: "4월", sales: 200, purchase: 100 },
  { month: "5월", sales: 250, purchase: 300 },
  { month: "6월", sales: 300, purchase: 400 },
  { month: "7월", sales: 310, purchase: 460 },
  { month: "8월", sales: 280, purchase: 360 },
  { month: "9월", sales: 310, purchase: 400 },
  { month: "10월", sales: 460, purchase: 190 },
  { month: "11월", sales: 380, purchase: 280 },
  { month: "12월", sales: 480, purchase: 320 },
];

export default function MainTrendChart() {
  const buyColor = "var(--chart-2)";
  const sellColor = "var(--chart-3)";

  const lines: LineSpec[] = [
    { dataKey: "sales", name: "매출", color: sellColor },
    { dataKey: "purchase", name: "매입", color: buyColor },
  ];

  return (
    <TrendChartBase
      data={data}
      xKey="month"
      lines={lines}
      height={205} // 필요 시만 조정
      yTicks={[0, 100, 200, 300, 400, 500]}
    />
  );
}
