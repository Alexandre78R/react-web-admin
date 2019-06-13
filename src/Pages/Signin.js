import React from 'react';
import '../App.css';
import {
  Row,
  Container,
  Card,
  CardHeader,
  CardBody,
  Button,
  FormGroup,
  Label, 
  Input, 

} from 'reactstrap';
import NavBar from '../Composent/NavBar'
import SideBar from '../Composent/SideBar';
import Footer from '../Composent/Footer';

class SignIn extends React.Component {

  render() {
    return (
      <div id="page-top">
        <NavBar/>

          <div id="wrapper">
            <SideBar/>

              <Container className="container-fluid page">
               <Row>
                  <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="text-center">
                    <CardHeader tag="h5">Sign In</CardHeader>
                    <CardBody>

                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="email@mon-site.fr" />
                      </FormGroup>

                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="*******" />
                      </FormGroup>
                      <a href="/dashboard">
                      <Button color = "success">Sign In</Button>
                      </a>
                    </CardBody>
                  </Card>
               </Row>
             </Container>
             <Footer/>
          </div>
    </div>
    );
  }
}

export default SignIn;