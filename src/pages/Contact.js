import '../styles/App.css';
import emailjs from 'emailjs-com';

function Contact(props) {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_kxj0qkb', 'template_l9ooiew', e.target, 'pwUuMdKWplF7nf22Y')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }
    
    
      return (
        <div className="ContactForm">
        
        <h1>Email Form</h1>
        
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Subject</label>
          <input type="text" name="subject" value={(props.hasOwnProperty('subject')) ? props.name : "" } />
          <label>Message</label>
          <textarea name="html_message" value={(props.hasOwnProperty('name')) ? props.name : "" } />
          <input type="submit" value="Send" />
    
        </form>
    
      
        </div>
      );
}

export default Contact;