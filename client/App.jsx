import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor';
import { withTracker }      from 'meteor/react-meteor-data';
import PropTypes            from 'prop-types';

import Routes from './routes.jsx';

import Tenders, { TendersPublication } from '../imports/models/tenders.js';
import Plans, { PlansPublication }     from '../imports/models/plans.js';

const plansHandle   = Meteor.subscribe(PlansPublication.name);
const tendersHandle = Meteor.subscribe(TendersPublication.name);

class App extends Component {
  render() {
    const { tenders, plans } = this.props;

    return (
      <Routes  tenders={tenders} plans={plans} />
    )
  }
}

export default withTracker(() => {
  return {
    tenders : Tenders.find({}).fetch(),
    plans   : Plans.find({}).fetch()
  };
})(App);