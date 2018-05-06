import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    goBack: PropTypes.func.isRequired
  }

  render() {
    const { goBack } = this.props;
    return (
      <div className='Header'>
        <img onClick={goBack} src='public/images/backButton.svg' />
        <div>Meteor try</div>
      </div>
    )
  }
}