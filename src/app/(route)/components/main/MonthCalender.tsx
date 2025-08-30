"use client";

import * as React from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

export default function MonthCalender() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="label"
        formatters={{ formatCaption: (date, opts) => format(date, "yyyy.MM", opts) }}
        className="w-full [&_.rdp-day]:h-9 [&_.rdp-day]:p-0"
      />
      <div className="border-t-2 py-3">
        <h3 className="flex items-center gap-1.5 mb-3 text-sm font-bold text-accent">
          <CalendarIcon className="size-4" />
          일자별 진행 현황
        </h3>
        <p className="flex items-center gap-1 text-xs">
          <span className="inline-block w-[3px] h-6 mr-2.5 bg-primary"></span>
          <span className="text-2xl font-black">{format(new Date(), "dd일")}</span>
          <span className="self-end leading-5">{format(new Date(), "EEE요일", { locale: ko })}</span>
        </p>
      </div>
    </div>
  );
}
