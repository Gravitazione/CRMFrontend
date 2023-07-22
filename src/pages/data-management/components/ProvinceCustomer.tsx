import React, { useState } from 'react';

import rewardGold from '../../../assets/icons/rewardGold.svg'
import rewardSiver from '../../../assets/icons/rewardSiver.svg'
import rewardBronze from '../../../assets/icons/rewardBronze.svg'

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

  return <div className="bg-lightGray shadow-lg w-[522px] h-[423px]">

{/* <table>
    <thead>
      <tr>
        <th>อันดับ</th>
        <th>รูปภาพ</th>
        <th>ชื่อ-สกุล</th>
        <th>คะแนน</th>
      </tr>
    </thead>
    <tbody>
      {topUsers.map((user, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td><img src={`path_to_images/image${index + 1}.jpg`}  /></td>
          <td>{user.name}</td>
          <td>{user.score}</td>
        </tr>
      ))}
    </tbody>
  </table> */}


<div className=" flex flex-col items-start justify-start text-center text-[14.05px]">
        <div className="rounded-t-[8.78px] rounded-b-none flex flex-row pt-[35.11637496948242px] px-[35.11637496948242px] pb-[17.55818748474121px] items-start justify-start text-left text-base-8">
          <div className="relative font-light inline-block w-[388.04px] shrink-0">
            5 อันดับ จังหวัดที่มีจำนวนลูกค้ามากที่สุด
          </div>
        </div>
        <div className="flex flex-row items-start justify-center text-p-white">
          <div className="bg-p-d-gray h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
            <div className="relative">อันดับ</div>
          </div>
          <div className="bg-p-d-gray w-[222.11px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-start">
            <div className="relative">จังหวัด</div>
          </div>
          <div className="bg-p-d-gray w-[129.93px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-end">
            <div className="relative">จำนวนลูกค้า</div>
          </div>
        </div>
        {topProvince.map((province, index) => (
        <div className="flex flex-row items-start justify-center">
          <div className="bg-p-white w-[106.23px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
          {index < 3 ? ( 
                <img src={rankImg[index]} alt={`User ${index + 1}`} />
              ) : (
                <div>{index + 1}</div>
              )}
          </div>
          <div className="bg-p-white w-[222.11px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-start">
            <div className="relative font-light">{province.name}</div>
          </div>
          <div className="bg-p-white w-[129.93px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-end">
            <div className="relative font-light">{province.score}</div>
          </div>
        </div>
       
       ))}
      </div>
  </div>;
};

export default ProvinceCustomer;
