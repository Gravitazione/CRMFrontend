import React from 'react';
import lineVerticalblack from '../../../assets/icons/lineVertical-black.svg';
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
    <div className="bg-white shadow-lg w-[1063px] h-[200px] rounded-xl">
      <div className=" flex flex-row p-10 items-start justify-start gap-[10px]">
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <div className="relative font-light inline-block text-left w-[314px] text-black">จำนวนคะแนนทั้งหมด</div>
          <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
            <b className="relative text-black">{allScore.toLocaleString()}</b>
            <div className="relative text-lg font-light text-black ">คะแนน</div>
          </div>
        </div>
        <img className="relative w-[0.88px] h-[105.79px]" alt="" src={lineVerticalblack} />
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <div className="relative font-light inline-block text-left w-[314px] text-black">คะแนนที่ใช้ไป</div>
          <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
            <b className="relative text-black">{useScore.toLocaleString()}</b>
            <div className="relative text-lg font-light text-black">คะแนน</div>
          </div>
        </div>
        <img className="relative w-[0.88px] h-[105.79px]" alt="" src={lineVerticalblack} />
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <div className="relative font-light inline-block text-left w-[314px] text-black">คะแนนคงเหลือ</div>
          <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
            <b className="relative text-black">{totalScore.toLocaleString()}</b>
            <div className="relative text-lg font-light text-black">คะแนน</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointCustomer;
