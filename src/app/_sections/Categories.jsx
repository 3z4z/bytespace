import SectionTitle from "@/components/shared/SectionTitle";
import { featuredCategories } from "@/utils/data";

export default function CategoriesSection() {
  return (
    <section className="mb-36">
      <SectionTitle
        title={"Explore Diverse Learning Paths at Bytespace"}
        subtitle={`At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.`}
      />
      <main className="base-container grid grid-cols-6 gap-8">
        {featuredCategories.map((c, i) => {
          const Icon = c.icon;
          return (
            <article
              key={i}
              className="border border-shuttle-gray-200 p-6 rounded-3xl text-primary-content flex flex-col items-center justify-center gap-3 aspect-5/4"
            >
              <div className="bg-primary size-15 rounded-full flex items-center justify-center">
                <Icon />
              </div>
              <p className="text-xl font-medium">{c.name}</p>
            </article>
          );
        })}
      </main>
    </section>
  );
}
