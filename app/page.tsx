import AboutSection from "@/components/AboutSection";
import ChooseSection from "@/components/ChooseSection";
import MainBanner from "@/components/MainBanner";
import ServiceForm from "@/components/ServiceForm";
import ServiceSection from "@/components/ServiceSection";
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
  </>
  )
}
