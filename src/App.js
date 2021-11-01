import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Posts from './Posts'
import Desktop from './desktop.jpg'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { HashRouter as Router, Link } from "react-router-dom";

function App(){
  
    return (
      
      <div className='app'>
        <Router>
          <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand className='brand'>Your Coding Story</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/">View Posts</Link>
                <Link className="nav-link" to="/add">Add Posts</Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Juliano Lombardi</a>
            </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </Router>
        <Container className='display'>
          <Posts 
            title="This is my first post on the Coding Story."
            postedat="14/10/2021 at 23:18"
            postedby="Juliano Lombardi"
            content="Today I'm trying to learn React, it's been difficult, but I can se the potential in it.
            The instructors Colin and Neil from The Developer Academy have been super helpful and patient as usual despite how awful my project is looking.
            Gladly both my colleges Barbora and Gabs posted tutorials on our Slack channel - those tutorials are saving me, in fact everything you see here 
            so far is because of it. Hopefully by friday I'll have something interesting to show. Here's a picture of this exact post."
            postimg={<img src={Desktop} height="300"/>}
          />
          <Posts 
          title="Just another test for the app."
          postedat="15/10/2021 at 00:19"
          postedby="Juliano Lombardi"
          content="It turns out that I managed to slightly understand how the props work. I wouldn't say that I'm capable of completing the exercise for
          this week, but I'm learning and actually having fun."
          postimg=""
          />
          <Posts 
          title="Well maybe it could be promising in the future."
          postedat="15/10/2021 at 00:19"
          postedby="Juliano Lombardi"
          content="So far I can replicate the code and work with individual atributes, next step will be some sort of constructor, then states."
          postimg=""/>
          <Posts 
          title="Another sample of a post."
          postedat="15/10/2021 at 01:53"
          postedby="Juliano Lombardi"
          content="I should probably go to bed, but this is getting interesting. I'm pretty sure tomorrow I'll be feeling tired, well time to bed."
          postimg=""/>
          <Posts />
          <Posts />
        </Container>
      </div>
    );

}
export default App;