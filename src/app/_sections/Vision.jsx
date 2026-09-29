import { CheckmarkCircleIcon } from "@/components/icons/Icons";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";

export default function VisionSection() {
  const progress = [
    {
      count: 12,
      unit: "K",
      title: "Students",
    },
    {
      count: 70,
      unit: "+",
      title: "Courses",
    },
    {
      count: 12,
      unit: null,
      title: "Creators",
    },
  ];
  const bullets = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];
  return (
    <div className="relative py-30 min-h-screen w-full bg-white bg-[radial-gradient(ellipse_at_20%_15%,#eefc55_0%,transparent_50%),radial-gradient(ellipse_at_85%_10%,#e0e7ff_0%,transparent_45%),radial-gradient(ellipse_at_5%_50%,#dbeafe_0%,transparent_45%),radial-gradient(ellipse_at_85%_85%,#c7d2fe_0%,transparent_50%),radial-gradient(ellipse_at_10%_90%,#eefc55_0%,transparent_40%)]">
      <div className="base-container">
        <div className="grid grid-cols-2 gap-12">
          <div className="pt-24">
            <SectionTitle
              textAlign="text-left"
              title={"Your Path to Professional Growth Starts Here!"}
              subtitleColor={"text-shuttle-gray-700"}
              subtitle={`
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.`}
              titleMarginBottom="mb-10"
            />
            <div className="px-3 flex gap-8">
              {progress.map((p, i) => (
                <div key={i} className="flex gap-2 flex-col">
                  <h4 className="text-4xl text-secondary">
                    {p.count}
                    {p?.unit}
                  </h4>
                  <p className="text-lg">{p.title}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="aspect-square w-full relative">
            <Image
              src={"/images/vision1.png"}
              fill
              alt="vision 1 image"
              className="object-contain"
            />
          </figure>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <figure className="aspect-square w-full relative">
            <Image
              src={"/images/vision2.png"}
              fill
              alt="vision 1 image"
              className="object-contain"
            />
          </figure>
          <div className="pt-24">
            <SectionTitle
              textAlign="text-left"
              title={"Create & Manage\nCourses Easily."}
              subtitleColor={"text-shuttle-gray-700"}
              subtitle={
                <>
                  <strong>ByteSpace</strong> supports individuals or entities in
                  the creation, publication, and administration of educational
                  courses.
                </>
              }
              titleMarginBottom="mb-10"
            />
            <ul className="flex gap-4 flex-col ms-3.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <CheckmarkCircleIcon className={"text-secondary"} />
                  <span className="text-lg font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
