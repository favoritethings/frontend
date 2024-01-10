import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-[100px] flex justify-center items-center ">
      <div className="flex justify-between max-w-[1200px] min-w-[320px]">
        <Link
          href="/"
          className="text-[30px] font-[300] leading-[160%] tracking-[-1.5px]"
        >
          Heart Place
        </Link>
        <nav className="w-[870px] px-[48px] flex text-[16px] font-[500] text-[#837c7d] tracking-[-0.48px] leading-[180%]">
          <ul className="flex items-center gap-[24px]">
            <li>
              <Link href="/">코스 짜기</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-[24px] text-[16px] font-[500] text-[#b3b2b1] tracking-[-0.48px] leading-[180%]">
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
    </header>
  );
}
