// components/Footer.tsx
import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Footer() {
  return (
    <footer className="border-t mt-16 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo or Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">
              👨‍💻 Agu<span className="text-primary">Commerce</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              © {new Date().getFullYear()} AguCommerce. All rights reserved.
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-primary md:text-xl font-normal transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
