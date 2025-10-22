"use client";

import React from "react";
import {
  BarChart3,
  LayoutDashboard,
  Settings,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SidebarContent = () => {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Ganhos", href: "/income", icon: TrendingUp },
    { name: "Gastos", href: "/expenses", icon: TrendingDown },
    { name: "Relatórios", href: "/reports", icon: BarChart3 },
    { name: "Configurações", href: "/settings", icon: Settings },
  ];

  return (
    <div>
      <nav className="mt-6 px-3">
        <ul className="flex flex-col gap-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-lg p-2 flex gap-2 cursor-pointer hover:bg-white/25",
                    isActive ? "bg-gradient-accent" : "",
                  )}
                >
                  <item.icon color={isActive ? "black" : "white"} />
                  <span className={cn(isActive ? "text-black" : "text-white")}>
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarContent;
