"use client";

import { CheckmarkCircleIcon } from "@/components/icons/Icons";
import SectionTitle from "@/components/shared/SectionTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function VisionSection() {
  const containerRef = useRef();
  const vision1Ref = useRef();
  const vision2Ref = useRef();

  const progress = [
    { count: 12, unit: "K", title: "Students" },
    { count: 70, unit: "+", title: "Courses" },
    { count: 12, unit: null, title: "Creators" },
  ];
  const bullets = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  useGSAP(
    () => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: vision1Ref.current,
          start: "top 65%",
          toggleActions: "play pause resume none",
        },
      });

      tl1
        .fromTo(
          ".vision1-title",
          { x: -200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power1.out" },
        )
        .fromTo(
          ".vision1-subtitle",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power1.out" },
          "-=0.15",
        )
        .fromTo(
          ".vision1-img",
          { scale: 0.75, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.75, ease: "bounce.out" },
          "-=0.25",
        );

      const counterEls = gsap.utils.toArray(".counter-num");
      counterEls.forEach((el, index) => {
        const targetValue = parseFloat(el.getAttribute("data-count"));
        const initValue = { value: 0 };
        tl1.to(
          initValue,
          {
            value: targetValue,
            duration: 1.5,
            ease: "power1.out",
            onUpdate: () => {
              el.innerText = Math.floor(initValue.value).toLocaleString();
            },
          },
          index === 0 ? "-=1" : "<",
        );
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: vision2Ref.current,
          start: "top 65%",
          toggleActions: "play pause resume none",
        },
      });

      tl2
        .fromTo(
          ".vision2-title",
          { x: -200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power1.out" },
        )
        .fromTo(
          ".vision2-subtitle",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power1.out" },
          "-=0.15",
        )
        .fromTo(
          ".vision2-img",
          { scale: 0.75, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.75, ease: "bounce.out" },
          "-=0.5",
        );
      const bulletList = gsap.utils.toArray(".bullet-item");
      bulletList.forEach((item, index) => {
        tl2.fromTo(
          item,
          {
            y: -20,
            opacity: 0,
          },
          { y: 0, opacity: 1, ease: "power1.out", duration: 0.5 },
          index === 0 ? "-=0.8" : "<+0.15",
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative lg:py-30 md:py-20 py-16 w-full bg-gradient-rtl"
    >
      <div className="base-container">
        {/* ROW 1: VISION 1 */}
        <div
          ref={vision1Ref}
          className="grid lg:grid-cols-2 gap-12 lg:mb-20 items-center"
        >
          <div>
            <SectionTitle
              titleClass="vision1-title"
              subtitleClass="vision1-subtitle"
              textAlign="lg:text-left"
              title={"Your Path to Professional Growth Starts Here!"}
              subtitleColor={"text-shuttle-gray-700"}
              subtitle={`
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.`}
              titleMarginBottom="mb-10"
              baseMarginTop="lg:mt-18"
            />
            <div className="px-3 flex gap-8">
              {progress.map((p, i) => (
                <div key={i} className="flex lg:gap-2 sm:gap-1 flex-col">
                  <h4 className="lg:text-4xl md:text-3xl text-2xl text-secondary">
                    <span className="counter-num" data-count={p.count}>
                      0
                    </span>
                    {p?.unit}
                  </h4>
                  <p className="lg:text-lg sm:text-base text-sm">{p.title}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="aspect-square w-full relative vision1-img">
            <Image
              src={"/images/vision1.png"}
              fill
              alt="vision 1 image"
              className="object-contain"
            />
          </figure>
        </div>

        {/* ROW 2: VISION 2 */}
        <div ref={vision2Ref} className="grid lg:grid-cols-2 gap-12">
          <figure className="max-lg:order-2 vision2-img aspect-square w-full relative">
            <Image
              src={"/images/vision2.png"}
              fill
              alt="vision 2 image"
              className="object-contain"
            />
          </figure>
          <div>
            <SectionTitle
              titleClass="vision2-title"
              subtitleClass="vision2-subtitle"
              textAlign="text-left"
              title={"Create & Manage\nCourses Easily."}
              subtitleColor={"text-shuttle-gray-700"}
              baseMarginTop="lg:mt-18"
              subtitle={
                <>
                  <strong>ByteSpace</strong> supports individuals or entities in
                  the creation, publication, and administration of educational
                  courses.
                </>
              }
              titleMarginBottom="mb-10"
            />
            <ul className="flex lg:gap-4 gap-3 flex-col ms-3">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="bullet-item flex lg:gap-3 gap-2 items-center"
                >
                  <CheckmarkCircleIcon
                    className={"text-secondary lg:size-5 size-4"}
                  />
                  <span className="lg:text-lg sm:text-base text-xs font-medium">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
