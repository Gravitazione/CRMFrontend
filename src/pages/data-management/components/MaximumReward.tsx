import rewardGold from '../../../assets/icons/rewardGold.svg'
import rewardSiver from '../../../assets/icons/rewardSiver.svg'
import rewardBronze from '../../../assets/icons/rewardBronze.svg'

const rankImg = [rewardGold, rewardSiver, rewardBronze];

interface User {
  img:string,
  reward: string,
  TypeReward: string,
  group: string,
  TotalCustomer: number,
  sum_Reward: number,
}

interface MaximumRewardProps {
  reward: User[];

}

const MaximumReward: React.FC<MaximumRewardProps> = ({ reward }) => {

    reward.sort((a, b) => b.sum_Reward - a.sum_Reward);
    const topRewards = reward.slice(0, 5);


  return <div className="bg-lightGray shadow-lg w-[1060px] h-[423px]">
        <div className=" flex flex-col items-start justify-start text-[14.05px]">
        <div className="rounded-t-[8.78px] rounded-b-none flex flex-row pt-[35.11637496948242px] px-[35.11637496948242px] pb-[17.55818748474121px] items-start justify-start text-base-8">
          <div className="relative font-light inline-block w-[388.04px] shrink-0">
            5 อันดับ ของรางวัลที่มีการแลกมากที่สุด
          </div>
        </div>
        <div className="flex flex-row items-start justify-center text-center text-p-white">
          <div className="bg-p-d-gray h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
            <div className="relative">อันดับ</div>
          </div>
          <div className="bg-p-d-gray w-[79.01px] h-[49.16px] flex flex-row p-[17.55818748474121px] box-border items-center justify-center">
            <div className="relative">รูปภาพ</div>
          </div>
          <div className="bg-p-d-gray w-[199.29px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-start">
            <div className="relative">ชื่อของรางวัล</div>
          </div>
          <div className="bg-p-d-gray w-[147.49px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-0 box-border items-center justify-start">
            <div className="relative">ประเภทของรางวัล</div>
          </div>
          <div className="bg-p-d-gray w-[63.21px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-0 box-border items-center justify-start">
            <div className="relative">หมวดหมู่</div>
          </div>
          <div className="bg-p-d-gray w-[105.35px] h-[49.16px] flex flex-row p-[17.55818748474121px] box-border items-center justify-end">
            <div className="relative">จำนวนลูกค้า</div>
          </div>
          <div className="bg-p-d-gray h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-end">
            <div className="relative">ยอดรวมการแลกของรางวัล</div>
          </div>
        </div>
        {topRewards.map((reward, index) => (
        <div className="flex flex-row items-start justify-center">
          <div className="bg-p-white w-[106.23px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
          {index < 3 ? ( 
                <img src={rankImg[index]} alt={`User ${index + 1}`} />
              ) : (
                <div>{index + 1}</div>
              )}
          </div>
          <div className="bg-p-white w-[79.01px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
            <div className="relative rounded-[50%] bg-gainsboro w-[21.07px] h-[21.07px]" />
          </div>
          <div className="bg-p-white w-[199.29px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-start">
            <div className="relative font-light">{reward.reward}</div>
          </div>
          <div className="bg-p-white w-[147.49px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-0 box-border items-center justify-start">
            <div className="relative font-light">{reward.TypeReward}</div>
          </div>
          <div className="bg-p-white w-[63.21px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-0 box-border items-center justify-start">
            <div className="relative font-light">{reward.group}</div>
          </div>
          <div className="bg-p-white w-[105.35px] h-[49.16px] flex flex-row p-[17.55818748474121px] box-border items-center justify-end">
            <div className="relative font-light">{reward.TotalCustomer}</div>
          </div>
          <div className="bg-p-white w-[232.65px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-end">
            <div className="relative font-light">{reward.sum_Reward}</div>
          </div>
        </div>
         ))}
      </div>
  </div>;
};

export default MaximumReward;
