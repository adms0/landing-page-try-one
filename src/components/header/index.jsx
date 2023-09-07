import {useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ContactsIcon from '@mui/icons-material/Contacts';
import {images} from '../../images';
import './index.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const sideOptions = [
    {
      text: 'Home',
      icon: <HomeIcon />,
    },
    {
      text: 'About',
      icon: <InfoIcon />,
    },
    {
      text: 'Price',
      icon: <LocalOfferIcon />,
    },
    {
      text: 'Contacts',
      icon: <ContactsIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={images.logo} alt="logo-png" />
      </div>
      <div className="navbar-unorderlist-container">
        <a href="#about-us">About</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact-us">Contact Us</a>
        <button className="primary-button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
