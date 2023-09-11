import {images} from '../../images';
import Navbar from '../header';
import './index.css';
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={images.homeBanner} alt={'home-banner'} />
        </div>
        <div className="home-text">
          <h1 className="primary-heading" data-testid="hometestid">
            Lorem ipsum dolor
          </h1>
          <p className="primary-text">
            {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            ipsam, quod ipsa repellendus voluptatum unde corrupti alias
            provident quasi autem soluta nam facilis quia. Maxime iusto omnis
            ipsam illo adipisci?`}
          </p>
        </div>
        <div className="home-image">
          <img src={images.homeImage} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
