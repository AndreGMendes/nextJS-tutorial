// IMPORTING NEXTJS COMPONENTS
import Hero from "@/components/hero";

// IMPORTING SPECIFIC IMAGES
import performanceImage from "public/performance.jpg";

// IMPORTING SPECIFIC FUNCTIONS
import { getGenericPageName } from "@/utilities/pageFunctions";

export default function PerformancePage() {
  {
    getGenericPageName("Performance Page!");
  }

  return (
    <Hero
      imgData={performanceImage}
      imgAlt="Robot Welding"
      title="We serve high performance Applications"
    />
  );
}
