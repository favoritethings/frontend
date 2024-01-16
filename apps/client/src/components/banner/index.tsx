const Banner = () => {
  return (
    <aside className="flex h-[845px] w-full flex-col gap-[48px] bg-[#000] p-[60px] text-[#fff]">
      <div className="h-[513px] text-center">image</div>
      <div className="flex flex-col text-center">
        <p className="text-[41px] font-[400] leading-[160%] tracking-[-1.23px]">
          “아, 저번에 거기 좋았었는데.”
        </p>
        <p className="text-[20px] font-[300] leading-[160%] tracking-[-0.6px]">
          ‘뻔한 핫플’에 질리셨다면,
        </p>
        <p className="text-[20px] font-[300] leading-[160%] tracking-[-0.6px]">
          하트 플레이스가 제안한 장소에 방문 해보세요.
        </p>
      </div>
      <button className="mx-auto bg-[#EC2247] px-[24px] py-[16px] text-[20px] font-[600]">
        기억에 남을 장소 추천 받기
      </button>
    </aside>
  );
};

export default Banner;
