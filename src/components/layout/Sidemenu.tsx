"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search, Layers, ClipboardList, ScrollText, LaptopMinimalCheck, UserCog } from "lucide-react";

export default function Sidemenu() {
  const menuList = [
    { title: "공통코드", list: ["공통코드메뉴01", "공통코드메뉴02", "공통코드메뉴03"], icon: Layers },
    {
      title: "프로그램관리",
      list: ["프로그램관리01", "프로그램관리02", "프로그램관리03", "프로그램관리04"],
      icon: ClipboardList,
    },
    { title: "메뉴관리", list: ["메뉴관리01", "메뉴관리02", "메뉴관리03", "메뉴관리04"], icon: ScrollText },
    { title: "권한관리", list: [], icon: LaptopMinimalCheck },
    { title: "사용자관리", list: [], icon: UserCog },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-2 px-5 py-9">
      <h1 className="text-2xl text-accent font-extrabold text-center mb-3.5">
        Bridge<span className="pl-1.5 text-primary">Works</span>
        <span className="pl-0.5 text-3xl text-primary">.</span>
      </h1>
      <div className="relative">
        <Input className="pr-8" placeholder="Search Menu" />
        <Button variant="transparent" size="icon" className="absolute top-0 right-0 size-9 px-5">
          <Search strokeWidth={1.75} />
        </Button>
      </div>
      {menuList.map((item, i) => {
        const Icon = item.icon;
        const isOpen = openIndex === i;
        return (
          <div key={item.title}>
            <Button
              variant="transparent"
              className={cn("flex justify-start w-full", isOpen && "text-primary font-bold")}
              onClick={() => setOpenIndex(!isOpen ? i : null)}
              aria-expanded={isOpen}
              aria-controls={`submenu-${i}`}>
              <Icon className="text-current" />
              {item.title}
            </Button>
            {isOpen && item.list.length > 0 && (
              <ul className="text-sm px-9">
                {item.list.map((listItem) => (
                  <li key={listItem} className="py-1.5">
                    <Link href="#">{listItem}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
