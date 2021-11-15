import React from 'react';
import SupplementsBody from '../SupplementBody/SupplementBody';
import SupplementHeader from '../SupplementHeader/SupplementHeader';

const Supplements = () => {
  return (
    <div className="suppliment-container">
      <SupplementHeader></SupplementHeader>
      <SupplementsBody></SupplementsBody>
    </div>
  );
};

export default Supplements;