import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'


export default class ApartmentShow extends Component {
  render() {
    console.log(this.props.apartment)
    return (
      <>
      <h3>ApartmentShow</h3>
      <Col sm="6">
        <Card body>
          <CardTitle>Hi, my name is {this.props.apartment.name}!</CardTitle>
          <img src={this.props.apartment.email} alt="adorable cat" />
          <CardText>I am {this.props.apartment.state} years old. I enjoy  {this.props.apartment.manager}.</CardText>
        </Card>
      </Col>
      </>
    )
  }
}
