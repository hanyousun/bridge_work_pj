"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DateRangePicker from "./DatePicker";
import { DateRange } from "react-day-picker";

export type FilterValues = {
  customer?: string;
  requester?: string;
  project?: string;
  status?: string;
  period?: DateRange;
};

export default function Filters({ onSearch }: { onSearch: (v: FilterValues) => void }) {
  const [values, setValues] = useState<FilterValues>({});
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-3">
        <Input placeholder="고객사" onChange={(e) => setValues((v) => ({ ...v, customer: e.target.value }))} />
      </div>
      <div className="col-span-3">
        <Input
          placeholder="요청회사 / 요청자"
          onChange={(e) => setValues((v) => ({ ...v, requester: e.target.value }))}
        />
      </div>
      <div className="col-span-3">
        <Input placeholder="프로젝트" onChange={(e) => setValues((v) => ({ ...v, project: e.target.value }))} />
      </div>
      <div className="col-span-3">
        <Select onValueChange={(status) => setValues((v) => ({ ...v, status }))}>
          <SelectTrigger>
            <SelectValue placeholder="상태" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="요청">요청</SelectItem>
            <SelectItem value="부분">부분</SelectItem>
            <SelectItem value="완료">완료</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="col-span-4">
        <DateRangePicker value={values.period} onChange={(period) => setValues((v) => ({ ...v, period }))} />
      </div>
      <div className="col-span-8 flex justify-end gap-2">
        <Button variant="outline" onClick={() => setValues({})}>
          초기화
        </Button>
        <Button onClick={() => onSearch(values)}>검색</Button>
      </div>
    </div>
  );
}
