import React from 'react';

const MaximumPointCustomer = () => {
  return (
    <div className="bg-red">
      <div className="rounded-3xs bg-p-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start text-base">
        <div className="rounded-t-3xs rounded-b-none flex flex-row pt-10 px-10 pb-5 items-start justify-start text-lg">
          <div className="relative font-light inline-block w-[350px] shrink-0">5 อันดับ ลูกค้าที่มีคะแนนสะสมสูงสุด</div>
        </div>
        <div className="flex flex-row items-start justify-center text-center text-p-white">
          <div className="bg-p-d-gray h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
            <div className="relative">อันดับ</div>
          </div>
          <div className="bg-p-d-gray w-20 h-14" />
          <div className="bg-p-d-gray w-[117px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start text-left">
            <div className="relative">ชื่อ-นามสกุล</div>
          </div>
          <div className="bg-p-d-gray w-[120px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
            <div className="relative">คะแนน</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center">
          <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
            <img className="relative w-[25.12px] h-7" alt="" src="/fluentemojiflat1stplacemedal3.svg" />
          </div>
          <div className="bg-p-white w-20 h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
            <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
          </div>
          <div className="bg-p-white w-[117px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
            <div className="relative font-light">Lorem ipsum</div>
          </div>
          <div className="bg-p-white w-[120px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end text-center">
            <div className="relative font-light">300000</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center">
          <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
            <img className="relative w-[25.12px] h-7" alt="" src="/group6.svg" />
          </div>
          <div className="bg-p-white w-20 h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
            <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
          </div>
          <div className="bg-p-white w-[117px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
            <div className="relative font-light">Lorem ipsum</div>
          </div>
          <div className="bg-p-white w-[120px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end text-center">
            <div className="relative font-light">100000</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center">
          <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
            <img className="relative w-[25.12px] h-7" alt="" src="/group11.svg" />
          </div>
          <div className="bg-p-white w-20 h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
            <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
          </div>
          <div className="bg-p-white w-[117px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
            <div className="relative font-light">Lorem ipsum</div>
          </div>
          <div className="bg-p-white w-[120px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end text-center">
            <div className="relative font-light">80000</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center text-center">
          <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center text-lg text-p-d-gray">
            <div className="relative font-light">4</div>
          </div>
          <div className="bg-p-white w-20 h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
            <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
          </div>
          <div className="bg-p-white w-[117px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start text-left">
            <div className="relative font-light">Lorem ipsum</div>
          </div>
          <div className="bg-p-white w-[120px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
            <div className="relative font-light">50000</div>
          </div>
        </div>
        <div className="rounded-t-none rounded-b-3xs flex flex-row items-center justify-center text-center">
          <div className="w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center text-lg text-p-d-gray">
            <div className="relative font-light">5</div>
          </div>
          <div className="w-20 h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
            <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
          </div>
          <div className="w-[117px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start text-left">
            <div className="relative font-light">Lorem ipsum</div>
          </div>
          <div className="w-[120px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
            <div className="relative font-light">42000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaximumPointCustomer;
