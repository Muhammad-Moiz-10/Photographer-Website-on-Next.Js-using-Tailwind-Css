export default function Contact() {
  return (
    <div className="contact-section">
      <h1>Contact Lorem Photographer</h1>
      <div className="name-div">
        <h5>Name:</h5>
        <input type="text" placeholder="Type Your Name" />
      </div>
      <div className="email-div">
        <h5>Email:</h5>
        <input type="text" placeholder="Type Your Email Address" />
      </div>
      <div className="subject-div">
        <h5>Subject:</h5>
        <input type="text" placeholder="Type Your Subject" />
      </div>
      <div className="message-div">
        <h5>Message:</h5>
        <input type="text" placeholder="Type Your Message" />
      </div>
      <button>Send</button>
    </div>
      
  );
}
