import React, { useState } from 'react'
import { Button } from '../../../../components'
import './style.css'
const Contact = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(!loading)

  }
  return (
    <div id='Contact' className='page-container'>
      <div className='width100'>
        <h1>Contact</h1>
      </div>
      <div className='left'>
<div className='contact-btn'>
        <a href='tel:9122329747'>
          <Button>9122329747</Button>
        </a>
        <a href='maitto::narayan.k.dubey@gmail.com'>
          <Button>narayan.k.dubey@gmail.com</Button>
        </a>
</div>
      </div>
      <div className='right'>
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className='formItem'>
            <label htmlFor='name'>Name</label>
            <input id='name' placeholder='enter your name' />
          </div>
          <div className='formItem'>
            <label htmlFor='email'>Email</label>
            <input type="email" id='email' placeholder='enter your email' />
          </div>
          <div className='formItem'>
            <label htmlFor='feedback'>Feedback</label>
            <textarea id='feedback' cols={3} placeholder="enter your feedback" />
          </div>
          <div>
            <button type='submit' className='button' disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Contact