import React, { useState } from 'react';
import '../App.css';
import './ContactForm.css';
import axios from 'axios';



function ContactForm(){
  const [sent, setSent] = useState(false);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  const handleSend = async() => {
    setSent(true)
    try {
      await axios.post("http://localhost:4000/send_mail", {
        text1,
        text2,
        senderEmail
      })
    } catch (error){
      console.log(error);
    }
  }

  return(
    <section class="contact-section">
      <div className="row row-2">
      <div className="contact-container">
        <form onSubmit={handleSend}>
        <div className="contactform-half">
          <p className="mb-24">1. What is your biggest business concern/challenge at the moment?</p>
          <textarea rows="10" name="concern" placeholder="Write here" value={text1} onChange={(e) => setText1(e.target.value)}></textarea>
          <p className="mb-24">2. What are your areas of interest?</p>
          <div className="checkmark-box">
            <label for="websiteDevelopment" className="short">Website development / improvement / maintenance</label>
            <input type="checkbox" id="websiteDevelopment" />
          </div>
          <div className="checkmark-box">
            <label for="brandingRebranding" className="short">Branding / Re-branding</label>
            <input type="checkbox" id="brandingRebranding" />
          </div>
          <div className="checkmark-box">
            <label for="digitalMarketing" className="short">Digital marketing strategy</label>
            <input type="checkbox" id="digitalMarketing" />
          </div>
          <div className="checkmark-box">
            <label for="socialMediaManagement" className="short">Social media management</label>
            <input type="checkbox" id="socialMediaManagement" />
          </div>
          <p>Other</p>
          <textarea rows="10" name="elaborate" placeholder="Please elaborate" value={text2} onChange={(e) => setText2(e.target.value)}></textarea>
        </div>
        <div className="contactform-half">
          <p className="mb-24">3. How are you currently driving most of your traffic?</p>
          <div className="checkmark-box">
            <label for="includeUppercase" className="short">SEO</label>
            <input type="checkbox" id="seo" />
          </div>
          <div className="checkmark-box">
            <label for="socialMedia" className="short">Social media</label>
            <input type="checkbox" id="socialMedia" />
          </div>
          <div className="checkmark-box">
            <label for="adsCampaigns" className="short">Paid ads / campaigns</label>
            <input type="checkbox" id="adsCampaigns" />
          </div>
          <div className="checkmark-box">
            <label for="notSure" className="short">Not sure</label>
            <input type="checkbox" id="notSure" />
          </div>
          <p className="mb-24">4. Your contact E-mail address</p>
          <input type="email" name="email" placeholder="Your E-mail" required value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)}/>
          <p>Thank you for your time! We will get back to you within 1 business day.</p>
          <p>Best Regards,</p>
          <p className="mb-12">- ThrivingSource Team</p>
          <button type="submit" class="btn btn-blue">Send Inquery</button>
        </div>
        </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm
