import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import ListUsers from './components/ListUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Footer from './components/layout/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/all" component={ListUsers} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/edit" component={EditUser} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
