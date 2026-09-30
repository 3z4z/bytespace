"use client";

import Link from "next/link";
import { useEffect } from "react";
import { LogoutIcon, SpinnerIcon } from "../icons/Icons";

export default function NavbarResponsiveComponent({
  isOpen,
  user,
  sessionStatus,
  logout,
  nameLogo,
}) {
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
    <>
      <nav
        className={`${isOpen ? "left-0" : "left-full"} transition-all lg:hidden fixed top-0 left-0 w-full h-screen bg-persian-blue-900 text-base-100 pt-20 pb-8 px-6`}
      >
        {sessionStatus === "authenticated" && (
          <div className="py-8 px-6 rounded-2xl flex justify-between items-center bg-persian-blue-950 flex-wrap gap-3">
            {sessionStatus === "loading" ? (
              <SpinnerIcon className="lg:hidden text-base-100 size-6" />
            ) : sessionStatus === "authenticated" ? (
              <>
                <div className="flex sm:gap-3 gap-2 items-center">
                  <div className="size-10 btn btn-primary font-bold">
                    {nameLogo}
                  </div>
                  <p className="font-semibold sm:text-lg">{user?.name}</p>
                </div>
                <button
                  onClick={() => logout()}
                  className="text-base-100 btn btn-secondary max-sm:btn-sm btn-outline"
                >
                  <LogoutIcon />
                  Logout
                </button>
              </>
            ) : null}
          </div>
        )}
        <div className="pt-16 flex items-center flex-col gap-5">
          {links.map((l, i) => (
            <Link key={i} href={l.path} className="sm:text-lg">
              {l.title}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
