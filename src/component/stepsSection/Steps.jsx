/* eslint-disable react/no-array-index-key */
import React from 'react';
import { steps } from '../../data/homeData';
import StepsBody from './StepsBody';

function Steps() {
  return (
    <section id="steps" className="py-20 border-t-4 border-primary/50">
      <div className="container">
        <h2 className="text-2xl text-dark font-bold text-center w-full mb-8 md:mb-16 md:text-3xl lg:text-5xl">
          {steps.title}
        </h2>
        <div
          className="flex flex-wrap gap-y-12 lg:gap-y-2"
        >
          {
            steps.stepsBody.map((step, index) => (
              <StepsBody step={step} key={index} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Steps;