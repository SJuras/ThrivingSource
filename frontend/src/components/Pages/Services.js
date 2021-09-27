import '../../App.css';
import SubHeader from '../SubHeader';
import Footer from '../Footer';
import ButtonUp from '../ButtonUp';
import ServicesPresentation from '../ServicesPresentation';
import ServicesPresentation2 from '../ServicesPresentation2';
import ServicesPresentation3 from '../ServicesPresentation3';
import ServicesPresentation4 from '../ServicesPresentation4';
import ServicesPresentation5 from '../ServicesPresentation5';
import ButtonContainer from '../ButtonContainer';
import LogoHeader from '../logoHeader';

function Services() {
  return(
    <>
      <LogoHeader />
      <SubHeader title="Our " span="Services" text="How can we help You" />
      <ButtonUp />
      <ServicesPresentation
        mainTitle="Your Website"
        text1="Your website is the foundation of your online business"
        text2="Optimized for viewing on smartphones, tablets, laptops and desktops"
        text3="All traffic is driven to land here"
       />
       <ServicesPresentation2
       mainTitle="SEO"
       text1="Search Engine Optimization"
       text2="Make clients find YOU"
       text3="Optimizing your website to rank higher on search engines"
       text4="Drive more traffic to your website"
       />
       <ServicesPresentation3
       mainTitle="Content Marketing"
       text1="Content creation that drives brand awareness, business awareness, traffic and customer growth"
       text2="Your brand should tell a story"
       text3="Present your story to your potential customer base"
       />
       <ServicesPresentation4
       mainTitle="Social Media Marketing"
       text1="An application of content marketing to social media platforms to increase brand awareness, traffic and growth"
       text2=""
       />
       <ServicesPresentation5
       mainTitle="Paid Ads and Campaigns"
       text1="Use the benefits of targeted marketing to reach the right people"
       text2="Short-term, fastest way to increase website traffic and business awareness"
       text3="Works best when stacked with deals and discounts for customers"
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

export default Services;
