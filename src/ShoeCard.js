import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function ShoeCard() {
  return (
    <Card style={{width: '9.4rem', backgroundColor: '#EFD6AC', marginTop: '1.5em', outlineStyle: 'solid' }}>
        <Card.Body>
            <Card.Img variant="top" src="https://via.placeholder.com/150"/>
            <Card.Title>Jordan AirForce Ones</Card.Title>
            <Card.Text>
                
            </Card.Text>
            <Button variant="primary">Forums</Button>
        </Card.Body>
    </Card>
  )
}

export default ShoeCard