import Navbar from "@/components/shared/navbar/Navbar";
import HeroSection from "@/components/ui/HeroSection";
import NewsBlogSection from "@/components/ui/NewsBlogSection";
import Footer from "@/components/ui/Footer";
export default function Home() {
  return (
    <main className=" relative min-h-screen overflow-y-auto overflow-x-hidden bg-white max-w-[95rem] mx-auto">
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* News and Blog */}
      <NewsBlogSection />
      {/* Footer */}
      <Footer />
    </main>
  );
}
