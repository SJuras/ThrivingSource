import '../../App.css';
import SubHeader from '../SubHeader';
import Footer from '../Footer';
import ButtonUp from '../ButtonUp';
import TermsHolder from '../TermsHolder';
import LogoHeader from '../logoHeader';

function Terms() {
  return(
    <>
      <LogoHeader />
      <SubHeader title="Terms of " span="Service" />
      <ButtonUp />
      <TermsHolder />
      <Footer />
    </>
  );
}

export default Terms;
