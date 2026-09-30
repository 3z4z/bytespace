"use client";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import useGsapHover from "@/hooks/useGsapHover";

export default function NavbarComponent() {
  const containerRef = useRef(null);
  const { handleMouseEnter, handleMouseLeave } = useGsapHover();

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1",
          duration: 0.75,
        },
      );
    },
    { scope: containerRef },
  );

  const links = [
    { path: "/", title: "Home" },
    { path: "/courses", title: "Courses" },
    { path: "/creators", title: "Creators" },
  ];

  return (
    <nav ref={containerRef} className="flex h-min gap-6 max-lg:hidden">
      {links.map((l) => (
        <Link
          key={l.path}
          href={l.path}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-base-100 py-2"
        >
          {l.title}
        </Link>
      ))}
    </nav>
  );
}
