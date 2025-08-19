"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import type { ReactNode } from "react";
import type { LegendPayload } from "recharts/types/component/DefaultLegendContent";
import type { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";

export type LineSpec = {
  dataKey: string; // 예: "sales"
  name: string; // 예: "매출"
  color: string; // 예: "var(--chart-3)"
};

type Props = {
  data: any[]; // 간단하게 유지 (원하면 제네릭으로 바꿔도 됨)
  xKey: string; // 예: "month"
  lines: LineSpec[]; // 그릴 시리즈들
  height?: number | string; // 기본 208
  yTicks?: number[]; // 기본 [0,100,200,300,400,500]
};

export default function TrendChartBase({
  data,
  xKey,
  lines,
  height = 208,
  yTicks = [0, 100, 200, 300, 400, 500],
}: Props) {
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 0, right: 15, bottom: 0, left: -15 }}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="0" vertical={false} />

          <XAxis dataKey={xKey} tick={{ fontSize: 14 }} axisLine={false} tickLine={false} />

          <YAxis
            ticks={yTicks}
            tickFormatter={(v) => (v === 0 ? "" : v)}
            tick={{ fontSize: 14 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{ fontSize: 12, padding: "8px 10px" }}
            labelStyle={{ fontSize: 12, fontWeight: 600 }}
            itemStyle={{ fontSize: 12 }}
            formatter={(v: ValueType, n: NameType) => [v, n]}
          />

          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={5}
            wrapperStyle={{ paddingBottom: 3 }}
            formatter={(value: string, entry: LegendPayload): ReactNode => (
              <span style={{ color: entry.color as string, fontSize: 12, fontWeight: 700 }}>{value}</span>
            )}
          />

          {lines.map((item) => (
            <Line
              key={item.dataKey}
              type="monotone"
              dataKey={item.dataKey}
              name={item.name}
              stroke={item.color}
              strokeWidth={2}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
