import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 flex h-[100px] w-full items-center justify-between bg-[#1C1718] px-[50px] text-[14px] font-[300] leading-[180%] tracking-[-0.42px] text-[#B4B1B2]">
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
