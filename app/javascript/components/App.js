import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }


  componentDidMount(){
    this.readApartment()
  }
  
  readApartment = () => {
    fetch("http://localhost:3000/apartments")
    .then(response => response.json())
    .then(apartmentsArray => this.setState({apartments: apartmentsArray}))
    .catch(errors => console.log("Apartment read errors:", errors))
  }

  render() {
    return (
      
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/apartmentindex" render={(props) => < ApartmentIndex apartments={this.state.apartments}/>} />
            {/* <Route path="/apartmentshow/:id" render={(props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === +id)
              return <ApartmentShow apartment={apartment} />
            }} /> */}
            <Route path="/apartmentnew" component={ApartmentNew} />
            <Route path="/apartmentedit" component={ApartmentEdit} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
        
        
  
    )
  }
}

export default App