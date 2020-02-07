import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Tree from 'react-animated-tree';
import ContenidoLinea from './contenidoLinea';
 

import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  
} from 'reactstrap';

const tree = [
  {
    value: 'Parent A',
    nodes: [{ value: 'Child A' }, { value: 'Child B' }],
  },
  {
    value: 'Parent B',
    nodes: [
      {
        value: 'Child C',
      },
      {
        value: 'Parent C',
        nodes: [
          { value: 'Child D' },
          { value: 'Child E' },
          { value: 'Child F' },
        ],
      },
    ],
  },
];


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }
 
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
        <Col xs="9">
         <Row>
          <Col>
            <Card>
              <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1.5em"}}> TARJETAS DE CREDITO </CardTitle>
              <CardBody>
                <Tree content={<ContenidoLinea />} open="true">
                  <Tree content="ARS$20.000">
                    <Tree content="ARS$1500" />
                    <Tree content="ARS$5000" />
                    <Tree content="ARS$5000" />
                    <Tree content="ARS$8500" />
                  </Tree>
                </Tree>
                <Tree content="MASTERCARD GALICIA" open="true"> 
                  <Tree content="ARS$15.000">
                    <Tree content="ARS$1500" />
                    <Tree content="ARS$5000" />
                    <Tree content="ARS$8500" />
                  </Tree>
                </Tree>
                <Tree content="MASTERCARD MERCADOPAGO" open="true">
                  <Tree content="ARS$15.000">
                    <Tree content="ARS$1500" />
                    <Tree content="ARS$5000" />
                    <Tree content="ARS$8500" />
                  </Tree>
                </Tree>
              </CardBody>
              <CardFooter>
               <text>Total: ARS$50.000</text>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1.5em"}}>
              <Row style={{marginBottom :"10px"}}>
                <Col xs="6" ><text> TARJETAS DE DEBITO </text></Col>
                <Col xs="6" ><Button style={{backgroundColor:"#60b3eb",color:"white"}}>+</Button></Col>
                </Row>
                
                
                 </CardTitle>
              <CardBody>
                <Tree content={<ContenidoLinea />} open="true">
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
          </Col>
        </Row>
        </Col>
        <Col xs="3">
        <Row>
          <Col>
            <Card>
              <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1.5em"}}> TARJETA GALICIA </CardTitle>
              <CardBody>
                <Card>
                  <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1em"}}> Gastado: </CardTitle>
                  <CardBody>
                    <Col>
                    <text>
                      ARS$20.000
                    </text>
                    </Col>
                  
                  </CardBody>
                </Card>
                <Card>
                  <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1em"}}> Cierre: </CardTitle>
                  <CardBody>
                    <Col>
                    <text>
                      28/02/2020
                    </text>
                    </Col>
                  
                  </CardBody>
                </Card>
                <Card>
                  <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1em"}}> Vencimiento: </CardTitle>
                  <CardBody>
                    <Col>
                    <text>
                      06/03/2020
                    </text>
                    </Col>
                  
                  </CardBody>
                </Card>
                <Card>
                  <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1em"}}> Nota adicional: </CardTitle>
                  <CardBody>
                    <Col>
                    <text>
                      no la pienso pagar wacho
                    </text>
                    </Col>
                  
                  </CardBody>
                </Card>
              </CardBody>
          
            </Card>
          </Col>
        </Row>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
