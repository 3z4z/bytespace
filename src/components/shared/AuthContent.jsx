import Image from "next/image";
import BrandLogo from "../ui/BrandLogo";

export default function AuthContentComponent({ title, subtitle, children }) {
  return (
    <section className="min-h-dvh w-full bg-grid-secondary">
      <div className="base-container h-full">
        <header className="py-8">
          <BrandLogo motion={false} textColor={"white"} />
        </header>
        <main className="grid lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="max-w-md">
              <h1 className="text-2xl text-base-100">{title}</h1>
              <p className="text-base-100 mt-4 mb-16">{subtitle}</p>
            </div>
            <figure className="max-lg:hidden relative w-full max-w-xl aspect-square">
              <Image
                fill
                src={"/images/auth.png"}
                alt="Auth page image"
                className="object-contain"
              />
            </figure>
          </div>
          <div className="max-w-xl w-full mx-auto max-lg:mb-12">{children}</div>
        </main>
      </div>
    </section>
  );
}
