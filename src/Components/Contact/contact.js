import React from 'react'
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import './contact.css';


const Contact = () => {

  //hooks
  // const [open, setOpen] = React.useState(false);
  // const form = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
  //     .then((result) => {
  //       setOpen(true);
  //       form.current.reset();
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // }



  return (
    <section id="contact">

      <div className='ContactWrapper'>
        <div className='ContactTitle'>Contact Me</div>
        <div className='ContactDesc'>Feel free to reach out to me for any questions or opportunities!</div>
        <form className="ContactForm"  >
          <div className="ContactBoxTitle">Email Me 🚀</div>
          <input className="ContactInput" placeholder="Your Email" name="from_email" />
          <input className="ContactInput" placeholder="Your Name" name="from_name" />
          <input className="ContactInput" placeholder="Subject" name="subject" />
          <textarea className="ContactInputMessage" placeholder="Message" rows="4" name="message" />
          <button className="ContactMeButton" type="submit" value="Send" />
        </form>
        {/* <Snackbar
          // open={open}
          autoHideDuration={6000}
          // onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        /> */}
      </div>
    </section>
  )
}

export default Contact