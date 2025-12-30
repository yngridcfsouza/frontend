import { NavLink } from "react-router-dom";

import { LayoutDashboard, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type SidebarProps = {
  collapsed: boolean;
  onToggleSidebar: () => void;
}

const navItems = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Configurações",
    to: "/settings",
    icon: Settings,
  }
]

export function Sidebar({ collapsed, onToggleSidebar }: SidebarProps) {
  return (
    <aside
      className={cn(
        "border-r bg-background flex flex-col transition-all duration-300 rounded-lg",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 font-bold text-lg flex justify-center border-b">
        {collapsed
          ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleSidebar}
            >
              <img src="./simbolo-qtc.png" className="h-8"/>
            </Button>
          )
          : (
            <Button
              variant="ghost"
              size="default"
              onClick={onToggleSidebar}
            >
             <img src="./logo-horizontal.jpg" className="h-8"/>
            </Button>
          )
        }
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1">
        {
          navItems.map(({ label, to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (
                cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-muted text-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted",
                  collapsed && "justify-center px-2"
                )
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ))
        }
      </nav>
      <div className="border-t p-4 text-xs text-muted-foreground text-center">
        {!collapsed ? "Usuário logado" : <User />}
      </div>
    </aside>
  );
}
