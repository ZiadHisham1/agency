import Image from "next/image";
import Navbar  from "@/components/sections/navBar";
import  Hero  from "@/components/sections/hero";
import  WorldMap  from "@/components/sections/worldMap";
import  StatsSection  from "@/components/sections/stats";
import  PlansSection from "@/components/sections/planSection";
import  VideoSection  from "@/components/sections/videoSection";
import TeamSection from "@/components/sections/teamSection";
import WorksSection from "@/components/sections/workSection";
import TestimonialSection from "@/components/sections/testimonialSection";
import Footer from "@/components/sections/footer";

import { getStats,
  getHeroSlides,
  getVideo,
  getTeam,
  getWorks,
  getTestimonials, 
  getAbout,
  getFaqs
} from "@/lib/queries";
import AboutSection from "@/components/sections/about";
import FaqSection from "@/components/sections/FAQ";

export const revalidate = 60;

export default async function Home() {
const [heroSlides, stats, video, team, works, testimonials, about, faqs] = await Promise.all([
    getHeroSlides(),
    getStats(),
    getVideo(),
    getTeam(),
    getWorks(),
    getTestimonials(),
    getAbout(),
    getFaqs() 
  ]);

  return (
    <>
      <Navbar />
      <Hero slides={heroSlides} />
      <WorldMap />
      <StatsSection stats={stats} />
      <VideoSection video={video} />
      <TeamSection team={team} />
      <WorksSection works={works} />
      <TestimonialSection testimonials={testimonials} />
      <PlansSection />
      <AboutSection about={about} />
      <FaqSection faqs={faqs} />
      <Footer />
    </>
  );
}

