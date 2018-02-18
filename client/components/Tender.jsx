import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Tender.less';

export default class Tender extends Component {
	static propTypes = {
		tender: PropTypes.object.isRequired
	}

	render() {
		const { tenderID, title, location, currency, price } = this.props.tender;
		const link = `https://prozorro.gov.ua/tender/${tenderID}`;

		console.log(tenderID)

		return (
			<div className='Tender'>
				<div className='title'>
					<img src='public/images/icon.png' />
					<div className='header'>
						<a className='text' target='_blank' href={link}>{title}</a>
						<div className='location'>{location}</div>
					</div>
				</div>
				<div className='price'>
					<div className='value'>{price}</div>
					<div className='currency'>{currency}</div>
				</div>
			</div>
				
		);
	}
}