import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tender from './Tender.jsx';
import './Tenders.less';

export default class Tenders extends Component {
	static propTypes = {
    tenders: PropTypes.array.isRequired,
		plans: PropTypes.array.isRequired
	}

	render() {
		const { tenders, plans } = this.props;

    console.log('tenders + plans', tenders, plans);

		return (
			<div className='TendersWrapper'>
				<div className='tenders'>
					{
						tenders.map((tender, index) => {
							return (
						    <Tender key={index} tender={tender} />
							);
						})
					}
				</div>
			</div>
		);
	}
}