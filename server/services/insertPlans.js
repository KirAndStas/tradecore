import { Meteor } from 'meteor/meteor';
import Plans      from '../../imports/models/plans.js';

export function insertPlans(plans) {
  plans.forEach(plan => {
    Plans.insert({
      title : plan.name
    });
  });
}