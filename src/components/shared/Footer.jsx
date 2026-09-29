import Link from "next/link";

export default function FooterComponent() {
  const links = [
    { path: "privacy-policy", title: "Privacy Policy" },
    { path: "terms-of-service", title: "Terms of Service" },
    { path: "cookie-policy", title: "Cookies Settings" },
  ];
  return (
    <footer className="base-container pt-16">
      <div className="flex justify-between w-full mt-16 py-8 border-t border-t-shuttle-gray-200">
        <p className="">&copy; 2026 ByteSpace. All rights reserved.</p>
        <nav className="flex gap-4">
          {links.map((l, i) => (
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
