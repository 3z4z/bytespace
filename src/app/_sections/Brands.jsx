import { AdidasIcon, NikeIcon, ToyotaIcon } from "@/components/icons/Icons";
import Marquee from "react-fast-marquee";

export default function BrandsSection() {
  const brands = [
    { title: "Adidas", icon: AdidasIcon },
    { title: "Nike", icon: NikeIcon },
    { title: "Toyota", icon: ToyotaIcon },
  ];

  return (
    <section className="bg-base-100 lg:py-20 md:py-16 sm:py-12 py-9">
      <div className="base-container w-full overflow-hidden">
        <Marquee speed={40} gradient={false} autoFill className="w-full">
          {brands.map((b, i) => {
            const Icon = b.icon;

            return (
              <article
                key={i}
                className="lg:mx-18 md:mx-14 sm:mx-10 mx-6 flex shrink-0 items-center gap-4 text-shuttle-gray-400 justify-center cursor-default hover:text-shuttle-gray-950 transition-colors"
              >
                <Icon className="md:size-12 sm:size-10 size-8" />
                <span className="md:text-2xl sm:text-xl text-lg font-bold tracking-tight">
                  {b.title}
                </span>
              </article>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
