"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NavbarResponsiveComponent({ isOpen }) {
  const links = [
    { path: "/", title: "Home" },
    { path: "/courses", title: "Courses" },
    { path: "/creators", title: "Creators" },
    { path: "/join-us", title: "Join Us" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav
      className={`${isOpen ? "left-0" : "left-full"} transition-all md:hidden fixed top-0 left-0 w-full h-screen bg-persian-blue-900 text-base-100 py-8 pt-32 flex items-center flex-col gap-5`}
    >
      {links.map((l, i) => (
        <Link key={i} href={l.path} className="sm:text-lg">
          {l.title}
        </Link>
      ))}
    </nav>
  );
}
