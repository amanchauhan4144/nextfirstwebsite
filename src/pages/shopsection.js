// pages/shopping.js
import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const plants = [
  {
    id: 1,
    name: 'Fiddle Leaf Fig',
    description: 'A beautiful and popular indoor plant.',
    price: '$45',
    img: '/pot1.jpg'
  },
  {
    id: 2,
    name: 'Monstera Deliciosa',
    description: 'A tropical plant with unique split leaves.',
    price: '$60',
    img: '/pot2.jpg'
  },
  {
    id: 3,
    name: 'Snake Plant',
    description: 'A hardy plant perfect for any indoor space.',
    price: '$35',
    img: '/pot3.jpg'
  },
  // Add more plant items as needed
];

export default function Shopping() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Plant Shop</h1>
      <Row>
        {plants.map((plant) => (
          <Col sm="12" md="6" lg="4" key={plant.id} className="mb-4">
            <Card className="h-100 shadow-sm border-0 rounded">
              <CardImg top width="100%" src={plant.img} alt={plant.name} className="img-fluid rounded-top" style={{ height: '250px', objectFit: 'cover' }} />
              <CardBody className="d-flex flex-column">
                <CardTitle tag="h5" className="text-primary">{plant.name}</CardTitle>
                <CardText className="text-muted mb-4">{plant.description}</CardText>
                <CardText className="font-weight-bold text-success mb-4">{plant.price}</CardText>
                <Button color="success" className="mt-auto">Add to Cart</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
