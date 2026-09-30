"use client";

import { useSession } from "next-auth/react";
import BrandsSection from "./_sections/Brands";
import CategoriesSection from "./_sections/Categories";
import CoursesSection from "./_sections/Courses";
import HeroSection from "./_sections/Hero";
import JoinUsSection from "./_sections/JoinUs";
import ReviewsSection from "./_sections/Reviews";
import VisionSection from "./_sections/Vision";
import { useEffect } from "react";
import { toastConfig } from "@/utils/toastConfig";
import { toast } from "react-toastify";

export default function HomePage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      const hasToasted = sessionStorage.getItem("toasted");

      if (!hasToasted) {
        toast.success(`Welcome back, ${session?.user?.name || "user"}!`, {
          ...toastConfig,
        });
        sessionStorage.setItem("toasted", "true");
      }
    } else if (status === "unauthenticated") {
      sessionStorage.removeItem("toasted", "true");
    }
  }, [status, session]);
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
