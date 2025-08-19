"use client";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

type Slice = { name: string; value: number; color?: string };

type DonutProps = {
  data: Slice[];
  startAngle?: number; // 차트 시작점
  endAngle?: number; // 차트 끝점 반구형 만드려면 180
  cx?: number | string; // 기본 정중앙 위치
  cy?: number | string;
  innerRadius?: number | string;
  outerRadius?: number | string;
  paddingAngle?: number;
  colors?: string[];
  className?: string;
};

export const ChartColor = ["var(--chart-3)", "var(--chart-4)", "var(--chart-1)", "var(--chart-2)"];

export default function DonutChart({
  data,
  startAngle = 0,
  endAngle = 360,
  cx = "50%",
  cy = "50%",
  innerRadius = "70%",
  outerRadius = "90%",
  paddingAngle = 5,
  colors = ChartColor, // 기본색 지정
  className,
}: DonutProps) {
  return (
    <div className={`h-48 w-full ${className ?? ""}`}>
      {/* 부모 높이 필수! */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            startAngle={startAngle}
            endAngle={endAngle}
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={paddingAngle}>
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
