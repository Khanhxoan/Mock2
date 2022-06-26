import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
const PaginationComponent = () => {
  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);
  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];
  const Next = () => {
    setNum(++num);
  };
  const Back = () => {
    num > 1 && setNum(--num);
  };
  return (
    <div className="flex w-[230px] h-[32px] ">
      <button
        onClick={Back}
        className={`w-[32px] h-[32px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] flex justify-center align-middle
                hover:bg-[#919EAB] hover:text-[#FFD333]
                    `}
      >
        <RiArrowLeftSLine size={20} className="my-auto" />
      </button>
      {pages.map((pg, i) => (
        <button
          key={i}
          onClick={() => setCur(pg.page)}
          className={`w-[32px] h-[32px] ml-[8px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] 
                ${cur === pg.page && " bg-yellow-400" }`}
        >
          {pg.page}
        </button>
      ))}
      <button
        onClick={Next}
        className="w-[32px] h-[32px] ml-[8px] text-center 
                text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px]  hover:bg-[#919EAB] hover:text-[#FFD333] flex justify-center align-middle"
      >
        <RiArrowRightSLine size={20} className="my-auto" />
      </button>
    </div>
  );
};

export default PaginationComponent;
