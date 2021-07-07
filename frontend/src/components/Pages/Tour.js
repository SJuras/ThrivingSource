import '../../App.css';
import SubHeader from '../SubHeader';
import Footer from '../Footer';
import ButtonUp from '../ButtonUp';
import MiddleTextSection from '../MiddleTextSection';
import TimeLine from '../TimeLine';
import ServicesHolder from '../ServicesHolder';
import TextPresentation2 from '../TextPresentation2';
import LogoHeader from '../logoHeader';
import togetherPic from '../../Images/together.png';
import themesPic from '../../Images/themes.png';

function Tour() {
  return(
    <>
      <LogoHeader />
      <SubHeader title="Take a " span="Tour" text="Let's get to know eachother" />
      <ButtonUp />
      <TextPresentation2
      title="Welcome to Thriving Source"
      text1="Our team runs on cross-functional competence. Our key solutions are based on understanding the ins-and-outs of your business and your customers' experience to be able to meet or exceed the expectations set on both ends."
      text2="We run on diligent research, inovative thinking collaborative mindset, creative solution-finding and coffee."
      text3="Our team holds years of experience in customer support management, web development, design, maintenance and operations management across multiple industries including: travel, tourism and hospitality, online retail and health related services."
      textAboveButton="Learn more about us:"
      destination="/about"
      btnText="About Us"
      src={togetherPic}
      />
      <MiddleTextSection title="How it works" text="Our process consists of 6 steps:" />
      <TimeLine />
      <MiddleTextSection title="How can we help" text="We do it by providing services fit-to-suit your business needs" />
      <ServicesHolder />
      <TextPresentation2
      title="Our Products"
      text1="We offer premuim themes for your website."
      textAboveButton="Themes we offer:"
      destination="/products"
      btnText="Products"
      src={themesPic}
      />
      <Footer />
    </>
  );
}

export default Tour;
