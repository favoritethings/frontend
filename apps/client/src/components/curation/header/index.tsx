const CurationHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between p-[16px]">
      <div className="text-[41px] font-[700] leading-[160%] tracking-[-1.23px] text-[#1C1718]">
        {title}
      </div>
      <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 5.02576V1.02576L7 6.02576L12 11.0258V7.02576C13.5913 7.02576 15.1174 7.6579 16.2426 8.78312C17.3679 9.90833 18 11.4345 18 13.0258C18 14.6171 17.3679 16.1432 16.2426 17.2684C15.1174 18.3936 13.5913 19.0258 12 19.0258C10.4087 19.0258 8.88258 18.3936 7.75736 17.2684C6.63214 16.1432 6 14.6171 6 13.0258H4C4 15.1475 4.84285 17.1823 6.34315 18.6826C7.84344 20.1829 9.87827 21.0258 12 21.0258C14.1217 21.0258 16.1566 20.1829 17.6569 18.6826C19.1571 17.1823 20 15.1475 20 13.0258C20 10.904 19.1571 8.86919 17.6569 7.3689C16.1566 5.86861 14.1217 5.02576 12 5.02576Z"
            fill="#1C1718"
          />
        </svg>
      </button>
    </div>
  );
};

export default CurationHeader;
