"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

type Point = { month: string; sales: number; purchase: number };

const data: Point[] = [
  { month: "1월", sales: 120, purchase: 80 },
  { month: "2월", sales: 140, purchase: 110 },
  { month: "3월", sales: 130, purchase: 95 },
  { month: "4월", sales: 170, purchase: 120 },
  { month: "5월", sales: 160, purchase: 140 },
  { month: "6월", sales: 200, purchase: 150 },
  { month: "7월", sales: 190, purchase: 160 },
  { month: "8월", sales: 210, purchase: 170 },
  { month: "9월", sales: 180, purchase: 150 },
  { month: "10월", sales: 220, purchase: 190 },
  { month: "11월", sales: 230, purchase: 200 },
  { month: "12월", sales: 260, purchase: 220 },
];

export default function AnnualTrendChart() {
  return (
    <div className="h-64 w-full">
      {" "}
      {/* 카드 안에서 높이만 주면 ResponsiveContainer가 채워줘요 */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 12, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#4f46e5" strokeWidth={2} dot={false} name="매출" />
          <Line type="monotone" dataKey="purchase" stroke="#10b981" strokeWidth={2} dot={false} name="매입" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
