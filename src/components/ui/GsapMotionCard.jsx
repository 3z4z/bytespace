"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapMotionCard({
  children,
  index = 0,
  className = "",
}) {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          x: -120,
          rotate: -8,
        },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play pause resume none",
          },
        },
      );
    },
    { scope: cardRef },
  );

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  );
}
