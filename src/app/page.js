import BrandsSection from "./_sections/Brands";
import CategoriesSection from "./_sections/Categories";
import CoursesSection from "./_sections/Courses";
import HeroSection from "./_sections/Hero";
import JoinUsSection from "./_sections/JoinUs";
import ReviewsSection from "./_sections/Reviews";
import VisionSection from "./_sections/Vision";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <CoursesSection />
      <CategoriesSection />
      <VisionSection />
      <JoinUsSection />
      <ReviewsSection />
    </>
  );
}
