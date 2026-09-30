"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import { animShapesData } from "@/utils/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function JoinUsSection() {
  const containerRef = useRef();
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play pause resume none",
        },
      });
      tl.fromTo(
        ".shape1",
        { xPercent: 0, yPercent: 0, scale: 0 },
        { xPercent: -315, yPercent: -150, scale: 1, duration: 1.2 },
        "-=0.1",
      )
        .fromTo(
          ".shape2",
          { xPercent: 0, yPercent: 0, scale: 0 },
          { xPercent: 225, yPercent: -150, scale: 1, duration: 1.4 },
          "-=0.8",
        )
        .fromTo(
          ".shape3",
          { xPercent: 0, yPercent: 0, scale: 0 },
          { xPercent: -280, yPercent: -10, scale: 1, duration: 1.4 },
          "-=1.1",
        )
        .fromTo(
          ".shape4",
          { xPercent: 0, yPercent: 0, scale: 0 },
          { xPercent: 180, yPercent: -15, scale: 1, duration: 1.4 },
          "-=1.2",
        )
        .fromTo(
          ".shape5",
          { xPercent: 0, yPercent: 0, scale: 0 },
          { xPercent: -320, yPercent: -190, scale: 1, duration: 1.4 },
          "-=1.2",
        )
        .fromTo(
          ".shape6",
          { xPercent: 0, yPercent: 0, scale: 0 },
          { xPercent: 180, yPercent: -150, scale: 1, duration: 1.4 },
          "-=1.2",
        );
    },
    {
      scope: containerRef,
    },
  );
  return (
    <section
      ref={containerRef}
      className="bg-grid-secondary py-24 overflow-hidden"
    >
      <div className="base-container relative">
        <SectionTitle
          titleMarginBottom="mb-10"
          titleColor={"text-base-100"}
          subtitleColor={"text-base-100"}
          title={"Unlock Your Potential as a\nCreator with ByteSpace"}
          subtitle={`Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.`}
        />
        {animShapesData.map((shape, index) => (
          <Image
            key={index}
            src={shape.src}
            alt={shape.alt}
            width={shape.width}
            height={shape.height}
            className={`${shape.specialClass} hidden md:block absolute -bottom-20 left-1/2 -translate-x-1/2 pointer-events-none scale-0`}
          />
        ))}
        <div className="text-center">
          <button className="btn btn-primary btn-lg">Join as creator</button>
        </div>
      </div>
    </section>
  );
}
