import Link from "next/link";
import GsapMotionCard from "./GsapMotionCard";

export default function CategoryCard({ cat, index }) {
  const Icon = cat?.icon;
  return (
    <>
      <GsapMotionCard index={index}>
        <article className="hover:shadow-xl transition border border-shuttle-gray-200 rounded-3xl text-primary-content aspect-5/4">
          <Link
            href={cat?.path ?? "/"}
            className="flex flex-col items-center justify-center sm:p-6 p-4 size-full lg:gap-3 gap-2"
          >
            <div className="bg-primary lg:size-15 size-12 rounded-full flex items-center justify-center">
              <Icon className="lg:size-8 size-6" />
            </div>
            <p className="lg:text-xl sm:text-lg font-medium">{cat.name}</p>
          </Link>
        </article>
      </GsapMotionCard>
    </>
  );
}
