import React from 'react'
import './Electrics.css'
import {Container,Row} from 'react-bootstrap'
import {electric} from './electricDta'

function Electrics() {
  return (
    <div>
 <Row className='mt-5'>
        <h1
        style={{fontWeight:"900",color:"orangered"}}
        >
            Electric Product
        </h1>
    </Row>
        <div
        style={{backgroundColor:"#00ff00"}}
        >
<Container className='mt-5 py-5'>
   
    <Row className='justify-content-around'>
        {
            electric.map((item,index)=>(
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

export default Electrics