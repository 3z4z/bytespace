"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import CourseCard from "@/components/ui/CourseCard";
import { categories, courses } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CoursesSection() {
  const [filter, setFilter] = useState("Featured");

  const filteredCourses =
    filter === "Featured"
      ? courses.filter((c) => c.featured)
      : courses.filter((c) => c.category === filter);

  return (
    <section>
      <SectionTitle
        title={"Discover Your Passion,\n Build Your Skills"}
        subtitle={
          "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        }
      />

      <main className="base-container">
        <div className="flex lg:gap-4 sm:gap-3 gap-2 items-center flex-wrap justify-center lg:mb-15 sm:mb-12 mb-9">
          <button
            onClick={() => setFilter("Featured")}
            className={`${
              filter === "Featured" ? "bg-primary text-base-content!" : ""
            } btn lg:btn-lg md:btn-md max-sm:btn-sm text-shuttle-gray-500 hover:text-primary-content hover:bg-primary md:px-6 md:py-3 px-3 py-1.5 border-none`}
          >
            Featured
          </button>

          {categories.map((c, i) => (
            <button
              onClick={() => setFilter(c.name)}
              key={i}
              className={`${
                filter === c.name ? "bg-primary text-base-content!" : ""
              } btn lg:btn-lg md:btn-md max-sm:btn-sm text-shuttle-gray-500 hover:text-primary-content hover:bg-primary md:px-6 md:py-3 px-3 py-1.5 border-none`}
            >
              {c.name}
            </button>
          ))}

          <Link
            href="/courses"
            className="text-secondary hover:underline font-medium lg:text-lg md:text-sm max-sm:text-xs text-nowrap"
          >
            + More
          </Link>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-10 sm:gap-4 gap-3">
            {filteredCourses.map((c, i) => (
              <CourseCard key={i} index={i} {...c} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-6 rounded-2xl bg-base-100">
            <figure className="size-64 relative aspect-square mx-auto">
              <Image
                src="/images/writing.png"
                alt="Writing book image"
                fill
                className="object-contain"
              />
            </figure>
            <p className="lg:text-2xl sm:text-xl text-lg text-shuttle-gray-700 py-4">
              We are cooking beautiful courses only for you.
              <span className="font-medium text-secondary ms-1">
                Stay Tuned!
              </span>
            </p>
          </div>
        )}
      </main>
    </section>
  );
}
