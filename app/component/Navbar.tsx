'use client';
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";

const Links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="mb-8 border-b">
      <div className="flex justify-between items-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        {/* Logo */}
        <Link href="/">
          <h1 className="font-bold text-2xl md:text-4xl">
            <span>👨‍💻</span> Agu<span className="text-primary">Commerce</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {Links.map((link, idx) => (
            <div key={idx}>
              <Link
                href={link.href}
                className={`text-lg font-semibold transition duration-100 ${
                  pathname === link.href ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Cart + Menu for Mobile */}
        <div className="flex items-center gap-4">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="h-12 w-12 sm:h-20 md:h-24 md:w-24 rounded-none flex flex-col gap-y-1.5"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden px-4 pb-4 space-y-2">
          {Links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-lg font-medium ${
                pathname === link.href ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
