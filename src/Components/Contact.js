import React from 'react'

const Contact = () => {
  return (
   
       
        <div className='Container'>
    
        <p>Fell free to message me </p>
        <div className='contact-box'>
          <div className='contact-left'>
           <h3>Contact Me</h3>
           <form>
            <div className='input-row'>
              <div className='input-group'>
                <label>Name</label>
                <input type="text" ></input>
              </div>
              <div className='input-group'>
                <label>Phone</label>
                <input type="text" ></input>
              </div>
              <div className='input-group'>
                <label>Email</label>
                <input type="text" ></input>
              </div>
            
             <textarea rows="5" placeholder='Enter your message'></textarea>
             <button type="submit">SEND</button>
            </div>
           </form>
          </div>
          <div className='contact-right'>
            <h3>Reach us</h3>
            <i class="fa-solid fa-phone"></i>
             <span>0308-7133907</span>
             <i class="fas fa-envelope"></i> 
             <span>tayyab2468@gmail</span>
             <i class="fa-brands fa-github"></i>
             <span>tayyab2468</span>
          </div>
        </div>
        </div>
        
    
  
  )
}

export default Contact