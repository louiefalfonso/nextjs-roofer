import AboutSection from "@/components/AboutSection";
import ChooseSection from "@/components/ChooseSection";
import MainBanner from "@/components/MainBanner";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceForm from "@/components/ServiceForm";
import ServiceSection from "@/components/ServiceSection";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/TestimonialSection";
import WorkProcessSection from "@/components/WorkProcessSection";

export default function Home() {
  return (
  <>
   <MainBanner/>
   <ServiceForm/>
   <AboutSection/>
   <ServiceSection/>
   <ChooseSection/>
   <WorkProcessSection/>
   <TestimonialSection/>
   <TeamSection/>
   <PortfolioSection/>
  </>
  )
}
