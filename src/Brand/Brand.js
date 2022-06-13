import React from 'react'
import './Brand.css'
import {Container,Row} from 'react-bootstrap'
import { useTypewriter} from 'react-simple-typewriter'


function Brand() {
    const {text} = useTypewriter({
        words: ['POLYCAB', 'MALHOTRA', 'HAVELLS', 'V-GUARD WIRES','TRIVO','PHILIPS'],
        loop:'0',
        
        cursorStyle:'|',
        typeSpeed:50,
        deleteSpeed:80,
        delaySpeed:3000
      })
  return (
    <div>
<Container id="scroll1">
    <Row className='text-start'>
        <h1
        style={{color:"white",fontWeight:"800"}}
        >
            BRANDS{' '}<span 
            style={{ color: 'orangered', fontWeight: 'bold' }}
            >
                {text}
            </span>
        </h1>
        
    </Row>
</Container>

    </div>
  )
}

export default Brand