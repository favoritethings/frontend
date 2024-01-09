import React from 'react';
import CurationHeader from './header';
import CurationCard from './card';

const Curation = () => {
  return (
    <div className="mx-auto w-[1200px]">
      <CurationHeader />
      <CurationCard />
    </div>
  );
};

export default Curation;
