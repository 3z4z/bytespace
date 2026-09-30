export default function SectionTitle({
  title,
  subtitle,
  flexDirection = "flex-col",
  textAlign = "text-center",
  subtitleColor = "text-shuttle-gray-400",
  titleColor = "text-base-content",
  titleMarginBottom = "mb-5",
  maxWidth = "max-w-248",
  titleClass = "",
  subtitleClass = "",
  baseMarginTop = "mt-18",
}) {
  return (
    <header
      className={`${baseMarginTop} mb-16 ${maxWidth} mx-auto flex ${flexDirection} ${textAlign} ${flexDirection !== "flex-col" ? "max-lg:flex-wrap max-lg:justify-center" : ""} px-3`}
    >
      <h2
        className={`${titleClass + " " ?? titleClass}${titleColor} ${flexDirection !== "flex-col" ? "lg:w-[44%]" : "w-auto"} lg:text-[2.625rem] md:text-3xl text-2xl tracking-tight lg:leading-16.5 md:leading-13 leading-10 ${titleMarginBottom} whitespace-pre-line capitalize`}
      >
        {title}
      </h2>
      <p
        className={`${subtitleClass + " " ?? subtitleClass}${subtitleColor} ${flexDirection !== "flex-col" ? "lg:w-[56%] lg:ps-8 lg:text-justify text-center" : "w-auto"} lg:text-lg max-sm:text-sm lg:leading-7.5 sm:leading-6`}
      >
        {subtitle}
      </p>
    </header>
  );
}
