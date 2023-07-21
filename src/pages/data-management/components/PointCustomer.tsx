import React from 'react';

const PointCustomer = () => {
  return (
    <div className="bg-gray">
      <div className="rounded-3xs bg-p-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-row p-10 items-start justify-start gap-[10px] ">
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <div className="relative font-light inline-block ">จำนวนคะแนนทั้งหมด</div>
          <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
            <b className="relative">16,000,000</b>
            <div className="relative text-lg font-light">คะแนน</div>
          </div>
        </div>
        <img className="relative w-px h-[120.5px]" alt="" src="/line-41.svg" />
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <div className="relative font-light inline-block ">คะแนนที่ใช้ไป</div>
          <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
            <b className="relative">10,000,000</b>
            <div className="relative text-lg font-light">คะแนน</div>
          </div>
        </div>
        <img className="relative w-px h-[120.5px]" alt="" src="/line-41.svg" />
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <div className="relative font-light inline-block ">คะแนนคงเหลือ</div>
          <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
            <b className="relative">6,000,000</b>
            <div className="relative text-lg font-light">คะแนน</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointCustomer;
