import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Background } from "./Background";

export function Layout() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-white/30">
      <Background />
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}