// import Image from "next/image";
// import styles from "./page.module.css";

import Hero from "./component/Hero";
import Newest from "./component/Newest";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
    </div>
  );
}
