import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


export default class MyApartmentIndex extends Component {
  render() {
    return (
        <>
        <h1>These are my apartments</h1>
        <Col sm="6">
          {this.props.myApartments && this.props.myApartments.map(apartment => {
            return(
              <Card body key={apartment.street}>
                <CardImg alt='apartment image' src= {apartment.image}/>
                <br />
                <CardTitle>
                  <h3>{apartment.street}</h3>
                  <h4>{apartment.price}</h4>
                  <NavLink to={`/apartmentshow/${apartment.id}`}>
                  {apartment.street}
                </NavLink>
                </CardTitle>
              
                
              </Card>
            )
          })}
        </Col>
        </>
        )
  }
}
