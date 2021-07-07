import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import ButtonUp from '../ButtonUp';
import TextPresentation from '../TextPresentation';
import PainPointsHolder from '../PainPointsHolder';
import LogoHeader from '../logoHeader';
import chart1 from '../../Images/chart1.png';


function Home() {
  return(
    <>
      <HeroSection />
      <ButtonUp />
      <TextPresentation
      title="Your partner in growth"
      mainTitle="Holistic online business solutions"
      text1="Thriving Source is a full service agency located in Vancouver, BC."
      text2="We help our clients grow their business by establishing and expanding their online branding, visibility, presence and reputation."
      src={chart1}
      />
      <PainPointsHolder />
      <Footer />
    </>
  );
}

export default Home;
