import React, {Component} from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import IsInDb, { showUsers, deleteData, doPayInOut} from '../functions/ComponentTools.js';

class Connection extends Component {

    constructor(props)
    {
      super(props);
      this.state = {
        mail : '',
        pw : '',
        rerender : 'yes'
      };
    }

    render()
    {
      return (
        <Container className='App'>
            <h2>Connection</h2>
            <Form className='form'>
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type='email'
                    name='email'
                    id='exampleEmail'
                    placeholder='myemail@email.com'
                    value={this.state.mail}
                    onChange={this.HandleMailEvent}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for='examplePassword'>Password</Label>
                  <Input
                    type='password'
                    name='password'
                    id='examplePassword'
                    placeholder='********'
                    value={this.state.pw}
                    onChange={this.HandlePwEvent}
                  />
                </FormGroup>
              </Col>
              <Button onClick={this.CheckUser}>Submit</Button>
            </Form>
            {showUsers()}
            
          </Container>
   
      );
    }
    CheckUser = () =>{
      const indexUser = IsInDb(this.state.mail, this.state.pw);
      if( indexUser !== false)
      {
        localStorage.setItem('user', indexUser )
      }
      this.setState({
        mail : '',
        pw : ''
      });
      console.log('user '+ localStorage.getItem('user') + ' connected');
      doPayInOut(20, 1);
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
export default Connection;