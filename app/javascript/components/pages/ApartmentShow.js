import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg } from 'reactstrap'


export default class ApartmentShow extends Component {
  render() {
    let {apartment} = this.props    
      return (
      <>
         <h3>ApartmentShow</h3>
        <Col sm="6">
              <Card body>
                <br />
                <CardTitle>
                  <CardImg alt='apartment image' src= {apartment && apartment.image}/>
                  <h3>{apartment && apartment.price}</h3>
                  <h3>{apartment && apartment.street}</h3>
                  <h4>{apartment && apartment.state}</h4>
                  <h4>{ apartment && apartment.bedrooms} bedrooms.</h4>
                  <h4>{ apartment && apartment.bathrooms} bathrooms.</h4>
                  <h4>{ apartment && apartment.pets} pets allowed.</h4>
                  <h4>Manager: { apartment && apartment.manager}</h4>
                  <h4>Contact: {apartment && apartment.email}</h4>
                </CardTitle>
              </Card>
        </Col>
       </>
    )
  }
}


