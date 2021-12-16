import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <Link to={`/pricing`}>
        {' '}
        <Button variant="contained">Pricing</Button>
      </Link>
    </div>
  );
};

export default Landing;
