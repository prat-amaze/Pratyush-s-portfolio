import React from 'react';
import { CollaborateGrid } from './CollaborateGrid';

const Collaborate = () => {
  return (
    <>
      <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-5 pt-[60px]">
        Wanna Collaborate?
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center py-10">
        <CollaborateGrid />
      </div>
    </>
  );
};

export default Collaborate;
