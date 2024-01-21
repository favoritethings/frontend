import { type InputHTMLAttributes, useState, useEffect, useRef } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  callback?: (value: string) => void;
};

const Tel = (props: InputProps) => {
  const { callback } = props;
  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const [{ first, second, third }, set] = useState({
    first: '',
    second: '',
    third: '',
  });

  if (first.length >= 3 && second.length === 0 && third.length === 0)
    secondRef.current?.focus();
  if (first.length >= 3 && second.length >= 4 && third.length === 0)
    thirdRef.current?.focus();

  useEffect(() => {
    if (callback) callback(`${first}${second}${third}`);
  }, [first, second, third]);

  return (
    <div className="flex flex-1 gap-2">
      <input
        ref={firstRef}
        className={`border-1 inline-block w-[24px] border-b border-black text-xs font-medium leading-[160%] tracking-[-0.36px] placeholder:font-light focus:outline-none`}
        type="text"
        placeholder="010"
        value={first}
        onChange={(event) =>
          set((prev) => ({ ...prev, first: event.target.value }))
        }
      />
      <input
        ref={secondRef}
        className={`border-1 inline-bloc w-[32px] border-b border-black text-xs font-medium leading-[160%] tracking-[-0.36px] placeholder:font-light focus:outline-none`}
        type="text"
        placeholder="1234"
        value={second}
        onChange={(event) =>
          set((prev) => ({ ...prev, second: event.target.value }))
        }
      />
      <input
        ref={thirdRef}
        className={`border-1 inline-block w-[32px] border-b border-black text-xs font-medium leading-[160%] tracking-[-0.36px] placeholder:font-light focus:outline-none`}
        type="text"
        placeholder="5678"
        value={third}
        onChange={(event) =>
          set((prev) => ({ ...prev, third: event.target.value }))
        }
      />
    </div>
  );
};

const Default = (props: InputProps) => {
  const { callback } = props;
  const [text, set] = useState('');

  useEffect(() => {
    if (callback) callback(text);
  }, [text]);

  return (
    <input
      className={`border-1 inline-block border-b border-black text-xs font-medium leading-[160%] tracking-[-0.36px] placeholder:font-light focus:outline-none`}
      value={text}
      onChange={(event) => set(event.target.value)}
      {...props}
    />
  );
};

const Input = (props: InputProps) => {
  /**
   * @description
   * 현재 정확하게 폰트 크기에 맞춰서 auto resize가 되지 않습니다.
   * 이유는 한글 폰트의 width와 영어,숫자 등의 폰트 width가 차이가 있기 때문에 일관성있게 변경을 못하고 있습니다.
   * 이 부분은 추가적인 수정이 필요합니다.
   */

  switch (props.type) {
    case 'tel':
      return <Tel {...props} />;
    default:
      return <Default {...props} />;
  }
};

export default Input;
