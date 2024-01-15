import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-[100px] items-center justify-center ">
      <div className="flex min-w-[320px] max-w-[1200px] justify-between">
        <Link
          href="/"
          className="text-[30px] font-[300] leading-[160%] tracking-[-1.5px]"
        >
          Heart Place
        </Link>
        <nav className="flex w-[870px] px-[48px] text-[16px] font-[500] leading-[180%] tracking-[-0.48px] text-[#837c7d]">
          <ul className="flex items-center gap-[24px]">
            <li>
              <Link href="/">코스 짜기</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-[24px] text-[16px] font-[500] leading-[180%] tracking-[-0.48px] text-[#b3b2b1]">
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
    </header>
  );
}
