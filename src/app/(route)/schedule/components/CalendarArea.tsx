"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendarCustom";
export default function CalendarArea() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <Calendar mode="single" captionLayout="dropdown" selected={date} onSelect={setDate} className="w-full" />;
}
