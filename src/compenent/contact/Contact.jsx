import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aad24e03-32a3-419a-8bf6-266dbcf60683");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Sent us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Corrupti nihil dolor fugit esse asperiores nobis molestiae, 
            explicabo ex amet vero laborum cupiditate. Dolor incidunt
            exercitationem delectus repudiandae ratione dolorum ipsam.</p>
        <ul>
            <li><img src={mail_icon} alt="" />burcejosh19@gmail.com</li>
            <li><img src={phone_icon} alt="" />0966-724-8923</li>
            <li><img src={location_icon} alt="" />Candelaria, Zambales<br/>Sinabacan</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn' style={{backgroundColor: "#212EA0", color: "#fff"}}>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
