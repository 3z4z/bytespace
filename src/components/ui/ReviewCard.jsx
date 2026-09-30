import Image from "next/image";
import GsapMotionCard from "./GsapMotionCard";

export function ReviewCard({ name, role, avatar, review, index = 0 }) {
  return (
    <GsapMotionCard className="h-full" index={index}>
      <article className="bg-white h-full rounded-3xl p-8 shadow-xl shadow-shuttle-gray-700/5 flex flex-col gap-6 transition-all hover:shadow-shuttle-gray-700/20 hover:shadow-2xl">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-lg text-secondary font-medium">{role}</p>
        </div>
        <p className="text-lg text-shuttle-gray-700">{`"${review}"`}</p>
      </article>
    </GsapMotionCard>
  );
}
