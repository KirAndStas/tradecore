import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <div>You are at home</div>
      <Link to='/tenders'>Tenders</Link>
      <Link to='/plans'>Plans</Link>
    </div>
  )
}

export default Home;