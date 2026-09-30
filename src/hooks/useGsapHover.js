import gsap from "gsap";

export default function useGsapHover() {
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -4,
      fontWeight: 500,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      fontWeight: 400,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
  };
}
