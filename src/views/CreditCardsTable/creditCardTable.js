import React, { Component } from 'react';
import Tree from 'react-animated-tree';
import ExpensesTable from './expensesTable';
import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Button,
    Col
  } from 'reactstrap';
import axios from 'axios'

class CreditCardTable extends Component {
  state = {
    gastos: []
  }
  handleGastosCallback  = gastos => {
    this.setState({gastos})
  }
  componentDidMount() {
    
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(res =>this.setState({ gastos: res.data }))
  }
  render() {
    return (
            <Card>
            <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1.5em"}}> TARJETAS DE CREDITO </CardTitle>
            <CardBody>
              <Tree content={<text>VISA GALICIA</text>} open="true">
                <Tree content="ARS$20.000">
                <ExpensesTable gastos={this.state.gastos}/>
                </Tree>
              </Tree>
              <Tree content="MASTERCARD GALICIA" open="true"> 
                <Tree content="ARS$15.000">
                <ExpensesTable gastos={this.state.gastos}/>
                </Tree>
              </Tree>
              <Tree content="MASTERCARD MERCADOPAGO" open="true">
                <Tree content="ARS$15.000">
                <ExpensesTable gastos={this.state.gastos}/>
                </Tree>
              </Tree>
            </CardBody>
            <CardFooter>
             <text>Total: ARS$50.000</text>
            </CardFooter>
          </Card>
    );
  }
}

export default CreditCardTable;
