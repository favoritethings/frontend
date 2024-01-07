import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="w-[870px] px-[48px] flex gap-[24px] text-[16px] font-[500] text-[#837c7d] tracking-[-0.48px] leading-[180%]">
      <ul>
        <li>
          <Link href="/">코스 짜기</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
