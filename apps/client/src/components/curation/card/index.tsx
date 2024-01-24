import { Spot } from "../types";

const CurationCard = ({ spotList }: { spotList: Spot[] }) => {
  return (
    <div className="grid grid-cols-3 gap-[8px]">
      {spotList.map((item, i) => {
        return (
          <div key={i} className="mb-[20px] flex flex-col gap-[20px] p-[16px]">
            <img
              src={item.featured_image}
              alt="spot"
              className="h-[200px] w-[362px] object-cover"
            />
            <div className="flex justify-between">
              <p className="text-[24px] font-[700] leading-[160%] tracking-[-0.72px]">
                {item.title}
              </p>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                >
                  <path
                    d="M18.5926 23.987L18.3951 24.4464L18.5926 23.987C18.2143 23.8244 17.7858 23.8244 17.4075 23.987L17.605 24.4464L17.4075 23.987L11.9712 26.3247C11.6412 26.4666 11.2737 26.2245 11.2737 25.8653V9.6676C11.2737 9.39146 11.4975 9.1676 11.7737 9.1676H24.2264C24.5025 9.1676 24.7264 9.39146 24.7264 9.6676V25.8653C24.7264 26.2245 24.3589 26.4666 24.0289 26.3247L18.5926 23.987Z"
                    stroke="#1C1718"
                  />
                </svg>
              </button>
            </div>
            <p className="h-[60px] text-[16px] font-[400] leading-[180%] tracking-[-0.48px] text-[#b4b1b2]">
              {item.subTitle}
            </p>
            <div className="flex gap-[8px]">
              {item.tagList.map((tags) => {
                return (
                  <div
                    key={tags.id}
                    className="w-fit rounded-[30px] bg-[#E7E4E5] px-[12px] text-[12px] font-[400] leading-[180%] tracking-[-0.36px] text-[#b4b1b2]"
                  >
                    {tags.name}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CurationCard;
