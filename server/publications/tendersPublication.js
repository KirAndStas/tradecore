import { Meteor } from 'meteor/meteor';
import Tenders, { TendersPublication } from '../../imports/models/tenders.js';


if (Meteor.isServer) {
  Meteor.publish(TendersPublication.name, () => {
    return Tenders.find({})
  })
}