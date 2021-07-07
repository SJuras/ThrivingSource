import '../../App.css';
import SubHeader from '../SubHeader';
import Footer from '../Footer';
import ButtonUp from '../ButtonUp';
import LogoHeader from '../logoHeader';
import TextPresentation from '../TextPresentation';
import ButtonContainer from '../ButtonContainer';
import comingSoon from '../../Images/comingSoon.png';
import themesShowcase from '../../Images/themesShowcase.png';

function Products() {
  return(
    <>
      <LogoHeader />
      <SubHeader title="Our " span="Products" text="What can we make for You" />
      <ButtonUp />
      <TextPresentation
        title="Premium Website Themes"
        mainTitle="Give Your website a unique flare"
        text1="All themes are responsive and optimized for viewing on mobile devices, tablets, laptop and desktop computers."
        text2="Premium themes include: basic presentation for your online business with e-mail contact form functionality."
        text3="Logo, images, text and color schemes are yours to choose."
        text4=""
        src={themesShowcase}
      />
      <TextPresentation
        title="Gallery Coming Soon"
        text1="We are currently working on optimizing our themes to give you best possible product."
        text2="Stay tuned to our social media, we will notify you when our themes are done."
        src={comingSoon}
      />
      <ButtonContainer
        text="For more information please contact us:"
        destination="/contact"
        btnText="Contact Us"
      />
      <Footer />
    </>
  );
}

export default Products;
