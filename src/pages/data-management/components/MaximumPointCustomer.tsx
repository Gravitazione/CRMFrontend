import React from 'react';

import rewardGold from '../../../assets/icons/rewardGold.svg';
import rewardSiver from '../../../assets/icons/rewardSiver.svg';
import rewardBronze from '../../../assets/icons/rewardBronze.svg';

const rankImg = [rewardGold, rewardSiver, rewardBronze];
interface MaximumUser {
  name: string;
  img: string;
  score: number;
}

interface MaximumPointCustomerProps {
  data: MaximumUser[];
}

const MaximumPointCustomer: React.FC<MaximumPointCustomerProps> = ({ data }) => {
  const sortedData = [...data].sort((a, b) => b.score - a.score);
  const topUsers = sortedData.slice(0, 5);

  return (
    <div className="bg-white shadow-lg w-[522px] h-[423px] rounded-xl">
      <div className=" flex flex-col items-start justify-start text-[14.05px]">
        <div className="rounded-t-[8.78px] rounded-b-none flex flex-row pt-[35.11637496948242px] px-[35.11637496948242px] pb-[17.55818748474121px] items-start justify-start text-base-8">
          <div className="relative font-light inline-block shrink-0 text-black">
            5 อันดับ ลูกค้าที่มีคะแนนสะสมสูงสุด
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className=" flex flex-row items-start justify-center text-center" style={{ background: '#8190A0' }}>
              <th className="bg-p-d-gray h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
                <div className="relative text-white">อันดับ</div>
              </th>

              <th className="bg-p-d-gray w-[70.23px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
                <div className="relative text-white">รูป</div>
              </th>

              <th className="bg-p-d-gray w-[176.46px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-start text-left">
                <div className="relative text-white">ชื่อ-นามสกุล</div>
              </th>

              <th className="bg-p-d-gray w-[105.35px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-end">
                <div className="relative text-white">คะแนน</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {topUsers.map((user, index) => (
              <tr className="flex flex-row items-start justify-center">
                <td className="bg-p-white w-[106.23px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center text-black">
                  {index < 3 ? <img src={rankImg[index]} alt={`User ${index + 1}`} /> : <div>{index + 1}</div>}
                </td>

                <td className="bg-p-white w-[70.23px] h-[49.16px] flex flex-row py-[17.55818748474121px]  items-center justify-center">
                  <img className="relative w-[22.05px] h-[24.58px] rounded-full" alt="" src={user.img} />
                </td>

                <td className="bg-p-white w-[176.46px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-start">
                  <div className="relative font-light text-black">{user.name}</div>
                </td>

                <td className="bg-p-white w-[105.35px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-end text-center">
                  <div className="relative font-light text-black">{user.score.toLocaleString()}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaximumPointCustomer;
