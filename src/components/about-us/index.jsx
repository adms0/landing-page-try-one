import {images} from '../../images';
import './index.css';
const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-background-image-container">
        <img src={images.aboutUsImage} alt="about-us" />
      </div>
      <div className="about-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Rem eos quos laboriosam quidem</h1>
        <p className="primary-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          nesciunt quod tempora totam labore delectus enim, velit est mollitia
          provident, reprehenderit molestiae eaque debitis ut animi. Tenetur aut
          officia soluta.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
