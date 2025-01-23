import { HeroUIProvider, Link } from "@heroui/react";
import { Outlet, useHref, useNavigate } from "react-router-dom";

export default function DefaultLayout() {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <div className="relative flex flex-col h-screen">
        <main className="container mx-auto max-w-[90vw] px-6 flex-grow pt-16">
          <Outlet />
        </main>
        <footer className="w-full flex items-center justify-center py-3">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://github.com/Ashlc"
            title="heroui.com homepage"
          >
            <span className="text-default-600">Created by</span>
            <p className="text-primary">Isadora Paz</p>
          </Link>
        </footer>
      </div>
    </HeroUIProvider>
  );
}
