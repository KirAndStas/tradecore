import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
 
import Tenders from '../imports/models/tenders.js';
 
import TendersComponent from './components/Tenders.jsx';
 
export default withTracker(() => {
  return {
    tenders: Tenders.find({}).fetch()
  };
})(TendersComponent);