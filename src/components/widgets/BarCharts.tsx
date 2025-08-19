"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type D = { label: string; value: number };

export default function BarCharts({ data, fill = "var(--chart-3)" }: { data: D[]; fill?: string }) {
  return (
    <div className="h-36 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 6, right: 8, left: -8, bottom: 0 }}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="0" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 14 }}
            axisLine={false} // 라인제거
            tickLine={false} // 짧은 라인제거
          />
          <YAxis
            tickFormatter={(value) => (value === 0 ? "" : value)}
            ticks={[0, 100, 200, 300]}
            tick={{ fontSize: 14 }}
            axisLine={false} // 라인제거
            tickLine={false} // 짧은 라인제거
          />
          <Tooltip />
          <Bar dataKey="value" name="값" fill={fill} radius={[6, 6, 0, 0]} barSize={12} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
