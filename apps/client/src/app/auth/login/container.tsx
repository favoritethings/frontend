'use client';

import Form from '@/components/form';
import Label from '@/components/form/label';
import kakao from '../../../../public/images/kakao.png';
import Image from 'next/image';

const LoginContainer = () => {
  return (
    <form className="flex flex-col items-center">
      <div className="flex w-[300px] flex-col items-center gap-[48px]">
        <h1 className="whitespace-pre-wrap text-[24px] font-bold leading-[160%] tracking-[-0.72px]">
          {`장소를 저장하려면\n로그인이 필요해요.`}
        </h1>
        <div className="flex w-full flex-col gap-4">
          <Label id="email" text="이메일">
            <Form.Input id="email" type="email" />
          </Label>
          <Label id="password" text="패스워드">
            <Form.Input id="password" type="password" />
          </Label>
        </div>
        <div className="flex w-full flex-col gap-3">
          <button className="w-full bg-black py-2">
            <span className="text-[16px] leading-[180%] tracking-[-0.48px] text-white">
              로그인하기
            </span>
          </button>
          <button className="w-full">
            <Image alt="kakao" src={kakao} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginContainer;
