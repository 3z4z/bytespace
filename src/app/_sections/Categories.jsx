import SectionTitle from "@/components/shared/SectionTitle";
import CategoryCard from "@/components/ui/CategoryCard";
import { featuredCategories } from "@/utils/data";

export default function CategoriesSection() {
  return (
    <section className="mb-36">
      <SectionTitle
        title={"Explore Diverse Learning Paths at Bytespace"}
        subtitle={`At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.`}
      />
      <main className="base-container grid xl:grid-cols-6 sm:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-6 sm:gap-4 gap-3 max-xl:max-w-3xl! max-sm:max-w-lg!">
        {featuredCategories.map((c, i) => {
          return <CategoryCard cat={c} key={i} index={i} />;
        })}
      </main>
    </section>
  );
}
