import './index.css'
// import React from 'react'

function App() {


  return (

    <div>
      <h1>Contact Us</h1>
      <form action="" method="get">
        <div>
          <label htmlFor="">First Name <span>*</span></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">  Name <span>*</span></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email Address <span>*</span></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Query Type <span>*</span></label>
          <input type="radio" />
          <input type="radio" />
        </div>
        <div>
          <label htmlFor="">Message <span>*</span></label>
          <textarea name="" id=""></textarea>
        </div>
        <div id='checkbox'>
          <input type="check-box" />
          <p>I consent to being contacted by the team <span>*</span></p>
        </div>


        
        
       
        

        <button>Submit</button>

      </form>



    </div>
      // 

      //
      // This field is required
    
      //
      // This field is required
    
      // Email Address
      // Please enter a valid email address
      // This field is required
    
      // 
      // General Enquiry
      // Support Request
      // Please select a query type
    
      // Message
      // This field is required
    
      // I consent to being contacted by the team
      // To submit this form, please consent to being contacted
    
      // Submit
    
      // Message Sent!
      // Thanks for completing the form. We'll be in touch soon!
      
  
  )
}

export default App
