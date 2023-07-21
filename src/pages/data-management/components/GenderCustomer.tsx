import React from 'react';

const GenderCustomer = () => {
  return (
    <div className="bg-primary-content">
      <div className="rounded-3xs bg-p-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-col p-10 items-center justify-start gap-[20px]">
        <div className="w-[350px] flex flex-row items-start justify-start">
          <div className="relative font-light inline-block w-[350px] shrink-0">จำนวนลูกค้าทั้งหมด</div>
        </div>
        <div className="w-[350px] flex flex-row items-start justify-between">
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <div className="w-20 h-[203px] flex flex-row items-center justify-center">
              <img className="relative w-[99px] h-[182px]" alt="" src="/ionwoman1.svg" />
            </div>
            <div className="flex flex-col items-center justify-start gap-[10px]">
              <div className="relative font-light">หญิง</div>
              <b className="relative text-5xl">25%</b>
            </div>
          </div>
          <div className="w-[78px] flex flex-col items-center justify-start gap-[20px]">
            <div className="w-20 h-[203px] flex flex-row items-center justify-start">
              <img className="relative w-20 h-[182px]" alt="" src="/ionman1.svg" />
            </div>
            <div className="flex flex-col items-center justify-start gap-[10px]">
              <div className="relative font-light">ชาย</div>
              <b className="relative text-5xl">25%</b>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <div className="w-20 h-[203px] flex flex-row py-[34px] px-0 box-border items-center justify-center">
              <img className="relative w-28 h-28" alt="" src="/biarrowthroughheartfill1.svg" />
            </div>
            <div className="flex flex-col items-center justify-start gap-[10px]">
              <div className="relative font-light">ไม่ระบุเพศ</div>
              <b className="relative text-5xl">50%</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderCustomer;
