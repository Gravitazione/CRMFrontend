import React from 'react';

const TotalCustomer = () => {
  return (
    <div className="bg-red">
      <div className="rounded-3xs bg-p-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-col p-11 items-center justify-start gap-[20px]">
        <div className="flex flex-row items-start justify-start text-left">
          <div className="relative font-light inline-block w-[350px] shrink-0">จำนวนลูกค้าทั้งหมด</div>
        </div>
        <div className="relative w-full h-[172px] text-5xl">
          <div className="absolute top-[calc(50%_-_83px)] left-[calc(50%_-_82px)] rounded-[50%] bg-p-blue w-[165px] h-[165px]" />
          <div className="absolute top-[calc(50%_-_83px)] left-[calc(50%_+_84px)] rounded-[50%] bg-p-d-gray w-[166px] h-[167px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
          <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_13px)] flex flex-col items-center justify-start">
            <b className="relative">10</b>
            <div className="relative text-lg font-light">คน</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-[141px]">
          <div className="flex flex-col items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-start gap-[10px] text-left">
              <img className="relative rounded-3xs w-5 h-5" alt="" src="/rectangle-34.svg" />
              <div className="relative font-light">Active</div>
            </div>
            <b className="relative text-5xl text-p-blue">8</b>
            <div className="relative font-light">คน</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-start gap-[10px] text-left">
              <img className="relative rounded-3xs w-5 h-5" alt="" src="/rectangle-311.svg" />
              <div className="relative font-light">Inactive</div>
            </div>
            <b className="relative text-5xl text-p-d-gray">2</b>
            <div className="relative font-light">คน</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCustomer;
