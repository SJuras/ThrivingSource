import '../../App.css';
import SubHeader from '../SubHeader';
import Footer from '../Footer';
import ButtonUp from '../ButtonUp';
import SitemapBoxes from '../SitemapBoxes';
import ButtonContainer from '../ButtonContainer';
import LogoHeader from '../logoHeader';

function Sitemap() {
  return(
    <>
      <LogoHeader />
      <SubHeader title="Site" span="map" text="Find what you are looking for, easy" />
      <ButtonUp />
      <SitemapBoxes />
      <ButtonContainer
      text="Back to home page:"
      destination="/"
      btnText="Home"
      />
      <Footer />
    </>
  );
}

export default Sitemap;
