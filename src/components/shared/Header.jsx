"use client";

import BrandLogo from "../ui/BrandLogo";
import { CartIcon } from "../icons/Icons";
import NavbarComponent from "./Navbar";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useGsapHover from "@/hooks/useGsapHover";
import Hamburger from "hamburger-react";

export default function HeaderComponent() {
  const containerRef = useRef();
  const { handleMouseEnter, handleMouseLeave } = useGsapHover();
  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.75, ease: "power1" },
      );
    },
    { scope: containerRef },
  );

  const links = [
    { path: "/auth/login", title: "Login" },
    { path: "/join-us", title: "Join Us" },
    { path: "/shop", title: <CartIcon /> },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full md:py-10 py-5 backdrop-blur-xl">
      <div className="flex justify-between base-container">
        <BrandLogo textColor={"white"} />
        <NavbarComponent />
        <ul
          ref={containerRef}
          className="flex gap-6 text-base-100 items-center max-md:hidden"
        >
          {links.map((l, i) => (
            <li
              key={i}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={l.path}>{l.title}</Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden text-white">
          <Hamburger size={18} rounded />
        </div>
      </div>
    </header>
  );
}
