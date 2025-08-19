"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function DateRangePicker({ value, onChange }: { value?: DateRange; onChange: (v?: DateRange) => void }) {
  const label =
    value?.from && value?.to ? `${format(value.from, "yyyy-MM-dd")} ~ ${format(value.to, "yyyy-MM-dd")}` : "기간선택";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[260px] justify-start">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="range" numberOfMonths={2} selected={value} onSelect={onChange} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
