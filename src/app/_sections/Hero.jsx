"use client";

import Image from "next/image";
import { SearchIcon } from "@/components/icons/Icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { animShapesData } from "@/utils/data";
import { ScrollTrigger } from "gsap/all";
import InputGroup from "@/components/ui/InputGroup";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const text = `Get Access to Hundreds Courses Available`;

  const avatarData = [
    { src: "https://picsum.photos/id/64/4326/2884", alt: "user1" },
    { src: "https://picsum.photos/id/9/5000/3269", alt: "user2" },
    { src: "https://picsum.photos/id/22/4434/3729", alt: "user3" },
  ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play pause resume none",
        },
      });

      tl.from(".char", {
        duration: 0.04,
        autoAlpha: 0,
        y: 10,
        stagger: 0.025,
        ease: "power2.out",
      })

        .from(
          ".hero-desc",
          {
            opacity: 0,
            y: 15,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.1",
        )

        .from(
          ".search-container",
          {
            opacity: 0,
            y: 15,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2",
        )

        .from(
          ".hero-img-container",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.1",
        )
        .from(
          ".bg-circle",
          {
            scale: 0,
            transformOrigin: "bottom center",
            duration: 0.9,
          },
          "<",
        );

      mm.add("(min-width: 768px)", () => {
        tl.from(
          ".floating-card",
          {
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );

        gsap.to(".floating-card", {
          y: -10,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.easeInOut",
          stagger: {
            each: 0.3,
            from: "random",
          },
        });

        tl.fromTo(
          ".shape1",
          { xPercent: -50, yPercent: -50, scale: 0 },
          { xPercent: -315, yPercent: -150, scale: 1, duration: 1.2 },
          "-=0.8",
        )
          .fromTo(
            ".shape2",
            { xPercent: -50, yPercent: -50, scale: 0 },
            { xPercent: 225, yPercent: -150, scale: 1, duration: 1.4 },
            "-=1.1",
          )
          .fromTo(
            ".shape3",
            { xPercent: -50, yPercent: -50, scale: 0 },
            { xPercent: -280, yPercent: -10, scale: 1, duration: 1.4 },
            "-=1.2",
          )
          .fromTo(
            ".shape4",
            { xPercent: -50, yPercent: -50, scale: 0 },
            { xPercent: 180, yPercent: -15, scale: 1, duration: 1.4 },
            "-=1.2",
          )
          .fromTo(
            ".shape5",
            { xPercent: -50, yPercent: -50, scale: 0 },
            { xPercent: -320, yPercent: -190, scale: 1, duration: 1.4 },
            "-=1.2",
          )
          .fromTo(
            ".shape6",
            { xPercent: -50, yPercent: -50, scale: 0 },
            { xPercent: 180, yPercent: -150, scale: 1, duration: 1.4 },
            "-=1.2",
          );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-grid-secondary overflow-hidden"
    >
      <main className="base-container">
        <div className="max-w-232 mx-auto *:text-center text-white">
          <h1 className="md:mt-30 mt-24 pt-12 xl:text-7xl lg:text-6xl md:text-5xl text-4xl xl:leading-23 lg:leading-20 md:leading-17 leading-14 pb-8 tracking-tight">
            {text.split(" ").map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block whitespace-nowrap mr-[0.25em]"
              >
                {word.split("").map((char, charIndex) => (
                  <span key={charIndex} className="char inline-block">
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="hero-desc sm:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>
        <InputGroup
          Icon={SearchIcon}
          buttonTitle="Search"
          marginTop="mt-15"
          motionClass="search-container"
          placeholderText="Course, topic, creator"
        />

        <div className="hero-img-container flex justify-center relative *:select-none mt-10">
          {animShapesData.map((shape, index) => (
            <Image
              key={index}
              src={shape.src}
              alt={shape.src}
              width={shape.width}
              height={shape.height}
              className={`${shape.specialClass} hidden md:block absolute top-1/2 left-1/2 z-10 object-contain pointer-events-none`}
            />
          ))}

          <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center">
            <div className="bg-circle absolute top-1/5 left-1/2 -translate-x-1/2 aspect-square w-full max-w-[calc(100%-2rem)] rounded-full bg-primary"></div>
          </div>

          <div className="relative z-10 max-md:pb-10">
            <Image
              src={"/images/hero.png"}
              width={580}
              height={540}
              className="object-contain"
              alt="Hero Instructor"
            />

            <div className="floating-card sm:absolute top-[22%] left-[-15%] sm:left-[-10%] z-20 bg-white rounded-2xl p-3 sm:p-4 shadow-xl text-black border border-gray-100 max-md:mb-4 max-md:max-w-md max-md:mx-auto">
              <h4 className="font-bold text-sm sm:text-base">UI/UX Design</h4>
              <p className="text-xs text-gray-500 mt-0.5">
                200 Courses &bull; 1000+ Students
              </p>
            </div>

            <div className="floating-card sm:absolute top-[28%] right-[-15%] sm:right-[-5%] z-20 bg-white rounded-2xl p-3 sm:p-4 shadow-xl text-black border border-gray-100 min-w-37.5 sm:min-w-47.5 max-md:mb-4 max-md:max-w-md max-md:mx-auto">
              <p className="text-xs font-medium text-gray-500">
                Learning Progress
              </p>
              <span className="text-2xl sm:text-3xl font-extrabold block my-1">
                55%
              </span>
              <progress
                className="progress progress-primary w-full h-2"
                value="55"
                max="100"
              ></progress>
            </div>

            <div className="floating-card sm:absolute bottom-[18%] left-[-20%] sm:left-[-17%] z-20 bg-white rounded-2xl p-3 sm:p-4 shadow-xl text-black border border-gray-100 max-md:max-w-md max-md:mx-auto">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="font-bold text-sm sm:text-base">
                  Happy Students
                </span>
                <span className="text-xs text-gray-600 font-semibold flex items-center gap-0.5">
                  4.5 <span className="text-amber-400">★</span> (240)
                </span>
              </div>
              <div className="avatar-group -space-x-3 rtl:space-x-reverse items-center">
                {avatarData.map((avatar, index) => (
                  <figure key={index} className="avatar size-7 sm:size-8">
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </figure>
                ))}
                <div className="avatar placeholder size-7 sm:size-8">
                  <div className="bg-primary text-black rounded-full font-bold text-xs flex items-center justify-center size-full">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
