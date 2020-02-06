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
  contenido = () =>
   <div>
<Row>
  <text>sarasa</text>
  <text>sarasa</text>
</Row>
  </div>
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
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
       
      </div>
    );
  }
}

export default Dashboard;
