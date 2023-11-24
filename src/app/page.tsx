"use client"; // This makes the console display in the Browser, otherwise it will be shown only on the server (VSCODE Console)

// IMPORTING NEXTJS COMPONENTS
import Hero from "@/components/hero";

// IMPORTING SPECIFIC IMAGES
import homeImage from "public/home.jpg";

// IMPORTING SPECIFIC FUNCTIONS
import { getGenericPageName } from "@/utilities/pageFunctions";

export default function Home() {
  getGenericPageName("Home Page!");

  return (
    <Hero
      imgData={homeImage}
      imgAlt="Car Factory"
      title="Professional Cloud Hosting"
    />
  );
}
