import './index.css';
const Contact = () => {
  return (
    <div className="contact-container">
      <p className="primary-subheading">Contact</p>
      <h1 className="primary-heading">
        reprehenderit voluptatibus omnis incidunt?
      </h1>
      <div className="contact-form-container">
        <input type="email" placeholder="john.doe@mail.com" />
        <button className="contact-button">Submit</button>
      </div>
    </div>
  );
};
export default Contact;
