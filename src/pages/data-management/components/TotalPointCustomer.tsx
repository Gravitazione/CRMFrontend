import React from 'react';
import { TotalPointCustomerProps } from '../../../constant/model/interfaces/components/TotalPointCustomer.interfaces'

const TotalPointCustomer: React.FC<TotalPointCustomerProps> = ({ totalPointCustomer }) => {
  const { total_Collectpoints, number_of_timesPoints } = totalPointCustomer;
  return (
    <div className=" w-[1064px] h-[204px] bg-white shadow-lg rounded-xl">
      <div className="flex w-full p-10 text-black">
        <div className="w-[482px] flex flex-col items-center gap-5">
          <div className="text-left font-light w-full">จำนวนลูกค้าที่สะสมคะแนน</div>
          <div className="flex flex-col items-center gap-2.5 text-2xl">
            <b className="font-bold">{total_Collectpoints.toLocaleString()}</b>
            <div className="text-lg font-light">คน</div>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
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
