import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { PlansPublication }   from './publications/plansPublication.js';
import { TendersPublication } from './publications/tendersPublication.js';

import getTenders from './services/getTenders.js';
import insertTender from './services/insertTender.js';
import { insertPlans } from './services/insertPlans.js';

const PLANS = [
  {
    name: 'go to uni'
  },
  {
    name: 'finish package.json publication'
  },
  {
    name: 'meet with missadness'
  },
  {
    name: 'do back button'
  },
  {
    name: 'do rewritting in flagMenu'
  },
  {
    name: 'call will be rescheduled'
  },
  {
    name: 'figure out TestDAF'
  }
];

StaticServer.add('/public', '/home/cyr/Work/tradecore/public');

Meteor.startup(() => {
	const tenders = getTenders();

	tenders.forEach(tender => {
		insertTender(tender);
	});

  insertPlans(PLANS);

	console.log('Server done');
});
