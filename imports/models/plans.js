import { Mongo } from 'meteor/mongo';

export const PlansPublication = { name: 'plans' }

const Plans = new Mongo.Collection(PlansPublication.name);

Plans.shema = new SimpleSchema({
  id       : {type: String},
  title    : {type: String}
});

export default Plans;