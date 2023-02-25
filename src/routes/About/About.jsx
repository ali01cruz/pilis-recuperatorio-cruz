import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import imageUrl1 from './../../assets/Adriana.png';
import imageUrl2 from './../../assets/Emanuel.png';
import imageUrl3 from './../../assets/Esteban.png';
import imageUrl4 from './../../assets/Magali.png';

function About() {
    const personas = [
        {
            id: 0,
            nombre: 'Adriana Ruiz',
            img: imageUrl1
        },
        {
            id: 1,
            nombre: 'Esteban Rueda',
            img: imageUrl3
        },
        {
            id: 2,
            nombre: 'Magali Aliaga',
            img: imageUrl4
        },
        {
            id: 3,
            nombre: 'Emanuel Cruz',
            img: imageUrl2
        }

    ]
    return (
        <div>
            <Link className='ms-3 fs-3 text-white' to="/">Back</Link>
            <Row xs={1} md={4} className="d-flex justify-content-around text-center ml-5 p-5 g-4">
                {personas.map(persona => (
                    <Col>
                        <Card key={persona.id} className='align-item-center w-75 h-100'>
                            <Card.Img as={Image} className='img-fluid' src={persona.img} alt='...' />
                            <Card.Body>
                                <Card.Title className='text-dark'>Colaborator</Card.Title>
                                <Card.Text className='text-dark'>
                                    {persona.nombre}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))};
            </Row>
        </div>
    );
}

export default About;