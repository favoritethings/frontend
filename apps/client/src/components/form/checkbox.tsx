import { useState, type InputHTMLAttributes, useEffect } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  callback?: (value: string | boolean) => void;
};

const Checkbox = (props: InputProps) => {
  const { id, callback, ...restProps } = props;
  const [checked, set] = useState(false);

  useEffect(() => {
    if (callback) callback(checked);
  }, [checked]);

  return (
    <div>
      <label
        className={`box-border flex h-[16px] w-[16px] border border-black ${
          checked ? 'bg-black' : 'bg-white'
        } cursor-pointer items-center justify-center`}
        htmlFor={id}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
          >
            <path
              d="M2.58339 5.78847L0.253906 3.4423L0.612873 3.08333L2.58339 5.03718L7.38724 0.25L7.74621 0.625634L2.58339 5.78847Z"
              fill="white"
            />
          </svg>
        )}
      </label>
      <input
        className="hidden"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(event) => set(event.target.checked)}
        {...restProps}
      />
    </div>
  );
};

export default Checkbox;
