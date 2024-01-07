import React from 'react';
import CurationHeader from './header/page';
import CurationCard from './card/page';

const Curation = () => {
  return (
    <div className="mx-auto w-[1200px]">
      <CurationHeader />
      <CurationCard />
    </div>
  );
};

export default Curation;
