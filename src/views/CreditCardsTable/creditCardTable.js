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
    expenses: []
  }
  sumAllCreditCardExpense = list => {
    var sum = list.reduce(function(prev, cur) {
      return prev + (cur.id * 100);
    }, 0)
    console.log("suma: ")
    console.log(sum)
    return "ARS$"+sum;
  }
  handleDeleteExpenses  = expense => {
    var expenses = this.state.expenses.filter(function( obj ) {
      return obj.id !== expense.id;
    });
    console.log("estado actual de la lista: ")
    console.log(this.state.expenses)
    console.log("voy a elminar el siguiente gasto: ")
    console.log(expense)
    console.log("como quedaria: ")
    console.log(expenses)
    this.setState({expenses})
  }
  componentDidMount() {
    
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(res =>this.setState({ expenses: res.data }))
  }
  render() {
    return (
            <Card>
            <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1.5em"}}> TARJETAS DE CREDITO </CardTitle>
            <CardBody>
              <Tree content={<text>VISA GALICIA</text>} open="true">
                <Tree content={this.sumAllCreditCardExpense(this.state.expenses) }>
                <ExpensesTable expenses={this.state.expenses} handleDeleteExpenses={this.handleDeleteExpenses}/>
                </Tree>
              </Tree>
              <Tree content="MASTERCARD GALICIA" open="true"> 
                <Tree content="ARS$15.000">
                <ExpensesTable expenses={this.state.expenses} handleDeleteExpenses={this.handleDeleteExpenses}/>
                </Tree>
              </Tree>
              <Tree content="MASTERCARD MERCADOPAGO" open="true">
                <Tree content="ARS$15.000">
                <ExpensesTable expenses={this.state.expenses} handleDeleteExpenses={this.handleDeleteExpenses}/>
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
