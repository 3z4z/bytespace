export default function SectionTitle({
  title,
  subtitle,
  flexDirection = "flex-col",
  textAlign = "text-center",
  subtitleColor = "text-shuttle-gray-400",
  titleColor = "text-base-content",
  titleMarginBottom = "mb-5",
  maxWidth = "max-w-248",
}) {
  return (
    <header
      className={`mt-18 mb-16 ${maxWidth} mx-auto flex ${flexDirection} ${textAlign} px-3`}
    >
      <h2
        className={`${titleColor} ${flexDirection !== "flex-col" ? "w-[44%]" : "w-auto"} text-[2.625rem] tracking-tight leading-16.5 ${titleMarginBottom} whitespace-pre-line`}
      >
        {title}
      </h2>
      <p
        className={`${subtitleColor} ${flexDirection !== "flex-col" ? "w-[56%] ps-8 text-justify" : "w-auto"} md:text-lg leading-7.5`}
      >
        {subtitle}
      </p>
    </header>
  );
}
