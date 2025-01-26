import { HeroUIProvider, Link } from "@heroui/react";
import { LucideGithub, LucideLinkedin } from "lucide-react";
import { Outlet, useHref, useNavigate } from "react-router-dom";

import { ThemeSwitch } from "@/components/theme-switch";

export default function DefaultLayout() {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <div className="relative flex flex-col h-screen">
        <header className="w-full flex items-center justify-between px-6 h-[52px]">
          <h1 className="text-xl font-semibold text-primary">Ashl C.</h1>
          <div className="flex flex-row gap-4 text-default-500">
            <Link
              className="text-default-500 rounded"
              color="foreground"
              href="https://www.linkedin.com/in/isadorabpaz/"
            >
              <LucideLinkedin size={20} />
            </Link>
            <Link
              className="text-default-500 rounded"
              color="foreground"
              href="https://github.com/Ashlc"
            >
              <LucideGithub size={20} />
            </Link>
            <ThemeSwitch />
          </div>
        </header>
        <main className="container mx-auto max-w-[95vw] h-[calc(100vh-52px)] flex-grow py-4">
          <Outlet />
        </main>
      </div>
    </HeroUIProvider>
  );
}
