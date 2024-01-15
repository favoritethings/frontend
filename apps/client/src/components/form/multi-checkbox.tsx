import { useState } from 'react';

export interface MultiCheckboxProps {
  options: {
    name: string;
    value: string;
  }[];
}

const MultiCheckbox = ({ options }: MultiCheckboxProps) => {
  const [value, setValue] = useState('');

  return (
    <div className="flex gap-3">
      {options.map((option) => (
        <input
          type="checkbox"
          key={option.name}
          value={option.value}
          checked={value === option.value}
          onChange={(event) => setValue(event.target.value)}
        />
      ))}
    </div>
  );
};

export default MultiCheckbox;
