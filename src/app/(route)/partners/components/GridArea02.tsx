"use client";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Row = {
  contractNo: string;
  requester: string;
  start: string;
  end: string;
  status: string;
};

type GridAreaProps = React.HTMLAttributes<HTMLDivElement>;

const rows: Row[] = [
  {
    contractNo: "TBO_000616451",
    requester: "Pc + 모바일",
    start: "2025-09-01",
    end: "2025-10-31",
    status: "요청",
  },
  {
    contractNo: "TBO_000649405",
    requester: "Pc",
    start: "2025-09-01",
    end: "2025-10-31",
    status: "요청",
  },
];

export default function GridArea({ className }: GridAreaProps) {
  return (
    <div className="flex flex-col gap-2 w-1/2">
      <h3 className="text-xl mt-4 font-bold">계약 관련 정보</h3>
      {/* 타이틀이 없는 경우 밑에 부분만 필요 */}
      <div className={cn("rounded-md border overflow-auto", className)}>
        <Table>
          <TableHeader className="sticky top-0 bg-background">
            <TableRow>
              <TableHead>계약번호</TableHead>
              <TableHead>서비스 범위</TableHead>
              <TableHead>계약 시작일</TableHead>
              <TableHead>계약 종료일</TableHead>
              <TableHead>계액상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={i}>
                <TableCell>{r.contractNo}</TableCell>
                <TableCell>{r.requester}</TableCell>
                <TableCell>{r.start}</TableCell>
                <TableCell>{r.end}</TableCell>
                <TableCell>{r.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
