import AboutUsSection from '../components/AboutUsSection'
import OurValues from '../components/OurValues'
import SmartMarketingSection from '../components/SmartMarketingSection'

const About = () => {
  return (
    <div className='bg-gradient-to-br from-white to-[#f4f0f9]'>
      <AboutUsSection/>
      <OurValues/>
      <SmartMarketingSection/>
    </div>
  )
}

export default About