import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tender from './Tender.jsx';
import './Tenders.less';

export default class App extends Component {
	static propTypes = {
		tenders: PropTypes.array.isRequired
	}

  	render() {
  		const { tenders } = this.props;

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