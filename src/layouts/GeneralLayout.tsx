import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function GeneralLayout() {
  const [collapsed, setCollapsed] = useState(() =>
    window.innerWidth < 1120
  );

  function toggleSidebar() {
    setCollapsed((prev) => !prev);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1120) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-screen m-auto p-2 gap-2">
      <Sidebar
        collapsed={collapsed}
        onToggleSidebar={toggleSidebar}
      />

      <div className="flex-1 flex flex-col items-center justify-center">
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>

    </div>
  );
}
