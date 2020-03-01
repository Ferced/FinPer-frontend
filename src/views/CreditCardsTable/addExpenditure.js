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
    itemName: "",
    amountOfPayments: 1,
    numberNextPayment: 1,
    price: 0,
    creditCardBankName:"",
    lastFourNumbersCreditCard:"",
    selectCreditCard: this.props.creditCardsList[0],
    creditCardNetworksList: ["VISA", "MASTERCARD", "AMERICAN EXPRESS"],
    selectNetworkCreditCard: "VISA",
    errorMessage: "",
    showErrorMessage: false
  }
  handleChangeAmountOfPayments = (event) => {
    if (event.target.value > 0) {
      this.setState({ [event.target.name]: event.target.value });
    }
  }
  handleChangeNumberNextPayment = (event) => {
    if (event.target.value <= this.state.amountOfPayments && event.target.value > 0) {
      this.setState({ [event.target.name]: event.target.value });
    }
  }
  handleChangeLastFourNumbersCreditCard  = (event) => {
    if (event.target.value.length < 5) {
      this.setState({ [event.target.name]: event.target.value });
    }
  }
  handleChangeInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  verifyDataBeforeAdding = () => {
    if (this.state.selectCreditCard === "addCreditCard"){
      if (this.state.lastFourNumbersCreditCard.length < 4) {
        this.setState({errorMessage:"Los ultimos 4 numeros de la tarjeta tiene que ser igual a 4 o dejarlo vacio."})
        return false
      }
      if (this.state.creditCardBankName.length < 1) {
        this.setState({errorMessage:"El nombre del banco no puede quedar vacio."})
        return false
      }
    }
    else{
      if (this.state.itemName.length < 1) {
        this.setState({errorMessage:"El nombre de la compra no puede estar vacio."})
        return false
      }
    }
 
   
    return true
  }
  handleClickAddExpenditure = () => {
    if (this.verifyDataBeforeAdding()) {
      var expenditure = {
        userId: 411,
        id: parseInt(this.state.price),
        title: this.state.itemName,
        completed: false
      }
      this.props.addExpenditureToList(expenditure)
      this.props.alternateDisplayAddExpenditure()
    }
    else { this.setState({ showErrorMessage: true }) }
  }
  render() {
    return (
      <Card
      //  style={{ display: this.props.displayAddExpenditure ? true : "none" }}
       >
        <CardTitle style={{ fontFamily: "", letterSpacing: "1px", margin: "20px", fontSize: "1.2em" }}>
          <Label> Agregar un nuevo gasto </Label>
        </CardTitle>
        <CardBody>

          <Form>
            <FormGroup>
              <Label for="exampleSelectMulti">Seleccionar tarjeta</Label>
              <Input type="select" value={this.state.selectCreditCard} onChange={this.handleChangeInput} name="selectCreditCard" >
                {
                  this.props.creditCardsList.map((creditCardName) => (
                    <option value={creditCardName}>{creditCardName}</option>
                  ))// map
                }
                <option value={"addCreditCard"}>AGREGAR TARJETA +</option>
              </Input>
            </FormGroup>
          </Form>

          <Row style={{ display: this.state.selectCreditCard === "addCreditCard" ? true : "None" }} >
            <Col>
              <Label>Emisora de la tarjeta</Label>
              <Input type="select" value={this.state.selectNetworkCreditCard} onChange={this.handleChangeInput} name="selectNetworkCreditCard" >
                {
                  this.state.creditCardNetworksList.map((creditCardNetworkName) => (
                    <option value={creditCardNetworkName}>{creditCardNetworkName}</option>
                  ))// map
                }
              </Input>
            </Col>
            <Col>
              <Label>Ultimos 4 numeros</Label>
              <Input name="lastFourNumbersCreditCard" type="number" placeholder="Opcional" value={this.state.lastFourNumbersCreditCard} onChange={this.handleChangeLastFourNumbersCreditCard}></Input>
            </Col>
            <Col>
              <Label>Banco de la tarjeta</Label>
              <Input name="creditCardBankName" placeholder="(Por ej.: Galicia, Nacion, HSBC...)" value={this.state.creditCardBankName} onChange={this.handleChangeInput}></Input>
            </Col>
          </Row>

          <Row>
            <Col>
              <Label>Nombre</Label>
              <Input name="itemName" value={this.state.itemName} onChange={this.handleChangeInput}></Input>
            </Col>
            <Col>
              <Label>Coutas</Label>
              <Input name="amountOfPayments" type="number" value={this.state.amountOfPayments} onChange={this.handleChangeAmountOfPayments} > ></Input>
            </Col>
            <Col>
              <Label>Prox. couta a pagar</Label>
              <Input name="numberNextPayment" type="number" value={this.state.numberNextPayment} onChange={this.handleChangeNumberNextPayment} ></Input>
            </Col>
            <Col>
              <Label>Precio</Label>
              <Input name="price" type="number" value={this.state.price} onChange={this.handleChangeInput}></Input>
            </Col>
          </Row>

          <Button style={{ marginTop: "30px", width: "100%", backgroundColor: "#45de4a", color: "white" }} onClick={this.handleClickAddExpenditure} >AGREGAR</Button>
          <Col style={{ alignItems: "center", textAlign: "center", justifyContent: "center", width: "100%" }}>

            <Label style={{ color: "red", marginTop: "15px", display: this.state.showErrorMessage ? true : "none" }}>{this.state.errorMessage}</Label>
          </Col>

        </CardBody>
      </Card>
    );
  }
}

export default AddExpenditure;
