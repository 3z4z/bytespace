export default function InputGroup({
  motionClass = "",
  Icon,
  marginTop = "",
  buttonTitle = "",
  placeholderText = "",
}) {
  return (
    <div
      className={`${motionClass ? motionClass + " mx-auto max-sm:flex-wrap max-sm:justify-center" : ""} ${marginTop ? marginTop + " " : ""}max-w-145 flex gap-4 items-center`}
    >
      <div className="relative w-full">
        {Icon && (
          <Icon className="text-shuttle-gray-400 absolute top-1/2 -translate-y-1/2 left-6 z-1" />
        )}
        <input
          type="text"
          className={`input md:text-lg bg-white w-full md:py-6 ${Icon ? "pe-6 ps-14" : "px-6"} focus:border-electric-lime-500`}
          placeholder={placeholderText}
        />
      </div>
      <button className="btn btn-primary md:btn-lg md:py-3 py-2 px-6">
        {buttonTitle}
      </button>
    </div>
  );
}
