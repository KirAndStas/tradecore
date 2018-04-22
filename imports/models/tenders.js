import { Mongo } from 'meteor/mongo';

export const TendersPublication = { name: 'tenders' };

const Tenders = new Mongo.Collection(TendersPublication.name);

Tenders.shema = new SimpleSchema({
	id       : {type: String},
	title    : {type: String},
	location : {type: String},
	price    : {type: Number},
	currency : {type: String}
});

export default Tenders;