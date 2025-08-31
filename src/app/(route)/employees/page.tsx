import SearchArea from "./components/SearchArea";
import GridArea from "./components/GridArea";

export default function employees() {
  return (
    <div className="flex flex-col gap-3 flex-1 min-h-0">
      <SearchArea />
      <GridArea className="flex-1 min-h-0" />
    </div>
  );
}
