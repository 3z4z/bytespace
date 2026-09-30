"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

export default function NotFoundPage() {
  const containerRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        "h2",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power1",
        },
      )
        .fromTo(
          "p",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power1",
          },
        )
        .fromTo(
          "a",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power1",
          },
        );
    },
    { scope: containerRef },
  );
  return (
    <section ref={containerRef} className="bg-grid-secondary text-center py-20">
      <div className="base-container">
        <div className="relative w-full">
          <h1 className="xl:text-[28rem] lg:text-[24rem] md:text-[20rem] sm:text-[16rem] text-[12rem] text-primary xl:leading-128 lg:leading-100 md:leading-92 sm:leading-74 leading-60">
            404
          </h1>
          <h2 className="text-base-100 w-full pt-20 max-w-5xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl absolute bottom-0 left-1/2 -translate-x-1/2 bg-linear-to-t from-transparent  via-persian-blue-800/60 to-transparent">
            The page you are looking for doesn’t exist
          </h2>
        </div>
        <p className="my-10 text-base-100">
          Try to use a correct url or go back to homepage to start again
        </p>
        <Link href={"/"} className="btn btn-lg btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
