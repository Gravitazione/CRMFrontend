import React, { useState } from 'react';

import rewardGold from '../../../assets/icons/rewardGold.svg';
import rewardSiver from '../../../assets/icons/rewardSiver.svg';
import rewardBronze from '../../../assets/icons/rewardBronze.svg';

const rankImg = [rewardGold, rewardSiver, rewardBronze];
interface User {
  name: string;
  score: number;
}

interface Props {
  provinceCustomer: User[];
}

const ProvinceCustomer = ({ provinceCustomer }: Props) => {
  provinceCustomer.sort((a, b) => b.score - a.score);
  const topProvince = provinceCustomer.slice(0, 5);

  return (
    <div className="bg-white shadow-lg w-[522px] h-[423px] rounded-xl">
      <div className=" flex flex-col items-start justify-start text-center text-[14.05px]">
        <div className="rounded-t-[8.78px] rounded-b-none flex flex-row pt-[35.11637496948242px] px-[35.11637496948242px] pb-[17.55818748474121px] items-start justify-start text-left text-base-8">
          <div className="relative font-light inline-block w-[388.04px] shrink-0 text-black">
            5 อันดับ จังหวัดที่มีจำนวนลูกค้ามากที่สุด
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="flex flex-row items-start justify-center " style={{ background: '#8190A0' }}>
              <th className="bg-p-d-gray h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
                <div className="relative text-white">อันดับ</div>
              </th>
              <th className="bg-p-d-gray w-[222.11px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-start">
                <div className="relative text-white">จังหวัด</div>
              </th>
              <th className="bg-p-d-gray w-[129.93px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-end">
                <div className="relative text-white">จำนวนลูกค้า</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {topProvince.map((province, index) => (
              <tr className="flex flex-row items-start justify-center">
                <td className="bg-p-white w-[106.23px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center text-black">
                  {index < 3 ? <img src={rankImg[index]} alt={`User ${index + 1}`} /> : <div>{index + 1}</div>}
                </td>
                <td className="bg-p-white w-[222.11px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-start">
                  <div className="relative font-light text-black">{province.name}</div>
                </td>
                <td className="bg-p-white w-[129.93px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-end">
                  <div className="relative font-light text-black">{province.score.toLocaleString()}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProvinceCustomer;
