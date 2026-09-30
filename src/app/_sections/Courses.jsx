import SectionTitle from "@/components/shared/SectionTitle";
import CourseCard from "@/components/ui/CourseCard";
import { categories, courses } from "@/utils/data";
import Link from "next/link";

export default function CoursesSection() {
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
          {categories.map((c, i) => (
            <button
              key={i}
              className="btn lg:btn-lg md:btn-md max-sm:btn-sm text-shuttle-gray-500 hover:text-primary-content hover:bg-primary md:px-6 md:py-3 px-3 py-1.5 border-none"
            >
              {c.name}
            </button>
          ))}
          <Link
            href={"/courses"}
            className="text-secondary hover:underline font-medium lg:text-lg md:text-sm max-sm:text-xs text-nowrap"
          >
            + More
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-10 sm:gap-4 gap-3">
          {courses.map((c, i) => (
            <CourseCard key={i} index={i} {...c} />
          ))}
        </div>
      </main>
    </section>
  );
}
