"use client";

import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function BrandLogo({ textColor, motion = true }) {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        {
          x: -150,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power1",
        },
      );
    },
    { scope: containerRef },
  );
  return (
    <Link
      ref={motion ? containerRef : null}
      href={"/"}
      className="flex items-center gap-2 z-2"
    >
      <figure className="relative size-8">
        <Image
          fill
          src={"/logo.svg"}
          className="object-contain"
          alt="Brand Logo"
        />
      </figure>
      <span
        className={`font-clash text-2xl ${textColor === "white" ? "text-white" : (textColor === "base" ?? "text-base")}`}
      >
        ByteSpace
      </span>
    </Link>
  );
}
