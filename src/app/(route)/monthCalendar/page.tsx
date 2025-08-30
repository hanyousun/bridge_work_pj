import { Card, CardContent } from "@/components/ui/card";
import CalendarArea from "./components/CalendarArea";
import ScheduleArea from "./components/scheduleArea";

export default function Schedule() {
  return (
    <div className="flex gap-4">
      <Card className="flex-1">
        <CardContent>
          <CalendarArea />
        </CardContent>
      </Card>
      <Card className="w-80">
        <CardContent>
          <ScheduleArea />
        </CardContent>
      </Card>
    </div>
  );
}
