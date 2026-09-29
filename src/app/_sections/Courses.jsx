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
        <div className="flex gap-4 items-center flex-wrap justify-center mb-15">
          {categories.map((c, i) => (
            <button
              key={i}
              className="btn btn-lg text-shuttle-gray-500 hover:text-primary-content hover:bg-primary px-6 py-3 border-none"
            >
              {c.name}
            </button>
          ))}
          <Link
            href={"/courses"}
            className="text-secondary hover:underline font-medium text-lg"
          >
            + More
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {courses.map((c, i) => (
            <CourseCard key={i} {...c} />
          ))}
        </div>
      </main>
    </section>
  );
}
