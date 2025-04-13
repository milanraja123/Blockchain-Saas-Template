import FeatureGrid from "@/sections/FeatureGrid";
import HeroSection from "@/components/HeroSection";
import FeaturesCardsSection from "@/sections/FeatureCardsSection";
import LatestPost from "@/sections/LatestPost";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesCardsSection />
      <FeatureGrid />
      <LatestPost />
    </>
  );
}
