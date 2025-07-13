import AboutPartner from "../components/AboutPartner"
import Blogs from "../components/Blogs"
import BrandsSlider from "../components/BrandsSlider"
import ChallengesSection from "../components/ChallengesSection"
import CommonButton from "../components/CommonButton"
import CustomerServices from "../components/CustomerServices"
import FacingChallenges from "../components/FacingChallenges"
import HeroSection from "../components/HeroSection"
import AutoScrollSlider from "../components/ImageCarousel"
import SectionDivider from "../components/SectionDivider"
import StatsCounter from "../components/StatsCounter"
import WhyChooseTabs from "../components/WhyChooseTabs"
import WhyChooseUs from "../components/WhyChooseUs"

const Home = () => {
  return (
    <div>
    <div className="bg-gradient-to-br from-[#f2eefc] to-[#fbeee8]">
    <HeroSection />
    <ChallengesSection/>
    {/* <FacingChallenges /> */}
    <AboutPartner/>
    <WhyChooseUs/>
      <CustomerServices/>
      <WhyChooseTabs/>
      {/* <AutoScrollSlider/>*/}
      <BrandsSlider />
       <SectionDivider title="Blogs" />
      <Blogs/>
    </div>
      <div className="bg-white m-10">
      <StatsCounter />
      </div>
    </div>

  )
}

export default Home