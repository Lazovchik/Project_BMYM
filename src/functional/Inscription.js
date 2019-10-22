import React, {Component} from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { showUsers, createUser, showCards} from '../functions/ComponentTools.js';

class Inscription extends Component {

    constructor(props)
    {
      super(props);
      this.state = {
        mail : "",
        pw : "",
        surname : "",
        name : ""
      };
    }

    render()
    {
      return (
        <Container className="App">
            <h2>Connection</h2>
            <Form className="form">
            <Col>
                <FormGroup>
                  <Label>Nom</Label>
                  <Input
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder="nom"
                    value={this.state.surname}
                    onChange={this.HandleSurnameEvent}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Prénom</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="prénom"
                    value={this.state.name}
                    onChange={this.HandleNameEvent}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Mail</Label>
                  <Input
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="monemail@email.com"
                    value={this.state.mail}
                    onChange={this.HandleMailEvent}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Mot de passe</Label>
                  <Input
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="******"
                    value={this.state.pw}
                    onChange={this.HandlePwEvent}
                  />
                </FormGroup>
              </Col>
              <Button onClick={this.AddUser}>Submit</Button>
            </Form>
            {showUsers()}
            {showCards()}
          </Container>
   
      );
    }
    AddUser = () =>{
      createUser(this.state.name, this.state.surname, this.state.mail, this.state.pw, "false");
      this.setState({
        mail : "",
        pw : "",
        surname :"",
        name : ""
      });
    }
    HandleSurnameEvent = (event) =>{
      this.setState({
        surname : event.target.value,
      });
    }
    HandleNameEvent = (event) =>{
      this.setState({
        name : event.target.value,
      });
    }
    HandleMailEvent = (event) =>{
      this.setState({
        mail : event.target.value,
      });
    }
    HandlePwEvent = (event) =>{
      this.setState({
        pw : event.target.value,
      });
    }
  
}
export default Inscription;