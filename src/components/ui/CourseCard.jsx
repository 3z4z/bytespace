"use client";

import Image from "next/image";
import { NetworkBarsIcon } from "../icons/Icons";
import GsapMotionCard from "./GsapMotionCard";

export default function CourseCard({
  image,
  title,
  instructor,
  lessons,
  duration,
  comments,
  rating,
  level,
  avatars = [],
  students,
  price,
  href = "#",
  index = 0,
}) {
  return (
    <>
      <GsapMotionCard index={index}>
        <article className="w-full cursor-pointer rounded-2xl border border-shuttle-gray-200 sm:p-4 p-2 hover:shadow-lg flex flex-col justify-between h-full">
          <div className="relative overflow-hidden rounded-xl">
            <figure className="relative aspect-5/3 size-full">
              <Image src={image} fill alt={title} className="object-cover" />
            </figure>
            <div className="absolute lg:bottom-3 bottom-2 left-0 flex overflow-y-auto w-full items-center lg:gap-3 gap-2 lg:px-3 px-2">
              {[`${lessons} Lessons`, duration, `${comments} Comments`].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-base-100/75 lg:px-3 lg:py-1.5 px-2 py-1 lg:text-sm text-xs whitespace-nowrap lg:text-shuttle-gray-700 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="lg:pt-8 sm:pt-5 pt-4 flex-1 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="lg:text-xl sm:text-base text-sm font-bold tracking-tight">
                  {title}
                </h3>
                <p className="mt-1 lg:text-lg sm:text-sm text-xs text-base-content/65">
                  by{" "}
                  <a href={href} className="text-secondary">
                    {instructor}
                  </a>
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1.5 pt-1 lg:text-lg sm:text-sm text-xs">
                <span className="text-base-content/65">{rating}</span>
                <span className="text-base-content/20">★</span>
              </div>
            </div>

            <div className="lg:mt-8 sm:mt-5 mt-4 flex items-center lg:gap-5 sm:gap-3 gap-2">
              <div className="flex items-center lg:gap-3 sm:gap-2 gap-1 rounded-full bg-base-200 px-3 py-2">
                <NetworkBarsIcon className="lg:size-6 sm:size-5 size-4 text-shuttle-gray-400" />
                <span className="lg:text-lg sm:text-sm text-xs text-shuttle-gray-700">
                  {level}
                </span>
              </div>

              <div className="avatar-group -space-x-3 items-center rtl:space-x-reverse">
                {avatars.map((avatar, index) => (
                  <div key={index} className="avatar border-none">
                    <figure className="relative lg:size-9 sm:size-7.5 size-6 overflow-hidden rounded-full">
                      <Image
                        fill
                        src={avatar}
                        alt=""
                        className="object-cover"
                      />
                    </figure>
                  </div>
                ))}

                {students && (
                  <div className="avatar border-none">
                    <div className="flex lg:size-9 sm:size-7.5 size-6 items-center justify-center rounded-full bg-primary lg:text-sm sm:text-xs text-[10px] font-medium text-primary-content">
                      {students}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:mt-8 sm:mt-5 mt-4 flex items-baseline gap-1">
              <span className="lg:text-xl sm:text-lg font-bold leading-none text-secondary">
                ${price}
              </span>

              <span className="lg:text-xs text-[10px] text-base-content/60">
                {`/ lifetime`}
              </span>
            </div>
          </div>
        </article>
      </GsapMotionCard>
    </>
  );
}
