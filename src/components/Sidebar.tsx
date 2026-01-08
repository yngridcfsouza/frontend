import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  ChevronsDownUp,
  LayoutDashboard,
  PlusCircle,
  Settings,
  User,
  ChevronDown,
  List,
  Trash2,
  LogOut,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

type SidebarProps = {
  collapsed: boolean;
  onToggleSidebar: () => void;
};

type NavItem = {
  label: string;
  to?: string;
  icon: React.ElementType;
  children?: {
    label: string;
    to: string;
    icon?: React.ElementType;
  }[];
};

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Controle de Acesso",
    icon: ChevronsDownUp,
    children: [
      {
        label: "Adicionar cartão",
        to: "/access-control/add-card",
        icon: PlusCircle,
      },
      {
        label: "Listar todos os cartões",
        to: "/access-control/all-cards",
        icon: List,
      },
      {
        label: "Deletar cartão",
        to: "/access-control/delete-card",
        icon: Trash2,
      },
    ],
  },
  {
    label: "Configurações",
    to: "/settings",
    icon: Settings,
  },
];

export function Sidebar({ collapsed, onToggleSidebar }: SidebarProps) {
  const location = useLocation();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const { signOut } = useAuth();

  const navigate = useNavigate();

  function toggleItem(label: string) {
    setOpenItem((prev) => (prev === label ? null : label));
  }

  return (
    <aside
    className={cn( "border-r bg-background flex flex-col transition-all duration-300 rounded-lg", collapsed ? "w-16" : "w-64" )}
    >
      <div className="p-4 font-bold text-lg flex justify-center border-b mb-6">
        {collapsed
          ? (
          <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
            <img src="./favicon.svg" className="h-8"/>
          </Button>
          ) : (
          <Button variant="ghost" size="lg" onClick={onToggleSidebar} >
            <img src="./logo-horizontal.jpg" className="h-full w-full"/>
          </Button>
          )
        }
      </div>

      {/* NAVEGAÇÃO */}
      <nav className="flex-1 px-2 py-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isParentActive = item.children?.some((child) =>
            location.pathname.startsWith(child.to)
          );

          const isOpen =
            openItem === item.label || isParentActive;

          // ITEM SIMPLES (SEM FILHOS)
          if (!item.children && item.to) {
            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-muted text-foreground font-medium"
                      : "text-muted-foreground hover:bg-muted",
                    collapsed && "justify-center px-2"
                  )
                }
              >
                <Icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          }

          // ITEM COM SUB-ITENS
          return (
            <div key={item.label}>
              <button
                onClick={() => {
                  toggleItem(item.label)
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  isParentActive
                    ? "bg-muted font-medium"
                    : "text-muted-foreground hover:bg-muted",
                  collapsed && "justify-center px-2"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />

                {!collapsed && (
                  <>
                    <span className="flex-1 text-left">
                      {item.label}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </>
                )}
              </button>

              {/* SUB-ITENS */}
              {!collapsed && isOpen && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.children?.map((child) => {
                    const ChildIcon = child.icon;

                    return (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                            isActive
                              ? "bg-muted text-foreground font-medium"
                              : "text-muted-foreground hover:bg-muted"
                          )
                        }
                      >
                        {ChildIcon && (
                          <ChildIcon className="h-4 w-4" />
                        )}
                        {child.label}
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="border-t p-4 text-xs text-muted-foreground flex flex-col items-center justify-center gap-2">
        {collapsed ? <User className="h-4 w-4" /> : "Usuário logado"}
        <div className="border-t p-4">
          <button
            onClick={() => {
              signOut();
              navigate("/login");
            }}
            className={cn(
              "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
              "text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
              collapsed && "justify-center px-2"
            )}
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span>Sair</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
