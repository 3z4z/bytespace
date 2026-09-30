"use client";

import BrandLogo from "../ui/BrandLogo";
import { CartIcon, UserIcon } from "../icons/Icons";
import NavbarComponent from "./Navbar";
import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useGsapHover from "@/hooks/useGsapHover";
import Hamburger from "hamburger-react";
import NavbarResponsiveComponent from "./NavbarResponsive";

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const linksRef = useRef(null);
  const lastScrollY = useRef(0);
  const isMenuOpenRef = useRef(false);
  const { handleMouseEnter, handleMouseLeave } = useGsapHover();

  useGSAP(
    () => {
      const header = headerRef.current;

      gsap.fromTo(
        linksRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power1.out",
        },
      );

      const handleScroll = () => {
        if (isMenuOpenRef.current) return;

        const currentScrollY = window.scrollY;
        const hasScrolled = currentScrollY > 0;

        if (hasScrolled) {
          header.classList.add("backdrop-blur-xl", "bg-secondary/75");
          header.classList.remove("bg-transparent");
        } else {
          header.classList.remove("backdrop-blur-xl", "bg-secondary/75");
          header.classList.add("bg-transparent");
        }

        if (currentScrollY <= 10) {
          gsap.to(header, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          lastScrollY.current = currentScrollY;
          return;
        }

        if (currentScrollY > lastScrollY.current) {
          gsap.to(header, {
            yPercent: -100,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
          });
        } else if (currentScrollY < lastScrollY.current) {
          gsap.to(header, {
            yPercent: 0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
          });
        }

        lastScrollY.current = currentScrollY;
      };

      // Apply the correct state immediately on page load/refresh
      handleScroll();

      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    { scope: headerRef },
  );

  useGSAP(() => {
    isMenuOpenRef.current = isOpen;

    if (isOpen) {
      gsap.to(headerRef.current, {
        yPercent: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  const links = [
    { path: "/auth/login", title: "Login" },
    { path: "/join-us", title: "Join Us" },
    { path: "/shop", title: <CartIcon /> },
  ];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 z-50 w-full lg:py-10 md:py-7 sm:py-5 py-4 transition-colors duration-300 ease-in-out"
    >
      <div className="flex justify-between base-container max-2xl:px-6! max-sm:px-3!">
        <BrandLogo textColor="white" />
        <NavbarComponent />
        <ul
          ref={linksRef}
          className="flex gap-6 text-base-100 items-center max-lg:hidden"
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
        <div className="lg:hidden text-white z-20 flex gap-2 items-center">
          <Link
            href={"/auth/login"}
            className="size-9 rounded-full flex items-center justify-center btn btn-primary p-0 text-lg border-none"
          >
            <UserIcon />
          </Link>
          <Hamburger size={16} toggled={isOpen} toggle={setIsOpen} rounded />
        </div>
        <NavbarResponsiveComponent isOpen={isOpen} />
      </div>
    </header>
  );
}
