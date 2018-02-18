import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import getTenders from './services/getTenders.js';
import insertTender from './services/insertTender.js';

Meteor.startup(() => {
	const tenders = getTenders();

	tenders.forEach(tender => {
		insertTender(tender);
	})
	console.log('Server done');
});
