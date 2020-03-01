import React, { Component } from 'react';
import Tree from 'react-animated-tree';
import ExpensesTable from './expensesTable';
import AddExpenditure from './addExpenditure';
import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Button,
    Col,
    Input,
    Form,
    FormGroup,
    Label
  } from 'reactstrap';
import axios from 'axios'


class CreditCardTable extends Component {
  state = {
    expenses: [],
    creditCardsList:["VISA GALICIA","MASTERCARD GALICIA","MASTERCARD MERCADOPAGO"],
    displayAddExpenditure: false
  }
  sumAllCreditCardExpense = list => {
    var sum = list.reduce(function(prev, cur) {
      return prev + (cur.id * 100);
    }, 0)
    return "ARS$"+sum;
  }
  handleDeleteExpenses  = expense => {
    var expenses = this.state.expenses.filter(function( obj ) {
      return obj.id !== expense.id;
    });
    this.setState({expenses})
  }

  alternateDisplayAddExpenditure = () => {
    this.setState({displayAddExpenditure : !this.state.displayAddExpenditure})

  }
  addExpenditureToList = expenditure => {
    console.log("A VER, LLEGO HASTA ACA")
    var expenses = this.state.expenses
    expenses.push(expenditure)
    console.log("SE AGREGO ITEM A LA LISTA: ")
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
            <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1.5em"}}>
             <Row style={{marginBottom :"10px"}}>
                <Col xs="6" ><text> TARJETAS DE CREDITO </text></Col>
                <Col xs="6" >
                  <Button style={{backgroundColor:"#60b3eb",color:"white"}} onClick={this.alternateDisplayAddExpenditure}>
                    {this.state.displayAddExpenditure ? "Cancelar" : "+" }
                  </Button>
                </Col>
              </Row>
            </CardTitle>
            <CardBody>
              <AddExpenditure creditCardsList={this.state.creditCardsList} addExpenditureToList={this.addExpenditureToList} displayAddExpenditure = { this.state.displayAddExpenditure } alternateDisplayAddExpenditure={this.alternateDisplayAddExpenditure} />
              {this.state.creditCardsList.map((creditCardName) => ( 
                <Tree content={<text>{creditCardName}</text>} open="true">
                  <Tree content={this.sumAllCreditCardExpense(this.state.expenses) }>
                  <ExpensesTable expenses={this.state.expenses} handleDeleteExpenses={this.handleDeleteExpenses}/>
                  </Tree>
                </Tree>
              ))// map
              }
            </CardBody>
            <CardFooter>
              <text>Total: ARS$50.000</text>
            </CardFooter>
          </Card>
    );
  }
}

export default CreditCardTable;
