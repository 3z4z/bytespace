import SectionTitle from "@/components/shared/SectionTitle";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { customerReviews } from "@/utils/data";

export default function ReviewsSection() {
  return (
    <section className="relative pb-20 w-full bg-gradient-ltr">
      <SectionTitle
        maxWidth="base-container"
        flexDirection="flex-row"
        title={"Discover What Our Community Is Saying"}
        subtitleColor="text-shuttle-gray-700"
        textAlign="lg:text-left text-center"
        subtitle={`At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.`}
      />
      <main className="base-container">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-3 max-sm:max-w-md max-sm:mx-auto">
          {customerReviews.map((item, index) => (
            <ReviewCard key={index} index={index} {...item} />
          ))}
        </div>
      </main>
    </section>
  );
}
