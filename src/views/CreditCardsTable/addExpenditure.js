


import React, { Component } from 'react';
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
  

class AddExpenditure extends Component {
    state = {
        itemName : "",
        amountOfPayments : 1,
        numberNextPayment: 1,
        price: 0,
        errorMessage: "El nombre de la compra no puede estar vacio.",
        showErrorMessage: false
      }
      handleChangeAmountOfPayments  = (event) => 
      {
        if (event.target.value > 0 ){
            this.setState({[event.target.name]: event.target.value});
        }
      }
      handleChangeNumberNextPayment  = (event) => 
      {
        if (event.target.value <= this.state.amountOfPayments && event.target.value > 0 ){
            this.setState({[event.target.name]: event.target.value});
        }
      }
      handleChangeInput = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
      handleClickAddExpenditure = () => {
        if (this.state.itemName.length > 0) {
            var expenditure = {
                userId: "411",
                id: "152",
                title: this.state.itemName,
                completed:false
            }
            console.log("LA CONCHA DE SU HERMANA")
            console.log(expenditure)
            this.props.addExpenditureToList(expenditure)
            this.props.alternateDisplayAddExpenditure()
        }
        else{ this.setState({showErrorMessage : true})}
      }
  render() { 
    return (
        <Card style={{display : this.props.displayAddExpenditure ? true : "none"}} >
            <CardTitle style={{fontFamily:"",letterSpacing:"1px",margin:"20px",fontSize:"1.2em"}}>
              <Label> Agregar un nuevo gasto </Label> 
            </CardTitle>
            <CardBody>
            <Form>
                <FormGroup>
                    <Label for="exampleSelectMulti">Seleccionar tarjeta</Label>
                    <Input type="select" name="select" id="exampleSelect">
                    {this.props.creditCardsList.map((creditCardName) => ( 
                      <option>{creditCardName}</option>
                        
                    ))// map
                    }
                        <option>AGREGAR TARJETA +</option>
                    </Input>
                </FormGroup>
            </Form>
            <Row>
                <Col>
                    <Label>Nombre</Label>
                    <Input name="itemName" value={this.state.itemName} onChange = {this.handleChangeInput}></Input>
                </Col>
                <Col>
                    <Label>Coutas</Label>
                   <Input name="amountOfPayments" type="number" value={this.state.amountOfPayments} onChange = {this.handleChangeAmountOfPayments} > ></Input>
                </Col>
                <Col>
                    <Label>Prox. couta a pagar</Label>
                    <Input name="numberNextPayment" type="number" value={this.state.numberNextPayment} onChange = {this.handleChangeNumberNextPayment} ></Input>
                </Col>
                <Col>
                    <Label>Precio</Label>
                    <Input name="price" type="number" value={this.state.price} onChange = {this.handleChangeInput}></Input>
                </Col>
            </Row>
            <Button style = {{marginTop:"30px",width:"100%", backgroundColor:"#45de4a", color :"white"}} onClick={this.handleClickAddExpenditure} >AGREGAR</Button>
            <Col style = {{alignItems:"center",textAlign:"center",justifyContent:"center", width:"100%"}}>
           
            <Label style = {{color: "red",marginTop: "15px", display: this.state.showErrorMessage ? true : "none"}}>{this.state.errorMessage}</Label>
            </Col>

            </CardBody>
    </Card>
    );
  }
}

export default AddExpenditure;
