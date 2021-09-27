import '../../App.css';
import SubHeader from '../SubHeader';
import Footer from '../Footer';
import ButtonUp from '../ButtonUp';
import ContactInfo from '../ContactInfo';
import ContactMiddlePhone from '../ContactMiddlePhone';
import ContactMiddle from '../ContactMiddle';
import ContactForm from '../ContactForm';
import LogoHeader from '../logoHeader';


function Contact() {
  return(
    <>
      <LogoHeader />
      <SubHeader title="Contact " span="Us" text="For any inqueries, please don't hesitate to ask" />
      <ButtonUp />
      <ContactInfo />
      <ContactMiddlePhone btnText="Call Now"/>
      <ContactMiddle
        text="For any inqueries, please send us an E-mail"
        mail="info@thriving-source.com"
        btnText="Send E-mail"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
