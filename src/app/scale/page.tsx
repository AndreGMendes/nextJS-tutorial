// IMPORTING NEXTJS COMPONENTS
import Hero from "@/components/hero";

// IMPORTING SPECIFIC IMAGES
import scaleImage from "public/scale.jpg";

export default function ScalePage() {
  const pageName = "Scale Page!";
  console.log(pageName);

  return (
    <Hero
      imgData={scaleImage}
      imgAlt="Steel Factory"
      title="Scale your Application to infinity"
    />
  );
}
