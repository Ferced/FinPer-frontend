


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
  

class AdditionalInfoCard extends Component {
  render() {
    return (
        
        <Card>
        <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1.5em"}}> DATOS ADICIONALES </CardTitle>
        <CardBody>
        <Card>
            <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1em"}}> Gastado en total: </CardTitle>
            <CardBody>
            <Col>
            <text>
                ARS$43.000
            </text>
            </Col>
            
            </CardBody>
        </Card>
        <Card>
            <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1em"}}> Cuanto sobraria de tu sueldo: </CardTitle>
            <CardBody>
            <Col>
            <text>
                ARS$13.000
            </text>
            </Col>
            
            </CardBody>
        </Card>
        <Card>
            <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1em"}}> Ahorros totales despues de pagar las tarjetas: </CardTitle>
            <CardBody>
            <Col>
            <text>
                ARS$67.000
            </text>
            </Col>
            <Col>
            <text>
                USD$3.500
            </text>
            </Col>

            </CardBody>
        </Card>
        <Card>
            <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1em"}}> Nota adicional: </CardTitle>
            <CardBody>
            <Col>
            <text>
                Gastaste el 73% de tu sueldo
            </text>
            </Col>
            
            </CardBody>
        </Card>
        </CardBody>

</Card>
    );
  }
}

export default AdditionalInfoCard;
