"use client";

import { usePathname } from "next/navigation";
import HeaderComponent from "@/components/shared/Header";
import FooterComponent from "@/components/shared/Footer";

const AUTH_ROUTES = ["/auth/login", "/auth/register"];

export default function AppLayoutWrapper({ children }) {
  const pathName = usePathname();

  const isAuthRoute = AUTH_ROUTES.includes(pathName);

  return (
    <>
      {!isAuthRoute && <HeaderComponent />}
      <main className="flex-1">{children}</main>
      {!isAuthRoute && <FooterComponent />}
    </>
  );
}
