"use client";
import { usePathname } from "next/navigation";
import { NavButton } from "@/components/nav-button";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import {useMedia} from "react-use";   
const routes = [
    {
        href: "/",
        label: "Overview",
    },
    {
        href: "/transactions",
        label: "Transactions",
    },
    {
        href: "/accounts",
        label: "Accounts",
    },
    {
        href: "/categories",
        label: "Categories",
    },
    {
        href: "/settings",
        label: "Settings",
    },
];

export const Navigation = () => {
    const pathname= usePathname();
    return (
        <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
            {routes.map((route, index) => (
               <NavButton 
               key={route.href}
               href={route.href}
               label={route.label}
               isActive={pathname === route.href}
               />
            ))}
        </nav>
    );
};
