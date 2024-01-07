import React from 'react';

const CurationHeader = () => {
  return (
    <div className="flex justify-between p-[16px]">
      <div className="text-[41px] font-[700] leading-[160%] tracking-[-1.23px] text-[#1C1718]">
        <p>비가 오는 주말엔</p>
        <p>차분한 카페를 추천해요.</p>
      </div>
      <button className="w-[48px] h-[48px] bg-[#E7E4E5] rounded-full">
        retry
      </button>
    </div>
  );
};

export default CurationHeader;
