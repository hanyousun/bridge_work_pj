"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Row = {
  contractNo: string;
  status: string;
  customer: string;
  project: string;
  requester: string;
  start: string;
  end: string;
  location: string;
  company: string;
  product: string;
};

export default function DataTable({ rows }: { rows: Row[] }) {
  return (
    <div className="rounded-md border overflow-auto">
      <Table>
        <TableHeader className="sticky top-0 bg-background">
          <TableRow>
            <TableHead>계약번호</TableHead>
            <TableHead>확인</TableHead>
            <TableHead>고객사</TableHead>
            <TableHead>프로젝트</TableHead>
            <TableHead>요청자</TableHead>
            <TableHead>시작일</TableHead>
            <TableHead>종료일</TableHead>
            <TableHead>근무지</TableHead>
            <TableHead>요청회사</TableHead>
            <TableHead>제품</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r, i) => (
            <TableRow key={i}>
              <TableCell>{r.contractNo}</TableCell>
              <TableCell>{r.status}</TableCell>
              <TableCell>{r.customer}</TableCell>
              <TableCell className="max-w-[280px] truncate" title={r.project}>
                {r.project}
              </TableCell>
              <TableCell>{r.requester}</TableCell>
              <TableCell>{r.start}</TableCell>
              <TableCell>{r.end}</TableCell>
              <TableCell>{r.location}</TableCell>
              <TableCell>{r.company}</TableCell>
              <TableCell>{r.product}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
