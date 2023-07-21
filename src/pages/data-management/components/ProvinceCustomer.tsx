import React from 'react';

const ProvinceCustomer = () => {
  return (
    <div>
      <div className="rounded-3xs bg-p-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start text-center">
        <div className="rounded-t-3xs rounded-b-none flex flex-row pt-10 px-10 pb-5 items-start justify-start text-left text-lg">
          <div className="relative font-light inline-block w-[442px] shrink-0">
            5 อันดับ จังหวัดที่มีจำนวนลูกค้ามากที่สุด
          </div>
        </div>
        <div className="flex flex-row items-start justify-center text-p-white">
          <div className="bg-p-d-gray h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
            <div className="relative">อันดับ</div>
          </div>
          <div className="bg-p-d-gray w-[253px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
            <div className="relative">จังหวัด</div>
          </div>
          <div className="bg-p-d-gray w-[148px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
            <div className="relative">จำนวนลูกค้า</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center">
          <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
            <img className="relative w-[25.12px] h-7" alt="" src="/fluentemojiflat1stplacemedal11.svg" />
          </div>
          <div className="bg-p-white w-[253px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
            <div className="relative font-light">กรุงเทพมหานคร</div>
          </div>
          <div className="bg-p-white w-[148px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
            <div className="relative font-light">300000</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center">
          <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
            <img className="relative w-[25.12px] h-7" alt="" src="/group31.svg" />
          </div>
          <div className="bg-p-white w-[253px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
            <div className="relative font-light">กระบี่</div>
          </div>
          <div className="bg-p-white w-[148px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
            <div className="relative font-light">100000</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center">
          <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
            <img className="relative w-[25.12px] h-7" alt="" src="/group41.svg" />
          </div>
          <div className="bg-p-white w-[253px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
            <div className="relative font-light">สงขลา</div>
          </div>
          <div className="bg-p-white w-[148px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
            <div className="relative font-light">80000</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center">
          <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center text-lg text-p-d-gray">
            <div className="relative font-light">4</div>
          </div>
          <div className="bg-p-white w-[253px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
            <div className="relative font-light">ยะลา</div>
          </div>
          <div className="bg-p-white w-[148px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
            <div className="relative font-light">50000</div>
          </div>
        </div>
        <div className="rounded-t-none rounded-b-3xs flex flex-row items-center justify-center">
          <div className="w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center text-lg text-p-d-gray">
            <div className="relative font-light">5</div>
          </div>
          <div className="w-[253px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
            <div className="relative font-light">เชียงใหม่</div>
          </div>
          <div className="w-[148px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
            <div className="relative font-light">42000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvinceCustomer;
