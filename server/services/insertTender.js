import { Mongo } from 'meteor/mongo';

import Tenders  from '../../imports/models/tenders.js';

export default function insertTender(tender) {
	const { tenderID, title, location, currency, price } = tender;

	Tenders.insert({
		tenderID,
		title,
		location,
		price,
		currency
	})
}