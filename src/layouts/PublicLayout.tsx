import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return(
    <div className="max-w-7xl m-auto p-2">
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
