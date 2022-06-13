import React from 'react'
import './Header.css'
import {Container,Row} from 'react-bootstrap'
import owner from '../Images/owner.png'
 
 import {Link} from 'react-scroll'

function Header() {
  return (
    <div>
        <Container>
            <Row className='justify-content-around' id='cenDo'
            style={{height:"90vh"}}
            >
                <div className='col-md-5'>
                 <div className='row text-center'>
                 <h3
                 style={{color:"orangered"}}
                 >
                     MR. Naresh Kumar
                 </h3>
                 </div>
                 <div className='row text-center mt-2'>
                     <h5
                     style={{color:"orangered"}}
                     >
                     Wholesaler & Retail of Maharani Electric & Hardware
                     </h5>
                 
                 </div>
                 <div className='row text-center mt-4'>
                 <Link to='scroll11' className='btn py-2'
                 style={{border:'1px solid blue',color:"white",width:"250px",margin:"0 auto"}}
                 >
                     Contact Us
                 </Link>
                 </div>
                </div>
                <div className='col-md-5 pos' id="pos1">
                 <div id='pentagon'>
                     <img src={owner} alt="owner" className='img-fluid tops'/>
                 </div>
               </div>
            </Row>
        </Container>
    </div>
  )
}

export default Header