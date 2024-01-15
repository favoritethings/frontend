import Link from 'next/link';

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-[100px] bg-[#1C1718] text-[#B4B1B2] text-[14px] font-[300] leading-[180%] tracking-[-0.42px] px-[50px] flex justify-between items-center">
      <div className="flex gap-[24px]">
        <p>ⓒ 하트 플레이스</p>
        <p>ⓒ 2023 FavoriteThings. All rights reserved</p>
      </div>
      <div className="flex gap-[24px]">
        <Link href="/">about</Link>
        <Link href="/">blog</Link>
        <Link href="/">제휴/문의</Link>
      </div>
    </div>
  );
};

export default Footer;
