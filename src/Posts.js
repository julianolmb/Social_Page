import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Image, Col, Row } from 'react-bootstrap'
import Tavern from './tavernkeeper.jpg'
import './App.css';

function Posts(props) {
   return(
       <div>
           <Card className='posts'>
            <Card.Body className='cardbody'>
              <Card.Title className="cardtitle">
                <h4>{props.title}</h4>
              </Card.Title>
              <Container>
                <Row className="cardheader">
                  <Col xs={6} md={4} className="cardavatar">
                    <Image src={Tavern} roundedCircle height="100"/>
                  </Col>
                  <Col xs={6} md={4} className="cardsubtitles">
                  <h6>Posted at: {props.postedat}</h6>
                  <h6>by: {props.postedby}</h6>
                  </Col>
                </Row>
              </Container>
              <Card.Text className='cardtext'>
                <p>{props.content}</p>
                <h1>{props.postimg}</h1>
              </Card.Text>
              <Container>
                <h6 className="cardlikes">0</h6>
                <Button className='btn btn-dark cardbutton'>Like</Button> 
              </Container>
            </Card.Body>
          </Card>
       </div>
   )
}

export default Posts;