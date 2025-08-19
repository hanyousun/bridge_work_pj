"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

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

export default function TrendCharts() {
  const buyColor = "var(--chart-2)";
  const sellColor = "var(--chart-3)";

  return (
    <div className="h-51 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 0, right: 15, bottom: 0, left: -10 }}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="0" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 14 }}
            axisLine={false} // 라인제거
            tickLine={false} // 짧은 라인제거
          />
          <YAxis
            tickFormatter={(value) => (value === 0 ? "" : value)}
            ticks={[0, 100, 200, 300, 400, 500]}
            tick={{ fontSize: 14 }}
            axisLine={false} // 라인제거
            tickLine={false} // 짧은 라인제거
          />
          <Tooltip
            contentStyle={{ fontSize: 12, padding: "8px 10px" }}
            labelStyle={{ fontSize: 12, fontWeight: 600 }}
            itemStyle={{ fontSize: 12 }}
            formatter={(value: number, name) => [value, name === "buy" ? "매입" : "매출"]}
            labelFormatter={(label) => `${label}`}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={5}
            wrapperStyle={{ paddingBottom: 3 }}
            formatter={(value: string) => {
              if (value === "매입")
                return (
                  <span className="text-xs font-bold" style={{ color: buyColor }}>
                    매입
                  </span>
                );
              if (value === "매출")
                return (
                  <span className="text-xs font-bold" style={{ color: sellColor }}>
                    매출
                  </span>
                );
              return <span className="text-xs font-bold">{value}</span>;
            }}
          />
          <Line type="monotone" dataKey="sales" stroke={sellColor} strokeWidth={2} dot={false} name="매출" />
          <Line type="monotone" dataKey="purchase" stroke={buyColor} strokeWidth={2} dot={false} name="매입" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
