import React from 'react';

const TotalPointCustomer = () => {
  return (
    <div className="bg-error">
      <div className="rounded-3xs bg-p-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-row p-10 items-start justify-start gap-[10px] w-full">
        <div className="w-[482px] flex flex-col items-center justify-start gap-[20px]">
          <div className="relsative font-light inline-block ">จำนวนลูกค้าที่สะสมคะแนน</div>
          <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
            <b className="relative">30</b>
            <div className="relative text-lg font-light">คน</div>
          </div>
        </div>
        <img className="relative w-px h-[120.5px]" alt="" src="/line-41.svg" />
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <div className="relative font-light inline-block ">จำนวนครั้งที่สะสมคะแนน</div>
          <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
            <b className="relative">20</b>
            <div className="relative text-lg font-light">ครั้ง</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPointCustomer;
