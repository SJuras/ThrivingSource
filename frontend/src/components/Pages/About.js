import '../../App.css';
import SubHeader from '../SubHeader';
import Footer from '../Footer';
import ButtonUp from '../ButtonUp';
import TextPresentation from '../TextPresentation';
import TextPresentation2 from '../TextPresentation2';
import LogoHeader from '../logoHeader';
import arrows from '../../Images/arrows.png';
import logo from '../../Images/logoHeader.png';


function About() {
  return(
    <>
      <LogoHeader />
      <SubHeader title="About " span="Us" text="Get to know us" />
      <ButtonUp />
      <TextPresentation
        title="Our Story"
        text1="ThrivingSource was born in 2020 as a result of COVID-19 challenges brought into our every day lives, including our personal ones."
        text2="These challenges created a desire that turned into passion: to help as many businesses as we can. A business as we see it is a community really: a community of employees, customers and leaders. We are here to support yours."
        text3="Our team prides in cross-functional competence. This is what helps us get a clean, holistic perspective of your business as a whole to then be able to determine the most important steps we have to take to get you back on track, or ahead of the game."
        text4="Business is a living process with its own vision and timeline, and so is our support - we are always here to determine your most pressing pain pointsand quick solutions for the same, as well as long term plans and strategies for growth and expansion. In the world of digital, we create genuine human connection."
        src={arrows}
       />
      <TextPresentation2
        title="What We Are About"
        text2="We take pride in making Your business our business - we don't believe in 'one size fits all' approach."
        text3="We believe in clean, collaborative goal-setting, reporting and accountability every step of the way."
        text4="Our team is here to take things off your plate, not add to it."
        text5="We sync what is off sync. Your customers know, even if you think don't. We are here to make their experience smooth, effortless and impressive."
        textAboveButton="We want to see you thrive. That's what we are about. Let's get on it!"
        destination="/contact"
        btnText="contact us"
        src={logo}
       />
      <Footer />
    </>
  );
}

export default About;
