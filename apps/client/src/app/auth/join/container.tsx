'use client';

import { useRef } from 'react';
import Form from '@/components/form';
import Steps from '@/components/steps';

const JoinContainer = () => {
  const form = useRef<HTMLFormElement>(null);
  return (
    <form ref={form}>
      <Steps activeStep={0}>
        {({ onHandleNext }) => {
          return [
            <div className="flex flex-col items-center">
              <div className="flex w-[420px] flex-col gap-y-3.5 pb-[52px]">
                <h1 className="whitespace-pre-wrap pb-[18px] text-[24px] font-bold leading-[160%] tracking-[-0.72px]">
                  {`하트플레이스 이용에\n필요한 정보를 입력해주세요.`}
                </h1>
                <Form.Label text="이름" htmlFor="name">
                  <Form.Input
                    id="name"
                    type="text"
                    placeholder="실명으로 입력해주세요"
                    required
                  />
                </Form.Label>
                <Form.Label text="연락처" htmlFor="tel">
                  <Form.Input
                    id="tel"
                    type="tel"
                    placeholder="010-1234-5678"
                    required
                  />
                </Form.Label>
                <Form.Label text="이메일" htmlFor="email">
                  <Form.Input
                    id="email"
                    type="email"
                    placeholder="user@gmail.com"
                    required
                  />
                </Form.Label>
                <Form.Label text="패스워드" htmlFor="password">
                  <Form.Input
                    id="password"
                    type="password"
                    placeholder="최소 8자리 이상/문자, 숫자, 기호 중 2종류 조합 구성"
                    required
                  />
                </Form.Label>
              </div>
              <button
                className="w-[240px] bg-black py-2 text-white"
                onClick={onHandleNext}
              >
                모두 입력하고 다음으로
              </button>
            </div>,
            <div className="flex flex-col items-center">
              <div className="flex w-[420px] flex-col gap-y-3.5 pb-[52px]">
                <h1 className="whitespace-pre-wrap pb-[18px] text-[24px] font-bold leading-[160%] tracking-[-0.72px]">
                  {`@@@님, 아래 정보를 입력하면\n더 정확한 추천을 받을 수 있습니다.`}
                </h1>
                <Form.Label text="닉네임" htmlFor="nickname">
                  <Form.Input
                    id="nickname"
                    type="text"
                    placeholder="최소 2자 최대 6자"
                    required
                  />
                </Form.Label>
                <Form.Label text="성별" htmlFor="gender">
                  <Form.MultiCheckbox
                    options={[
                      { name: '남자', value: '남자' },
                      { name: '여자', value: '여자' },
                      { name: '그외', value: '그외' },
                    ]}
                  />
                </Form.Label>
                <Form.Label text="생년월일" htmlFor="date">
                  <Form.Input
                    id="date"
                    type="text"
                    placeholder="4자리 숫자만 입력해주세요. 예시 : 960313"
                    required
                  />
                </Form.Label>
                <Form.Label text="커플여부">
                  <Form.Input type="checkbox" id="couple" />
                </Form.Label>
              </div>
              <button
                className="w-[240px] bg-black py-2 text-white"
                onClick={onHandleNext}
              >
                스킵하고 가입 완료하기
              </button>
            </div>,
          ];
        }}
      </Steps>
    </form>
  );
};

export default JoinContainer;
