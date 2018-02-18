import { Mongo } from 'meteor/mongo';

const Tenders = new Mongo.Collection('tenders');

Tenders.shema = new SimpleSchema({
	id       : {type: String},
	title    : {type: String},
	location : {type: String},
	price    : {type: Number},
	currency : {type: String}
});

export default Tenders;