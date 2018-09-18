import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import {
  Login,
  Main,
  Total,
  MarketingM,
  ListM,
  SupplierC
} from './containers';




class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/main' component={Main} />
            <Route exact path='/total' component={Total} />
            <Route exact path='/marketing_management' component={MarketingM} />
            <Route exact path='/list_management' component={ListM} />
            <Route exact path='/supplier_collaboration' component={SupplierC} />
            <Route path='*' component={Login} />
          </Switch>
          
        </div>
      </HashRouter>
      
    );
  }
}

export default App;
