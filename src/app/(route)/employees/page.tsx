import SearchArea from "./components/SearchArea";
import GridArea from "./components/GridArea";

export default function employees() {
  return (
    <div className="flex flex-col gap-3 h-full">
      <SearchArea />
      <GridArea className="flex-auto" />
    </div>
  );
}
