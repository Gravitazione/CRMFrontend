import rewardGold from '../../../assets/icons/rewardGold.svg';
import rewardSiver from '../../../assets/icons/rewardSiver.svg';
import rewardBronze from '../../../assets/icons/rewardBronze.svg';

const rankImg = [rewardGold, rewardSiver, rewardBronze];

interface User {
  img: string;
  reward: string;
  TypeReward: string;
  group: string;
  TotalCustomer: number;
  sum_Reward: number;
}

interface MaximumRewardProps {
  reward: User[];
}

const MaximumReward: React.FC<MaximumRewardProps> = ({ reward }) => {
  reward.sort((a, b) => b.sum_Reward - a.sum_Reward);
  const topRewards = reward.slice(0, 5);

  return (
    <div className="bg-lightGray shadow-lg w-[1060px] h-[423px]">
      <div className=" flex flex-col items-start justify-start text-[14.05px]">
        <div className="rounded-t-[8.78px] rounded-b-none flex flex-row pt-[35.11637496948242px] px-[35.11637496948242px] pb-[17.55818748474121px] items-start justify-start text-base-8">
          <div className="relative font-light inline-block w-[388.04px] shrink-0 text-black">
            5 อันดับ ของรางวัลที่มีการแลกมากที่สุด
          </div>
        </div>
        <table className="w-full">
        <thead>
          <tr className="flex flex-row items-start justify-center text-center " style={{background:'#8190A0'}}>
            <th className="bg-p-d-gray h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
              <div className="relative text-white">อันดับ</div>
            </th>
            <th className="bg-p-d-gray w-[79.01px] h-[49.16px] flex flex-row p-[17.55818748474121px] box-border items-center justify-center">
              <div className="relative text-white">รูปภาพ</div>
            </th>
            <th className="bg-p-d-gray w-[199.29px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-start">
              <div className="relative text-white">ชื่อของรางวัล</div>
            </th>
            <th className="bg-p-d-gray w-[147.49px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-0 box-border items-center justify-start">
              <div className="relative text-white">ประเภทของรางวัล</div>
            </th>
            <th className="bg-p-d-gray w-[63.21px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-0 box-border items-center justify-start">
              <div className="relative text-white">หมวดหมู่</div>
            </th>
            <th className="bg-p-d-gray w-[105.35px] h-[49.16px] flex flex-row p-[17.55818748474121px] box-border items-center justify-end">
              <div className="relative text-white">จำนวนลูกค้า</div>
            </th>
            <th className="bg-p-d-gray h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-end">
              <div className="relative text-white">ยอดรวมการแลกของรางวัล</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {topRewards.map((reward, index) => (
            <tr className="flex flex-row items-start justify-center">
              <td className="bg-p-white w-[106.23px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
                {index < 3 ? <img src={rankImg[index]} alt={`User ${index + 1}`} /> : <div className="text-black">{index + 1}</div>}
              </td>
              <td className="bg-p-white w-[79.01px] h-[49.16px] flex flex-row box-border items-center justify-center">
                <img className="rounded-full object-cover w-full h-full" alt="" src={reward.img} />
              </td>
              <td className="bg-p-white w-[199.29px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-start">
                <div className="relative font-light text-black">{reward.reward}</div>
              </td>
              <td className="bg-p-white w-[147.49px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-0 box-border items-center justify-start">
                <div className="relative font-light text-black">{reward.TypeReward}</div>
              </td>
              <td className="bg-p-white w-[63.21px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-0 box-border items-center justify-start">
                <div className="relative font-light text-black">{reward.group}</div>
              </td>
              <td className="bg-p-white w-[105.35px] h-[49.16px] flex flex-row p-[17.55818748474121px] box-border items-center justify-end">
                <div className="relative font-light text-black">{reward.TotalCustomer.toLocaleString()}</div>
              </td>
              <td className="bg-p-white w-[232.65px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-end">
                <div className="relative font-light text-black">{reward.sum_Reward.toLocaleString()}</div>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaximumReward;
