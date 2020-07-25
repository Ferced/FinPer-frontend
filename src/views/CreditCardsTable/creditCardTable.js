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
    creditCardsList:[],
    displayAddExpenditure: false
  }
  sumAllCreditCardExpense = list => {
    var sum = list.reduce(function(prev, cur) {
      return prev + (cur.id <10 ? cur.id * 100 : cur.id);
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
    axios.get('http://127.0.0.1:5000/credit_card/expenses/')
      .then(res =>this.setState({ expenses: res.data }))
    axios.get('http://127.0.0.1:5000/credit_card/details/')
      .then(res =>this.setState({ creditCardsList: res.data }))
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
              { 
              this.state.displayAddExpenditure 
              ? 
              <AddExpenditure creditCardsList={this.state.creditCardsList} addExpenditureToList={this.addExpenditureToList} displayAddExpenditure = { this.state.displayAddExpenditure } alternateDisplayAddExpenditure={this.alternateDisplayAddExpenditure} /> 
              : 
              <div style={{display: "None"}} />
              }
              {this.state.creditCardsList.map((creditCardName) => ( 
                <Tree content={<text>{creditCardName.credit_card_bank_name}</text>} open="true">
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
