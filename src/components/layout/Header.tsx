import { Button } from "../ui/button";
import { LogIn, LogOut } from "lucide-react";

export default function sidebar() {
  return (
    <div className="flex justify-between items-center px-8 py-1">
      <p className="text-xs text-accent">Bridge Works 시스템에 오신걸 환영합니다</p>
      <div className="flex items-center">
        <p className="text-xs">
          <span className="pr-1 text-primary font-bold">홍길동님</span>환영합니다.
        </p>
        <Button variant="transparent" size="icon">
          <LogIn className="size-4" strokeWidth={1.5} />
          {/* <LogOut className="size-4" strokeWidth={1.5} /> */}
        </Button>
      </div>
    </div>
  );
}
