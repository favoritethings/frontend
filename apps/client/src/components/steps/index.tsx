import { Children } from 'react';

interface StepsProps {
  activeStep?: number;
  className?: string;
  children?: React.ReactNode;
}

const Steps = ({ activeStep = 0, className, children }: StepsProps) => {
  return (
    <div className={className}>
      {Children.toArray(children).filter((_, index) => index === activeStep)}
    </div>
  );
};

export default Steps;
