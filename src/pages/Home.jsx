import AboutPartner from "../components/AboutPartner"
import Blogs from "../components/Blogs"
import BrandsSlider from "../components/BrandsSlider"
import CommonButton from "../components/CommonButton"
import CustomerServices from "../components/CustomerServices"
import FacingChallenges from "../components/FacingChallenges"
import HeroSection from "../components/HeroSection"
import SectionDivider from "../components/SectionDivider"
import StatsCounter from "../components/StatsCounter"
import WhyChooseTabs from "../components/WhyChooseTabs"
import WhyChooseUs from "../components/WhyChooseUs"

const Home = () => {
  return (
    <div>
    <div className="bg-gradient-to-br from-[#f2eefc] to-[#fbeee8]">
    <HeroSection />
    <FacingChallenges />
    <AboutPartner/>
    <WhyChooseUs/>
      <CustomerServices/>
      <WhyChooseTabs/>
      <BrandsSlider />
       <SectionDivider />
      <Blogs/>
    </div>
      <div className="bg-white m-10">
      <StatsCounter />
      </div>
    </div>

  )
}

export default Home