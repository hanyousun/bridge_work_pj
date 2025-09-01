"use client";

import SearchArea from "./components/SearchArea";
import GridArea from "./components/GridArea";

export default function Employees() {
  return (
    <div className="flex flex-col gap-3 h-[calc(100%-38px)] ">
      <SearchArea />
      <GridArea className="flex-auto" />
    </div>
  );
}
