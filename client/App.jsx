import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor';
import { withTracker }      from 'meteor/react-meteor-data';

import Tenders, { TendersPublication } from '../imports/models/tenders.js';
import Plans, { PlansPublication }   from '../imports/models/plans.js';

import TendersComponent from './components/Tenders.jsx';

const plansHandle = Meteor.subscribe(PlansPublication.name);
const tendersHandle = Meteor.subscribe(TendersPublication.name);

export default withTracker(() => {
  return {
    tenders : Tenders.find({}).fetch(),
    plans   : Plans.find({}).fetch()
  };
})(TendersComponent);