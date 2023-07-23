import React from 'react';

interface PointCustomerProps {
  pointCustomer: {
    useScore: number;
    totalScore: number;
    allScore: number;
  };
}

const PointCustomer: React.FC<PointCustomerProps> = ({ pointCustomer }) => {
  const { allScore, useScore, totalScore } = pointCustomer;
  return (
    <div className="bg-lightGray shadow-lg w-[1063px] h-[200px]">
      <div className=" flex flex-row p-10 items-start justify-start gap-[10px]">
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <div className="relative font-light inline-block w-[314px] text-black">จำนวนคะแนนทั้งหมด</div>
          <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
            <b className="relative text-black">{allScore}</b>
            <div className="relative text-lg font-light text-black ">คะแนน</div>
          </div>
        </div>
        <img className="relative w-px h-[120.5px]" alt="" src="/line-4.svg" />
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <div className="relative font-light inline-block w-[315px] text-black">คะแนนที่ใช้ไป</div>
          <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
            <b className="relative text-black">{useScore}</b>
            <div className="relative text-lg font-light text-black">คะแนน</div>
          </div>
        </div>
        <img className="relative w-px h-[120.5px]" alt="" src="/line-4.svg" />
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <div className="relative font-light inline-block w-[314px] text-black">คะแนนคงเหลือ</div>
          <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
            <b className="relative text-black">{totalScore}</b>
            <div className="relative text-lg font-light text-black">คะแนน</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointCustomer;
