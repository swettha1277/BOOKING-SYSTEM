import React from 'react';
import './style.css';
import Routing from './Routing';
import { Provider } from 'react-redux';
import store from './store/store'
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Routing />
      </Provider>
    );
  }
}

/*

React-Node Bus Ticket booking

Search Screen - User can provide the source and destination and the date

Bus Availability Screen - Show the list of buses available

Selection Screen  - User needs to select the bus and the seats needed.

Passenger information screen -  (phonenumber), we can show the password screen, when the password, we can prepopulate the details and login.

Phonenumber is not there, we can ask to provide a password, firstname, lastname to signup

Payment screen - 

Confirmation Screen

Booking History Screen - first login and then show this.


*/
