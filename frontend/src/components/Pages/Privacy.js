import '../../App.css';
import SubHeader from '../SubHeader';
import Footer from '../Footer';
import ButtonUp from '../ButtonUp';
import PrivacyHolder from '../PrivacyHolder';
import LogoHeader from '../logoHeader';

function Privacy() {
  return(
    <>
      <LogoHeader />
      <SubHeader title="Privacy " span="Policy" />
      <ButtonUp />
      <PrivacyHolder />
      <Footer />
    </>
  );
}

export default Privacy;
