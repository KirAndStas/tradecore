import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import getTenders from './services/getTenders.js';
import insertTender from './services/insertTender.js';

StaticServer.add('/public', '/home/cyr/Dev/tradecore/public');

Meteor.startup(() => {
	const tenders = getTenders();

	tenders.forEach(tender => {
		insertTender(tender);
	})
	console.log('Server done');
});
