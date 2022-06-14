import React,{useState} from 'react'
import './Contact.css'
import {Container,Row} from 'react-bootstrap'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
function Contact() {
    const [done ,setDone]=useState(false)
    const email =<svg xmlns="http://www.w3.org/2000/svg"
     width="30"
      height="30"
       fill="red"
        class="bi bi-envelope"
         viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
  </svg> ;

  const phone =<svg xmlns="http://www.w3.org/2000/svg" 
  width="30"
   height="30"
    fill="green"
     class="bi bi-phone" 
     viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> ;

const home =<svg xmlns="http://www.w3.org/2000/svg"
 width="30"
  height="30"
   fill="yellow"
    class="bi bi-house" 
    viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
<path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg> ;

  return (
    <div id='scroll11'>
<Container>
    <Row className='mt-5'>
    <h1
        style={{fontWeight:"900",color:"orangered"}}
        >
            Contact Us
        </h1>
    </Row>
    <Row className='text-center mt-5'>
    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7212.617504200288!2d84.80280099624407!3d25.32741850893124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d4fba2c344831%3A0xaa772e27fa8f6371!2sMuskan%20Genral%20Store%20Panitanki%20Roaf!5e0!3m2!1sen!2sin!4v1655116606799!5m2!1sen!2sin"
     width="600" 
     height="450"
      style={{border:0}} 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">

      </iframe> */}
    </Row>
</Container>
{/* contact form */}
<Container>
            
            <div className='row mt-5'>
                <div className='col-md-6 col-sm-12 '>

                    <div className='row contactCenter'>
                        <h1 style={{color:"white"}}
                    >Contact With Us
                    </h1></div>
                   
                    <div className='row mt-5 contactCenter'><p>{phone}<b style={{marginLeft:"10px"}}></b>9711773333</p></div>
                    <div className='row pt-3 contactCenter'><p>{email}<b style={{marginLeft:"10px"}}>rahul345@gmail.com</b></p></div>
                    <div className='row pt-3 contactCenter'><p>{home}<b style={{marginLeft:"10px"}}>Paliganj,Panitanki road,Chandhaus, India
                        
                       
                        </b></p></div>

                </div>
                <div className='col-md-6 col-sm-12 contactMargin'>
                    <div className='row contactCenter topMt'>
                        <p>
                            <b>Whats your story ?</b>
                          <p style={{opacity:"0.5",fontWeight:"200",fontSize:"large"}}> If you want to know more about products then contact us
                           </p>
                        </p>


                    </div>
                    <div className='row'>
                    {/* <form> */}
  <div className="mb-5">
    <input  type="text" name="user_name" className="form-control borderChange" id="exampleInputName"  placeholder='Name' />
  </div>

  <div className="mb-5">
    <input  type="email"  name="user_email" className="form-control borderChange" id="exampleInputEmail1"  placeholder='Email' />
  </div>

  <div className="mb-3">
  <textarea className="form-control borderChange"  name="message" id="exampleFormControlTextarea1" rows="10" />
</div>
 
  
  <button type="submit"  class="btn btn-success px-5">Submit</button> {done && "Thank You"}
{/* </form> */}
                    </div>
                </div>
            </div>
        </Container>

    </div>
  )
}

export default Contact