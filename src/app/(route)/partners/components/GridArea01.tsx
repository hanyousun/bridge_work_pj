"use client";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Row = {
  companyName: string;
  companyNum: string | number;
  ceoName: string;
  phone: string | number;
};

type GridAreaProps = React.HTMLAttributes<HTMLDivElement>;

const rows: Row[] = [
  {
    companyName: "김대표 회사",
    companyNum: 6168486465,
    ceoName: "김대표",
    phone: "010-5624-0000",
  },
  {
    companyName: "박대표 회사",
    companyNum: 49154946515,
    ceoName: "박대표",
    phone: "010-4961-0000",
  },
];

export default function GridArea({ className }: GridAreaProps) {
  return (
    <div className="flex flex-col gap-2  w-1/2">
      <h3 className="text-xl mt-4 font-bold">협력사 기본 정보</h3>
      {/* 타이틀이 없는 경우 밑에 부분만 필요 */}
      <div className={cn("rounded-md border overflow-auto", className)}>
        <Table>
          <TableHeader className="sticky top-0 bg-background">
            <TableRow>
              <TableHead>협력사명</TableHead>
              <TableHead>사업자 등록번호</TableHead>
              <TableHead>대표자명</TableHead>
              <TableHead>연락처 / 이메일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={i}>
                <TableCell>{r.companyName}</TableCell>
                <TableCell>{r.companyNum}</TableCell>
                <TableCell>{r.ceoName}</TableCell>
                <TableCell>{r.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
