import React from 'react';
import CriticalTable from './CriticalTable/CriticalTable';
import NegativeTable from './NegativeTable/NegativeTable';
import TeachersTopCard from './TeachersTopCard/TeachersTopCard';

const Important = () => {
  return (
    <div>
      <CriticalTable />
      <NegativeTable />
      <TeachersTopCard />
    </div>
  );
};

export default Important;
