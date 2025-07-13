import AboutUsSection from '../components/AboutUsSection'
import BrandsSlider from '../components/BrandsSlider'
import OurValues from '../components/OurValues'
import SmartMarketingSection from '../components/SmartMarketingSection'

const About = () => {
  return (
    <div className='bg-gradient-to-br from-white to-[#f4f0f9]'>
      <AboutUsSection/>
      <OurValues/>
      <SmartMarketingSection/>
      <BrandsSlider />
    </div>
  )
}

export default About