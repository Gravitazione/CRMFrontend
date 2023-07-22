import React from 'react';

import iconman from '../../../assets/icons/iconman.svg';
import iconwoman from '../../../assets/icons/iconwoman.svg';
import arrowheart from '../../../assets/icons/arrowheart.svg';

interface GenderCustomerProps {
  genderCustomer: {
    women: number;
    Men: number;
    unknown_gender: number;
  };
}

const GenderCustomer: React.FC<GenderCustomerProps> = ({ genderCustomer }) => {
  const { women, Men, unknown_gender } = genderCustomer;
  return (
    <div className="bg-lightGray shadow-lg w-[522px] h-[423px]">
      <div className=" flex flex-col p-10 items-center justify-start gap-[20px]">
        <div className="w-[440px] flex flex-row items-start justify-start">
          <div className="relative font-light inline-block w-[440px] shrink-0">จำนวนลูกค้าทั้งหมด</div>
        </div>
        <div className="w-[442px] flex flex-row items-start justify-between">
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <div className="w-20 h-[203px] flex flex-row items-center justify-center">
              <img className="relative w-[99px] h-[182px]" alt="" src={iconwoman} />
            </div>
            <div className="flex flex-col items-center justify-start gap-[10px]">
              <div className="relative font-light">หญิง</div>
              <b className="relative text-5xl">{women}%</b>
            </div>
          </div>
          <div className="w-[78px] flex flex-col items-center justify-start gap-[20px]">
            <div className="w-20 h-[203px] flex flex-row items-center justify-start">
              <img className="relative w-20 h-[182px]" alt="" src={iconman} />
            </div>
            <div className="flex flex-col items-center justify-start gap-[10px]">
              <div className="relative font-light">ชาย</div>
              <b className="relative text-5xl">{Men}%</b>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <div className="w-20 h-[203px] flex flex-row py-[34px] px-0 box-border items-center justify-center">
              <img className="relative w-28 h-28" alt="" src={arrowheart} />
            </div>
            <div className="flex flex-col items-center justify-start gap-[10px]">
              <div className="relative font-light">ไม่ระบุเพศ</div>
              <b className="relative text-5xl">{unknown_gender}%</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderCustomer;
