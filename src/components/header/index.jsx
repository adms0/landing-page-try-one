import {useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ContactsIcon from '@mui/icons-material/Contacts';
import {images} from '../../images';
import './index.css';
import CreateLoginButton from './CreateLoginButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [stateData, setStateData] = useState([]);
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
        {/* <button className="primary-button">Login</button> */}
        <CreateLoginButton data={stateData} />
      </div>
      <div className="navbar-menu-container">
        <MenuIcon onClick={() => setOpen(true)} />
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <Box
          sx={{width: 250}}
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <List>
            {sideOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
