import { Mongo } from 'meteor/mongo';

import Tenders  from '../../imports/models/tenders.js';

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