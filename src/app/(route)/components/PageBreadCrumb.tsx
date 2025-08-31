"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

function toTitleCase(s: string) {
  try {
    return decodeURIComponent(s)
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c: string) => c.toUpperCase()); // ← 타입 명시
  } catch {
    return s;
  }
}

export default function PageBreadcrumb() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  // "/a/b/c" -> ["a","b","c"]
  const segments: string[] = pathname.split("/").filter(Boolean); // ← 타입 명시

  // 누적 경로로 링크 만들기
  const crumbs = segments.map((seg: string, idx: number) => {
    // ← 타입 명시
    const href = "/" + segments.slice(0, idx + 1).join("/");
    const isLast = idx === segments.length - 1;

    return (
      <BreadcrumbItem key={href}>
        {isLast ? (
          <BreadcrumbPage>{toTitleCase(seg)}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink asChild>
            <Link href={href}>{toTitleCase(seg)}</Link>
          </BreadcrumbLink>
        )}
        {!isLast && <BreadcrumbSeparator />}
      </BreadcrumbItem>
    );
  });

  return (
    <div className="flex justify-between items-center pb-2">
      <Breadcrumb>
        <BreadcrumbList className="pb-1">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {crumbs}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-1">
        <Button size="sm" variant="secondary">
          입력
        </Button>
        <Button size="sm" variant="secondary">
          저장
        </Button>
        <Button size="sm">검색</Button>
      </div>
    </div>
  );
}
