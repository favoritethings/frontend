import {
  type InputHTMLAttributes,
  type LegacyRef,
  forwardRef,
  useState,
} from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
  (props: InputProps, ref: LegacyRef<HTMLInputElement>) => {
    const [value, setValue] = useState('');
    /**
     * @description
     * 현재 정확하게 폰트 크기에 맞춰서 auto resize가 되지 않습니다.
     * 이유는 한글 폰트의 width와 영어,숫자 등의 폰트 width가 차이가 있기 때문에 일관성있게 변경을 못하고 있습니다.
     * 이 부분은 추가적인 수정이 필요합니다.
     */
    const width = value.length === 0 ? props.placeholder?.length : value.length;

    return (
      <input
        className={`inline-block border-1 focus:outline-none border-black border-b leading-[160%] tracking-[-0.36px] font-medium text-xs placeholder:font-light`}
        style={{
          width: `${(width ?? 0) + 4.5}ch`,
        }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
