import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import Availability from './components/Availability';
import PassengerInfo from './components/PassengerInfo';
import Selection from './components/Selection';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import BookingHistory from './components/BookingHistory';
import LoginPage from './components/LoginPage';
import Register from './components/Register';

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/Register" element={<Register />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/passengerInfo" element={<PassengerInfo />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/history" element={<BookingHistory />} />
          <Route path="/**" element={<Availability />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
