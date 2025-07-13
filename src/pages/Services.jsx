import { FaHeadset } from 'react-icons/fa';
import ConsultationCTA from '../components/ConsultationCTA'
import ServiceHighlight from '../components/ServiceHighlight'
import StrategyCommitment from '../components/StrategyCommitment'
import SectionDivider from '../components/SectionDivider';
import StatsCounter from '../components/StatsCounter';
import ServicesSection from '../components/ServicesSection';
import BrandsSlider from '../components/BrandsSlider';

const services = [
  "Sales Support",
  "Customer Support",
  "Social Media Marketing",
  "Web Development",
  "PPC Advertising",
  "SEO Optimization",
];

const Services = () => {
  return (
    <div>
      <ServiceHighlight/>
      <ServicesSection/>
      <StrategyCommitment/>
      <SectionDivider />
        <div className="bg-white m-10">
      <StatsCounter />
      </div>
      <BrandsSlider />
      <ConsultationCTA/>
    </div>
  )
}

export default Services