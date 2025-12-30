import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function GeneralLayout() {
  const [collapsed, setCollapsed] = useState(true);

  function toggleSidebar() {
    setCollapsed((prev) => !prev);
  }

  return (
    <div className="flex min-h-screen m-auto p-2 gap-2">
      <Sidebar
        collapsed={collapsed}
        onToggleSidebar={toggleSidebar}
      />

      <div className="flex-1 flex flex-col items-center justify-center">
        <main className="flex-1 overflow-y-auto p-6 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
