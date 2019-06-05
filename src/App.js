import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

const renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

function App() {
  return (
    <Router>
      <div>  
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/customers/" component={CustomersContainer}/>
        
        <Switch>
          <Route path="/customers/new" component={renderCustomerNewContainer}/>
          <Route path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni}/>}/>
        </Switch>
     </div>
    </Router>
  );
}

export default App;
