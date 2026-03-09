import React from 'react';
import { ActivityGrid } from './ActivityGrid';

const Upto = () => {
  return (
    <div>
      <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-16 pt-[60px]">
        What am I upto?
      </h1>
      <ActivityGrid />
    </div>
  );
};

export default Upto;
