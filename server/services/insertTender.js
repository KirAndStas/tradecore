import { Mongo } from 'meteor/mongo';

import '../../imports/models/tenders.js';

const Tenders = Mongo.Collection.get('tenders');

export default function insertTender(tender) {
	const { id, title, location, currency, price } = tender;

	Tenders.insert({
		id,
		title,
		location,
		price,
		currency
	})
}