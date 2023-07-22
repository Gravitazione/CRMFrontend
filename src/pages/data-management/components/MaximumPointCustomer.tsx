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
    <div className="bg-lightGray shadow-lg w-[522px] h-[423px]">
      <div className=" flex flex-col items-start justify-start text-[14.05px]">
        <div className="rounded-t-[8.78px] rounded-b-none flex flex-row pt-[35.11637496948242px] px-[35.11637496948242px] pb-[17.55818748474121px] items-start justify-start text-base-8">
          <div className="relative font-light inline-block w-[388.04px] shrink-0">
            5 อันดับ ลูกค้าที่มีคะแนนสะสมสูงสุด
          </div>
        </div>
        <div className="flex flex-row items-start justify-center text-center text-p-white">
          <div className="bg-p-d-gray h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
            <div className="relative">อันดับ</div>
          </div>

          <div className="bg-p-d-gray w-[70.23px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
            <div className="relative">รูป</div>
          </div>

          <div className="bg-p-d-gray w-[176.46px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-start text-left">
            <div className="relative">ชื่อ-นามสกุล</div>
          </div>

          <div className="bg-p-d-gray w-[105.35px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-end">
            <div className="relative">คะแนน</div>
          </div>
        </div>

        {topUsers.map((user, index) => (
          <div className="flex flex-row items-start justify-center">
            <div className="bg-p-white w-[106.23px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
              {index < 3 ? <img src={rankImg[index]} alt={`User ${index + 1}`} /> : <div>{index + 1}</div>}
            </div>

            <div className="bg-p-white w-[70.23px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
              <img className="relative w-[22.05px] h-[24.58px]" alt="" src={user.img} />
            </div>

            <div className="bg-p-white w-[176.46px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-start">
              <div className="relative font-light">{user.name}</div>
            </div>

            <div className="bg-p-white w-[105.35px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-end text-center">
              <div className="relative font-light">{user.score}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaximumPointCustomer;
