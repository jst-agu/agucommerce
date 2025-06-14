'use client';
import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";


export default function StripeSuccess() {
    const { clearCart } = useShoppingCart();

  useEffect(() => {
  if (typeof window !== "undefined") {
    console.log("Running in browser");
    setTimeout(() => {
      console.log("Clearing cart now");
      clearCart();
    }, 100); // small delay to make sure state is ready
  }
}, []);

  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for you pruchase We hope you enjoy it
          </p>
          <p>Have a great day!</p>

          <Button asChild className="mt-5">
            <Link href="/">GO back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
