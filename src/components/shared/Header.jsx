"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import useGsapHover from "@/hooks/useGsapHover";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hamburger from "hamburger-react";
import BrandLogo from "../ui/BrandLogo";
import NavbarComponent from "./Navbar";
import NavbarResponsiveComponent from "./NavbarResponsive";
import { CartIcon, LogoutIcon, SpinnerIcon, UserIcon } from "../icons/Icons";

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const rightMenuRef = useRef(null);
  const lastScrollY = useRef(0);
  const isMenuOpenRef = useRef(false);
  const { handleMouseEnter, handleMouseLeave } = useGsapHover();
  const { data, status } = useSession();
  const nameLogo = data?.user?.name?.slice(0, 2).toUpperCase();

  useGSAP(
    () => {
      if (rightMenuRef.current && status !== "loading") {
        gsap.fromTo(
          rightMenuRef.current,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            overwrite: "auto",
          },
        );
      }
    },
    { scope: headerRef, dependencies: [status] },
  );

  useGSAP(
    () => {
      const header = headerRef.current;
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
      <div className="flex justify-between items-center base-container max-2xl:px-6! max-sm:px-3!">
        <BrandLogo textColor="white" />
        <NavbarComponent />

        <div ref={rightMenuRef} className="max-lg:hidden flex items-center">
          {status === "loading" ? (
            <SpinnerIcon className="text-base-100 size-6" />
          ) : status === "authenticated" ? (
            <div className="flex gap-2 items-center">
              <button className="size-10 flex items-center justify-center font-bold btn btn-primary p-0">
                {nameLogo}
              </button>
              <button
                className="text-base-100 btn btn-secondary btn-outline"
                onClick={() => signOut()}
              >
                <LogoutIcon />
                Log out
              </button>
            </div>
          ) : (
            <ul className="flex gap-6 text-base-100 items-center">
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
          )}
        </div>

        <div className="lg:hidden text-white z-20 flex gap-2 items-center">
          {status !== "authenticated" ? (
            <Link
              href={"/auth/login"}
              className="size-9 rounded-full flex items-center justify-center btn btn-primary p-0 text-lg border-none"
            >
              <UserIcon />
            </Link>
          ) : null}
          <Hamburger size={16} toggled={isOpen} toggle={setIsOpen} rounded />
        </div>

        <NavbarResponsiveComponent
          user={data?.user}
          sessionStatus={status}
          isOpen={isOpen}
          logout={signOut}
          nameLogo={nameLogo}
        />
      </div>
    </header>
  );
}
