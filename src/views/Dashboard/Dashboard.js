import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Tree from 'react-animated-tree';
import CreditCardTable from './../CreditCardsTable/creditCardTable';
import DebitCardTable from './../DebitCardsTable/debitCardsTable';
import AdditionalInfoCard from './../AdditionalInfoCard/additionalInfoCard';

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
            < CreditCardTable />
          </Col>
        </Row>
        <Row>
          <Col>
          < DebitCardTable />
          </Col>
        </Row>
        </Col>
        <Col xs="3">
        <Row>
          <Col>
          <AdditionalInfoCard />
          </Col>
        </Row>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
