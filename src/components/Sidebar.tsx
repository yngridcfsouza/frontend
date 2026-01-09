import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
  BookPlus,
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
        label: "Mais informações",
        to: "/access-control/institutional",
        icon: BookPlus,
      },
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
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  // Estado para controlar qual menu está aberto
  const [openItem, setOpenItem] = useState<string | null>(null);

  // EFEITO: Mantém o menu pai aberto se você der F5 na página de um filho
  useEffect(() => {
    const activeParent = navItems.find(item =>
      item.children?.some(child => location.pathname.startsWith(child.to))
    );

    if (activeParent) {
      setOpenItem(activeParent.label);
    }
  }, [location.pathname]);

  function toggleItem(label: string) {
    setOpenItem((prev) => (prev === label ? null : label));
  }

  return (
    <aside
      className={cn(
        "h-[98vh] sticky top-0 border-r bg-background flex flex-col transition-all duration-300 rounded-lg shadow-sm",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* HEADER / LOGO */}
      <div className="h-16 flex items-center justify-center border-b mb-2">
        <Button
          variant="ghost"
          size={collapsed ? "icon" : "default"}
          onClick={onToggleSidebar}
          className={cn(!collapsed && "justify-start px-4")}
        >
          {collapsed ? (
            <img src="/favicon.svg" alt="Logo" className="h-8 w-8"/>
          ) : (
            <img src="/logo-horizontal.jpg" alt="Logo" className="h-8 object-contain"/>
          )}
        </Button>
      </div>

      {/* NAVEGAÇÃO */}
      <nav className="flex-1 px-2 py-2 space-y-4 mt-4 overflow-y-auto scrollbar-thin">
        {navItems.map((item) => {
          const Icon = item.icon;

          // Verifica se algum filho está ativo
          const isParentActive = item.children?.some((child) =>
            location.pathname.startsWith(child.to)
          );

          // Verifica se deve mostrar aberto (pelo clique ou por estar ativo)
          const isOpen = openItem === item.label;

          // --- CASO 1: ITEM SIMPLES (LINK) ---
          if (!item.children && item.to) {
            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors duration-200",
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    collapsed && "justify-center px-2"
                  )
                }
                title={collapsed ? item.label : undefined}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          }

          // --- CASO 2: ITEM PAI (SANFONA) ---
          return (
            <div key={item.label} className="space-y-1">
              <button
                onClick={() => toggleItem(item.label)}
                // REMOVIDO: navigate(...) que estava aqui e quebrava a lógica
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors duration-200 group",
                  isParentActive
                    ? "text-primary font-medium bg-primary/5" // Destaque suave se um filho estiver ativo
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  collapsed && "justify-center px-2"
                )}
                title={collapsed ? item.label : undefined}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </div>

                {!collapsed && (
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform duration-200 text-muted-foreground group-hover:text-foreground",
                      isOpen && "rotate-180"
                    )}
                  />
                )}
              </button>

              {/* SUB-ITENS */}
              {!collapsed && isOpen && item.children && (
                <div className="ml-4 pl-2 border-l border-muted space-y-1 mt-1 animate-in slide-in-from-top-2 duration-200">
                  {item.children.map((child) => {
                    const ChildIcon = child.icon;

                    return (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                            isActive
                              ? "text-primary font-medium bg-muted"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          )
                        }
                      >
                        {ChildIcon && <ChildIcon className="h-3.5 w-3.5" />}
                        <span>{child.label}</span>
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* FOOTER / USER INFO */}
      <div className="border-t p-3 space-y-2">
         {/* Informação do Usuário */}
        {!collapsed && (
            <div className="flex items-center gap-3 px-2 py-1.5 rounded-md bg-muted/50">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <User className="h-4 w-4" />
                </div>
                <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-medium truncate">{user?.name || "Usuário"}</span>
                    <span className="text-xs text-muted-foreground truncate">Admin</span>
                </div>
            </div>
        )}

        {/* Botão de Sair */}
        <button
          onClick={() => {
            signOut();
            navigate("/login");
          }}
          className={cn(
            "flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors",
            "text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
            collapsed ? "justify-center" : "px-3"
          )}
          title="Sair"
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && <span>Sair</span>}
        </button>
      </div>
    </aside>
  );
}
