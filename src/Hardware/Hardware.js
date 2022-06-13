import React from 'react'
import './Hardware.css'
import {Row,Container} from 'react-bootstrap'
import { hard } from './Hardwaredata'

function Hardware() {
  return (
    <div>
         <Row className='mt-5'>
        <h1
        style={{fontWeight:"900",color:"orangered"}}
        >
            Hardware Product
        </h1>
    </Row>
    <div
        style={{backgroundColor:"#00ff00"}}
        >
<Container className='mt-5 py-5'>
   
    <Row className='justify-content-around'>
        {
            hard.map((item,index)=>(
                <div className='col-lg-3 col-md-4 col-sm-5' key={index}>
    <div className='row text-center'>
    <img src={item.src} alt="" className='img-fluid hwfix'/>
    </div>
<div className='row text-center mt-2'>
     <h4
     style={{fontWeight:"600",color:"white"}}
     >
    {item.brandName}
     </h4>
    </div>
</div>
            ))
        }

    </Row>
</Container>
</div>
    </div>
  )
}

export default Hardware