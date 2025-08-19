import { useMemo } from "react";
import { cn } from "@/lib/utils";

export default function ContractManagement() {
  const requestColor = "var(--chart-3)";
  const progressColor = "var(--chart-1)";
  const completeColor = "var(--chart-5)";

  type StateType = { dataKey: string; name: string; color: string };

  const state: StateType[] = [
    { dataKey: "request", name: "요청", color: requestColor },
    { dataKey: "progress", name: "부분", color: progressColor },
    { dataKey: "complete", name: "완료", color: completeColor },
  ];

  type Slice = { name: string; project: string; state: string; color: string };
  const data = useMemo<Slice[]>(
    () => [
      {
        name: "우리은행",
        project: "수학시스템",
        state: state[0].name,
        color: state[0].color,
      },
      {
        name: "디비손해보험",
        project: "기간계시스템UI전환",
        state: state[2].name,
        color: state[2].color,
      },
      {
        name: "현대자동차",
        project: "차세대 고객센터",
        state: state[2].name,
        color: state[2].color,
      },
      {
        name: "유로지스넷",
        project: "차세대 ERP",
        state: state[2].name,
        color: state[2].color,
      },
      {
        name: "LG이노텍",
        project: "전사프로젝트 관리시스템",
        state: state[1].name,
        color: state[1].color,
      },
      {
        name: "한화시스템",
        project: "TOMSS 포탈시스템",
        state: state[0].name,
        color: state[0].color,
      },
    ],
    []
  );
  return (
    <ul className="text-sm">
      {data.map((item) => (
        <li key={item.name} className="flex justify-between items-center leading-8 gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
          <span className="w-26">{item.name}</span>
          <span className="mr-auto">{item.project}</span>
          <span style={{ color: item.color }}>{item.state}</span>
        </li>
      ))}
    </ul>
  );
}
