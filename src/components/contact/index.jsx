import {useState} from 'react';
import './index.css';
const Contact = () => {
  const [stateEmail, setStateEmail] = useState('');
  return (
    <div className="contact-container">
      <p className="primary-subheading">Contact</p>
      <h1 className="primary-heading" data-testid="contactid">
        reprehenderit voluptatibus omnis incidunt?
      </h1>
      <div className="contact-form-container">
        <input
          value={stateEmail}
          type="text"
          onChange={(e) => setStateEmail(e.target.value)}
          data-testid="input-email"
          placeholder="john.doe@mail.com"
        />
        <button className="contact-button">Submit</button>
      </div>
    </div>
  );
};
export default Contact;
