import { type LabelHTMLAttributes, type LegacyRef, forwardRef } from 'react';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  text?: string;
};

const Label = forwardRef(
  (props: LabelProps, ref: LegacyRef<HTMLLabelElement>) => {
    const { text, children, ...rest } = props;

    return (
      <div className="flex gap-4">
        <label
          className="w-[52px] leading-[160%] tracking-[-0.42px] font-medium text-sm"
          ref={ref}
          {...rest}
        >
          {text}
        </label>
        {props.children}
      </div>
    );
  }
);

export default Label;
