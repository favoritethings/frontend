import { useEffect, useState } from 'react';

export interface MultiCheckboxProps {
  options: {
    name: string;
    value: string;
  }[];
  callback?: (value: string) => void;
}

const MultiCheckbox = (props: MultiCheckboxProps) => {
  const { options, callback } = props;
  const [value, setValue] = useState('');

  useEffect(() => {
    if (callback) callback(value);
  }, [value]);

  return (
    <div className="flex gap-3">
      {options.map((option) => (
        <>
          <label
            className={`flex h-[24px] w-[36px] cursor-pointer items-center justify-center text-xs font-medium leading-[180%] tracking-[-0.36px] ${
              value === option.value
                ? 'bg-black text-white'
                : 'bg-slate-200 text-black'
            }`}
            htmlFor={option.name}
          >
            {option.name}
          </label>
          <input
            className="hidden"
            type="checkbox"
            key={option.name}
            id={option.name}
            value={option.value}
            checked={value === option.value}
            onChange={(event) => {
              if (value === event.target.value) {
                setValue('');
                return;
              }
              setValue(event.target.value);
            }}
          />
        </>
      ))}
    </div>
  );
};

export default MultiCheckbox;
