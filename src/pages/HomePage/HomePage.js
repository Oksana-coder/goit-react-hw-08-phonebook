import React from 'react';
import PhoneImg from './phone-499991_640.jpeg';
import './HomePage.scss';

const HomeView = () => (
  <div className="home-container">
    <h1 className="title">
      Your Phonebook Service
    </h1>
    <p className="sub-title">Safe place to store your contacts</p>
    <img src={PhoneImg} alt="Phone" className="home-image"/>
  </div>
);

export default HomeView;