import React, { Component } from 'react';
import Tree from 'react-animated-tree';
import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Button,
    Col
  } from 'reactstrap';
  

class DebitCardTable extends Component {
  render() {
    return (
                  <Card>
              <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1.5em"}}>
              <Row style={{marginBottom :"10px"}}>
                <Col xs="6" ><text> TARJETAS DE DEBITO </text></Col>
                <Col xs="6" ><Button style={{backgroundColor:"#60b3eb",color:"white"}}>+</Button></Col>
                </Row>
                
                
                 </CardTitle>
              <CardBody>
                <Tree content={<text>VISA GALICIA</text>} open="true">
                <Row style={{marginBottom :"10px"}}>
                <Col xs="4" ><text>Marihuana</text></Col>
                <Col xs="4" ><text>ARS$1500</text></Col>
                <Col xs="4" ><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></Col>
                </Row>
                <Row style={{marginBottom :"10px"}}>
                <Col xs="4" ><text>Marihuana</text></Col>
                <Col xs="4" ><text>ARS$1500</text></Col>
                <Col xs="4" ><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></Col>
                </Row>      <Row style={{marginBottom :"10px"}}>
                <Col xs="4" ><text>Marihuana</text></Col>
                <Col xs="4" ><text>ARS$1500</text></Col>
                <Col xs="4" ><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></Col>
                </Row>      <Row style={{marginBottom :"10px"}}>
                <Col xs="4" ><text>Marihuana</text></Col>
                <Col xs="4" ><text>ARS$1500</text></Col>
                <Col xs="4" ><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></Col>
                </Row>      <Row style={{marginBottom :"10px"}}>
                <Col xs="4" ><text>Marihuana</text></Col>
                <Col xs="4" ><text>ARS$1500</text></Col>
                <Col xs="4" ><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></Col>
                </Row>      <Row style={{marginBottom :"10px"}}>
                <Col xs="4" ><text>Marihuana</text></Col>
                <Col xs="4" ><text>ARS$1500</text></Col>
                <Col xs="4" ><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></Col>
                </Row>
            
                
                </Tree>
              
              </CardBody>
              <CardFooter>
               <text>Total gastado este mes: ARS$50.000</text>
              </CardFooter>
            </Card>
    );
  }
}

export default DebitCardTable;
