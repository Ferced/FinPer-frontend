import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Tree from 'react-animated-tree';

 

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
                <Tree content="VISA GALICIA" open="true">
                  <Tree content="ARS$20.000">
                  <Table borderless hover responsive>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Importe</th>
                    <th>Coutas</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td onClick={console.log("SARASA")}>Marihuana</td>
                  <td>ARS$1650</td>
                  <td>02/12</td>
                  <td><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></td>
                </tr>
                <tr>
                  <td>LSD</td>
                  <td>ARS$1000</td>
                  <td>03/12</td>
                  <td><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></td>
                </tr>
                <tr>
                  <td>Batman</td>
                  <td>ARS$1300</td>
                  <td>3/12</td>
                  <td><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></td>
                </tr>
                <tr>
                  <td>Superman</td>
                  <td>ARS$1300</td>
                  <td>02/06</td>
                  <td><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></td>
                </tr>
        
                <tr>
                  <td>Robin</td>
                  <td>ARS$1300</td>
                  <td>01/01</td>
                  <td><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></td>
                </tr>
                </tbody>
                </Table>
                   
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
                <Tree content="VISA GALICIA" open="true">
          
                <Row>

                <Table borderless hover responsive>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Importe</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Marihuana</td>
                  <td>ARS$1650</td>
                  <td><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></td>
                </tr>
                <tr>
                  <td>LSD</td>
                  <td>ARS$1000</td>
                  <td><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></td>
                </tr>
                <tr>
                  <td>Batman</td>
                  <td>ARS$1300</td>
                  <td><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></td>
                </tr>
                <tr>
                  <td>Superman</td>
                  <td>ARS$1300</td>
                  <td><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></td>
                </tr>
                <tr>
                  <td>Batman</td>
                  <td>ARS$1300</td>
                  <td><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></td>
                </tr>
                <tr>
                  <td>Batman</td>
                  <td>ARS$1300</td>
                  <td><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></td>
                </tr>
                <tr>
                  <td>Robin</td>
                  <td>ARS$1300</td>
                  <td><Button style={{backgroundColor:"#db4848",color:"white"}}>x</Button></td>
                </tr>
                </tbody>
                </Table>
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
