import SectionTitle from "@/components/shared/SectionTitle";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { customerReviews } from "@/utils/data";

export default function ReviewsSection() {
  return (
    <section className="relative pb-20 w-full bg-white bg-[radial-gradient(ellipse_at_50%_0%,#eefc55_0%,transparent_60%),radial-gradient(ellipse_at_100%_15%,#f7fee7_0%,transparent_50%),radial-gradient(ellipse_at_0%_90%,#c7d2fe_0%,transparent_55%)]">
      <SectionTitle
        maxWidth="base-container"
        flexDirection="flex-row"
        title={"Discover What Our Community Is Saying"}
        subtitleColor="text-shuttle-gray-700"
        textAlign="text-left"
        subtitle={`At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.`}
      />
      <main className="base-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customerReviews.map((item) => (
            <ReviewCard key={item.id} {...item} />
          ))}
        </div>
      </main>
    </section>
  );
}
