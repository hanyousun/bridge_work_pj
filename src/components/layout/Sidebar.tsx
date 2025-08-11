"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Sidemenu from "../layout/Sidemenu";
import { ChevronLeft, House, Star } from "lucide-react";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <div className="flex flex-col gap-2 bg-sidebar-primary px-1 py-9">
        <Button
          size="sideIcon"
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          <ChevronLeft color="background" className="size-8" strokeWidth={1.75} />
        </Button>
        <Button size="sideIcon">
          <House className="size-5" color="background" strokeWidth={1.75} />
        </Button>
        <Button size="sideIcon">
          <p>
            기준
            <br />
            정보
          </p>
        </Button>
        <Button size="sideIcon">
          <p>SELES</p>
        </Button>
        <Button size="sideIcon">
          <p>
            사업
            <br />
            지원
          </p>
        </Button>
        <Button size="sideIcon">
          <Star className="size-5" color="background" strokeWidth={1.75} />
        </Button>
      </div>
      {isOpen && <Sidemenu />}
    </div>
  );
}
