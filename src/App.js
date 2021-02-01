import { render } from '@testing-library/react';
import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css';

import Navigation from './components/navigation/Navigation'

import Landing from './components/landing/Landing'
import PriceTag from './components/price-tag/PriceTag'
import MeetingRoomTest from './components/price-tag/meetingRoomTest/MeetingRoomTest';

const App = () => {

  return(
    <Router>
      <Navigation/>
      <div className='mainContainer'>
        <Route path='/' exact component={Landing} />
        <Route path='/price-tag' exact component={PriceTag} />
        <Route path='/price-tag/meetingRoom' exact component={MeetingRoomTest} />

  
      </div>
    </Router>
    
  )

}

export default App