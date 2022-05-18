import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom';


export default class ApartmentIndex extends Component {
  render() {
    return (
      <>
      <h3>Available Apartments</h3>
      <br />
      <br />
      <Col sm="6">
          {this.props.apartments && this.props.apartments.map(apartment => {
            return(
              <Card body key={apartment.street}>
                <CardImg alt='apartment image' src= {apartment.image}/>
                <br />
                <CardTitle>
                  <h3>{apartment.street}</h3>
                  <h4>{apartment.price}</h4>
                </CardTitle>
                
 
              </Card>
            )
          })}
        </Col>
      </>
    )
  }
}
