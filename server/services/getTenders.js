import { HTTP } from 'meteor/http';

export default function getTenders() {
	const tendersId = HTTP.get(
		'https://public.api.openprocurement.org/api/0/tenders').data.data;
	
	const tenders = tendersId.map(tenderId => {
		const tender = HTTP.get(
			`https://public.api.openprocurement.org/api/0/tenders/${tenderId.id}`);

		const { tenderID, title, procuringEntity, value } = tender.data.data;

		return {
			tenderID,
			title,
			price: value.amount,
			currency: value.currency,
			location: procuringEntity.address.locality
		}

	});

	return tenders;
}