import React from 'react';
import { useParams } from 'react-router';

const ProgramPage = () => {
  const {name, description } = useParams();

  return (
    <div className="container mb-5" style={{marginTop:'200px'}}>
      <h1 className="mb-4">{name}</h1>
      <p style={{border: '2px solid gray', borderRadius: '10px', padding: '20px', textAlign: 'justify'}}>{description}</p>
    </div>
  );
};

export default ProgramPage;