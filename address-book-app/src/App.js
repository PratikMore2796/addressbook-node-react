// Import React
import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Switch,
    Route, Link } from "react-router-dom";
  
// Import other React Component
import CreateStudent from 
    "./Components/create-contact.component";
import EditStudent from 
    "./Components/edit-contact.component";
import StudentList from 
    "./Components/contact-list.component";
import CreateContact from "./Components/create-contact.component";
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand>
              <Link to={"/create-contact"} 
                className="nav-link">
                React and Node Address Book
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-contact"} 
                  className="nav-link">
                  Create Contact
                </Link>
              </Nav>

              <Nav>
                <Link to={"/contact-list"} 
                  className="nav-link">
                  Contact List
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path="/" 
                  component={CreateContact} />
                <Route path="/create-contact" 
                  component={CreateContact} />
                <Route path="/edit-contact/:id" 
                  component={EditContact} />
                <Route path="/contact-list" 
                  component={ContactList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
  );
}

export default App;
