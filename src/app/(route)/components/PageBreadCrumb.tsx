"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbWithCustomSeparator() {
    const pathname = usePathname();

      if (pathname === "/") return null;
        const segments = pathname.split("/").filter(Boolean);
  return (
    <BreadcrumbItem key={href}>
        {node}
        {!isLast && <BreadcrumbSeparator />}
      </BreadcrumbItem>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList className="pb-4">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {crumbs}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
