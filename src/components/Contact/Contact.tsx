import React from 'react'
import '/src/assets/contact/contact.css'

export default function Contact() {
  return (
<div id="top_div">
        <img id ="hr" src="/src/assets/contact/images/decorator-hr-lg.png" alt="Hr-Ruler"/>
                <div className="card card_l contact_card">
                    <div className="card-body">
                        <h2 className="card-title vh2">Team Yuvaan</h2>
                        <h6 className="card-title vh6">Ashutosh Pandey</h6>
                        <p className="card-subtitle mb-2 text-body-secondary para_v">President</p>
                        <h6 className="card-title vh6">Pari Tiwari</h6>
                        <p className="card-subtitle mb-2 text-body-secondary para_v">General Secratary Cultural</p>
                        <h6 className="card-title vh6">Pulkit Bharti Navya Dhawde</h6>
                        <p className="card-subtitle mb-2 text-body-secondary para_v">Sponsorship Team Heads</p>
                        <h6 className="card-title vh6">Roshan Raj Sunny Malik</h6>
                        <p className="card-subtitle mb-2 text-body-secondary para_v">Media & Publicity Team Heads</p>
                        <iframe
      className="map_frame"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.541484760541!2d91.55941587550606!3d26.081237277152553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5987e09da847%3A0xfc90e6da1b4547c1!2sIndian%20Institute%20of%20Information%20Technology%20Guwahati%20(IIIT)!5e0!3m2!1sen!2sin!4v1699452988264!5m2!1sen!2sin"
      width="420"
      height="200"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
                    </div>
                </div>

                <div className="card card_r contact_card">
                    <div className="card-body">
                    <form action="/" method="post" className="contact_form">
                        <h1 className='vh1'>Reach Out To Us</h1>
                        <div className="contact_group">
                            <label className="contact_label" htmlFor="name"><i className="fa-regular fa-user icon"></i></label>
                            
                            <input  type="text" name="name" id="name" className="contact_input" placeholder="Name" required/>
                        </div>
                        <div className="contact_group">
                            <label className="contact_label" htmlFor="email"><i className="fa-regular fa-envelope icon"></i></label>
                            <input  type="email" name="email" id="email" className="contact_input" placeholder="Email" required/>
                        </div>
                        <div className="contact_group">
                            <label className="contact_label" htmlFor="message"><i className="fa-regular fa-message icon"></i></label>
                          <textarea cols={50} rows={5} name="message" id="message" className="contact_input" placeholder="Message" required></textarea>
                        </div>
                        <div className="contact_group my-3">
                            <input  type="submit" value="Send" className="contact_submit"/>
                        </div>
                    </form>
                    
                </div>
            </div>
            <img id="br" src="/src/assets/contact/images/decorator-br.png" alt="Hr-Ruler"/>

    </div>
  )
}
