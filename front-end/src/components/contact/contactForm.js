import React from 'react'
import './contact.css'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="wrapper">
      <form onSubmit={onSubmit}>
        <div className="Form">
         <div class="pageTitle title">send me an email! </div>
         <div class="secondaryTitle title">Please fill this form to send me an email</div>
          <input className="form-control" type="text" id="name" placeholder="Name" required />
          <input className="form-control" type="email" id="email" placeholder="Email" required />
          <textarea className="form-control" id="message" placeholder="Message"  required />
        <button className="btn submit " type="submit">
          {formStatus}
        </button>
        </div>
      </form>
    </div>
  )
}
export default ContactForm