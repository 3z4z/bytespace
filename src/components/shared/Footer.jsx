import Link from "next/link";
import BrandLogo from "../ui/BrandLogo";
import InputGroup from "../ui/InputGroup";

export default function FooterComponent() {
  const privacyLinks = [
    { path: "privacy-policy", title: "Privacy Policy" },
    { path: "terms-of-service", title: "Terms of Service" },
    { path: "cookie-policy", title: "Cookies Settings" },
  ];
  const importantLinks = [
    { title: "Featured Courses", path: "featured-courses" },
    { title: "Featured Categories", path: "featured-categories" },
    { title: "Business", path: "business" },
    { title: "IT", path: "it" },
    { title: "Design", path: "design" },
    { title: "Development", path: "development" },
    { title: "Marketing", path: "marketing" },
    { title: "Photography", path: "photography" },
    { title: "Finance", path: "finance" },
    { title: "Sport", path: "sport" },
    { title: "Become a Creator", path: "become-a-creator" },
    { title: "Affiliate Program", path: "affiliate-program" },
    { title: "Contact", path: "contact" },
    { title: "Help", path: "help" },
    { title: "About", path: "about" },
  ];
  return (
    <footer className="base-container pt-16">
      <div className="grid lg:grid-cols-7 lg:gap-28 gap-16 mt-4">
        <div className="lg:col-span-3">
          <div className="mb-10">
            <BrandLogo textColor={"text-base-content"} motion={false} />
            <p className="mt-4">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
          </div>
          <InputGroup
            buttonTitle="Subscribe"
            placeholderText="Enter your email"
          />
        </div>
        <div className="lg:col-span-4 grid sm:grid-flow-col sm:grid-rows-5 max-sm:grid-cols-2 gap-6">
          {importantLinks.map((l, i) => (
            <Link
              key={i}
              href={l.path}
              className="text-shuttle-gray-700 transition-colors duration-150 hover:text-secondary hover:underline"
            >
              {l.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex md:justify-between max-md:flex-col max-md:items-center gap-6 justify-center w-full mt-16 py-8 border-t border-t-shuttle-gray-200">
        <p className="max-md:order-2">
          &copy; 2026 ByteSpace. All rights reserved.
        </p>
        <nav className="flex gap-4">
          {privacyLinks.map((l, i) => (
            <Link
              href={l.path}
              key={i}
              className="hover:text-secondary transition-colors duration-150 hover:underline"
            >
              {l.title}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
