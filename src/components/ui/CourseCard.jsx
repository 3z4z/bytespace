import Image from "next/image";
import { NetworkBarsIcon } from "../icons/Icons";

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
}) {
  return (
    <article className="w-full rounded-2xl border border-shuttle-gray-200 p-4 cursor-pointer hover:shadow-lg transition-all">
      <div className="relative overflow-hidden rounded-xl">
        <figure className="relative size-full aspect-5/3">
          <Image src={image} fill alt={title} className="object-cover" />
        </figure>
        <div className="absolute bottom-3 left-0 flex items-center justify-center w-full gap-3 px-3">
          {[`${lessons} Lessons`, duration, `${comments} Comments`].map(
            (item) => (
              <span
                key={item}
                className="rounded-full bg-base-100/75 py-1.5 px-3 text-sm whitespace-nowrap text-base-content/70 backdrop-blur-md"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </div>
      <div className="pt-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight">{title}</h3>

            <p className="mt-1 text-[17px] text-base-content/65">
              by{" "}
              <a href={href} className="text-secondary">
                {instructor}
              </a>
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 pt-1 text-lg">
            <span className="text-base-content/65">{rating}</span>
            <span className="text-base-content/20">★</span>
          </div>
        </div>

        <div className="mt-7 flex items-center gap-5">
          <div className="flex items-center gap-3 rounded-full bg-base-200 px-3 py-2">
            <NetworkBarsIcon className={"size-6 text-shuttle-gray-400"} />
            <span className="text-[17px] text-base-content/70">{level}</span>
          </div>

          <div className="avatar-group -space-x-3 rtl:space-x-reverse items-center">
            {avatars.map((avatar, index) => (
              <div key={index} className="avatar border-none">
                <figure className="relative size-9 rounded-full overflow-hidden">
                  <Image fill src={avatar} alt="" className="object-cover" />
                </figure>
              </div>
            ))}

            {students && (
              <div className="avatar border-none">
                <div className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-content">
                  {students}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 flex items-baseline">
          <span className="text-xl font-bold leading-none text-secondary">
            ${price}
          </span>

          <span className="text-[16px] text-base-content/60">/lifetime</span>
        </div>
      </div>
    </article>
  );
}
