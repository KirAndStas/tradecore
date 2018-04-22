import Plans, { PlansPublication } from '../../imports/models/plans.js';
import { Meteor }                  from 'meteor/meteor';

if (Meteor.isServer) {
  Meteor.publish(PlansPublication.name, () => {
    // return [];
    return Plans.find({});
  })
}



