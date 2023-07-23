import React from 'react';
import lineVerticalblack from '../../../assets/icons/lineVertical-black.svg';

interface TotalPointCustomerProps {
  totalPointCustomer: {
    total_Collectpoints: number;
    number_of_timesPoints: number;
  };
}

const TotalPointCustomer: React.FC<TotalPointCustomerProps> = ({ totalPointCustomer }) => {
  const { total_Collectpoints, number_of_timesPoints } = totalPointCustomer;
  return (
    <div className=" w-[1064px] h-[204px] bg-lightGray shadow-lg">
      <div className=" flex flex-row p-10 items-start justify-start gap-[10px]">
        <div className="w-[482px] flex flex-col items-center justify-start gap-[20px]">
          <div className="text-left font-light w-[482px] text-black">จำนวนลูกค้าที่สะสมคะแนน</div>
          <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
            <b className="relative text-black">{total_Collectpoints.toLocaleString()}</b>
            <div className="relative text-lg font-light text-black">คน</div>
          </div>
        </div>
        <img
                className="relative w-[0.88px] h-[105.79px]"
                alt=""
                src={lineVerticalblack}
              />
        <div className="w-[482px] flex flex-col items-center justify-start gap-[20px]">
          <div className="text-left font-light w-[482px] text-black">จำนวนครั้งที่สะสมคะแนน</div>
          <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
            <b className="relative text-black">{number_of_timesPoints.toLocaleString()}</b>
            <div className="relative text-lg font-light text-black">ครั้ง</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPointCustomer;
