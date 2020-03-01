


import React, { Component } from 'react';
import Tree from 'react-animated-tree';
import axios from 'axios'
import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Button,
    Col
  } from 'reactstrap';
  

class ExpensesTable extends Component {
    state = {
    
      }
      componentWillMount() {
    
      
      }
      eliminarGasto = gasto => {
   
        this.props.handleDeleteExpenses(gasto)
      }
  render() {
    return (
<React.Fragment>
        <div>
        {this.props.expenses.map((gasto) => (
        <div>
        <Row style={{marginBottom :"10px"}}>
          <Col ><text>{gasto.title.split(" ")[0]}</text></Col>
          <Col ><text>1/12</text></Col>
          <Col ><text>ARS${gasto.id < 10 ? gasto.id * 100 : gasto.id}</text></Col>
          <Col ><Button style={{backgroundColor:"#db4848",color:"white"}} onClick={this.eliminarGasto.bind(this,gasto)}>x</Button></Col>
        </Row>
        </div>
        ))
        }
        </div>
</React.Fragment>
    );
  }
}

export default ExpensesTable;

