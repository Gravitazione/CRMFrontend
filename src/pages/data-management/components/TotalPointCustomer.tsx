import React from 'react';

interface TotalPointCustomerProps {
  totalPointCustomer: {
    total_Collectpoints: number;
    number_of_timesPoints: number;
  }
}


const TotalPointCustomer: React.FC<TotalPointCustomerProps> = ({ totalPointCustomer }) => {
  const { total_Collectpoints, number_of_timesPoints } = totalPointCustomer;
  return <div className=" w-[1064px] h-[204px] bg-lightGray shadow-lg">
         <div className=" flex flex-row p-10 items-start justify-start gap-[10px]">
              <div className="w-[482px] flex flex-col items-center justify-start gap-[20px]">
                <div className="relative font-light inline-block w-[482px]">
                  จำนวนลูกค้าที่สะสมคะแนน
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
                  <b className="relative">{total_Collectpoints}</b>
                  <div className="relative text-lg font-light">คน</div>
                </div>
              </div>
              <img
                className="relative w-px h-[120.5px]"
                alt=""
                src="/line-4.svg"
              />
              <div className="w-[482px] flex flex-col items-center justify-start gap-[20px]">
                <div className="relative font-light inline-block w-[480px]">
                  จำนวนครั้งที่สะสมคะแนน
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
                  <b className="relative">{number_of_timesPoints}</b>
                  <div className="relative text-lg font-light">ครั้ง</div>
                </div>
              </div>
            </div>
  </div>;
};

export default TotalPointCustomer;