export default function AuthFormTitleComponent({ title = "", heading = "" }) {
  return (
    <>
      <p className="md:text-lg text-secondary">{title}</p>
      <h1 className="lg:text-[2.75rem] md:text-4xl text-3xl">{heading}</h1>
    </>
  );
}
