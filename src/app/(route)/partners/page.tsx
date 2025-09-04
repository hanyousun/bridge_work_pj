"use client";

import SearchArea from "./components/SearchArea";
import GridArea01 from "./components/GridArea01";
import GridArea02 from "./components/GridArea02";

export default function Partners() {
  return (
    <div className="flex flex-col gap-3 h-[calc(100%-38px)]">
      <SearchArea />
      <div className="flex justify-between gap-5 flex-auto w-full">
        <GridArea01 className="flex-auto" />
        <GridArea02 className="flex-auto" />
      </div>
    </div>
  );
}
