// IMPORTING NEXTJS COMPONENTS
import Hero from "@/components/hero";

// IMPORTING SPECIFIC IMAGES
import reliabilityImage from "public/reliability.jpg";

export default function ReliabilityPage() {
  const getPageName = (): string => {
    const pageName = "Reliability Page!";
    console.log(pageName);
    return pageName;
  };

  getPageName();

  return (
    <Hero
      imgData={reliabilityImage}
      imgAlt="Human Welding"
      title="Super high reliability Hosting"
    />
  );
}
