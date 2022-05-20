import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'


class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>
        <h1>nest.</h1>
        <Nav>
          <NavItem><NavLink to="/" className="nav-link">Home</NavLink></NavItem>
          <NavItem><NavLink to="/apartmentindex" className="nav-link">Apartments</NavLink></NavItem>
          {logged_in && 
          <NavItem><NavLink to="/myapartmentindex" className="nav-link">My Apartments</NavLink></NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
        </Nav>
      </>
    )
  }
}
export default Header