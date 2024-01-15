'use client';

import { Children, useState } from 'react';

interface StepsProps {
  activeStep?: number;
  className?: string;
  children?: ({
    step,
    onHandleNext,
    onHandlePrev,
    onHandleReset,
  }: {
    step: number;
    onHandleNext: () => void;
    onHandlePrev: () => void;
    onHandleReset: () => void;
  }) => React.ReactElement | React.ReactElement[];
}

const Steps = ({ activeStep = 0, className, children }: StepsProps) => {
  const [step, setStep] = useState(activeStep);

  const onHandleNext = () => setStep((prev) => prev + 1);

  const onHandlePrev = () => setStep((prev) => prev - 1);

  const onHandleReset = () => setStep(0);

  if (!children) return null;

  return (
    <div className={className}>
      {Children.toArray(
        children({ step, onHandleNext, onHandlePrev, onHandleReset })
      ).filter((_, index) => index === step)}
    </div>
  );
};

export default Steps;
