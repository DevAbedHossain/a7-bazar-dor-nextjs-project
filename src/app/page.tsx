import AllProducts from "./components/homePage/AllProducts";
import HeroSection from "./components/homePage/HeroSection";
import PriceDownSection from "./components/homePage/PriceDownSection";
import PriceUpSection from "./components/homePage/PriceUpSection";


export default function Home() {
  return (
    <div className="py-10">
      <HeroSection />
      <PriceUpSection />
      <PriceDownSection />
      <AllProducts />
    </div>
  );
}
