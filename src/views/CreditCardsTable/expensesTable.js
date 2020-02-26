


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
        gastos: this.props.gastos,
      }
      componentWillMount() {
    
        this.setState({gastos : this.props.gastos})
      }
      eliminarGasto = gasto => {
        var gastos = this.props.gastos
        gastos.splice(gasto.id - 1 , 1);
        console.log( " elimino el siguiente gasto")
        console.log(gasto)
        console.log("la lista queda asi: ")
        console.log(gastos)
        console.log(this.state.gastos)

        this.setState({ gastos: gastos },() => {console.log(this.state.gastos)})
      }
  render() {
    return (
<React.Fragment>
        <div>
        {this.props.gastos.map((gasto) => (
        <div>
         <Row style={{marginBottom :"10px", display: gasto.completed ? "true" : "none"}}>
        <Col xs="4" ><text>{gasto.title}</text></Col>
        <Col xs="4" ><text>ARS${gasto.id}00</text></Col>
        <Col xs="4" ><Button style={{backgroundColor:"#db4848",color:"white"}} onClick={this.eliminarGasto.bind(this,gasto)}>x</Button></Col>
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
