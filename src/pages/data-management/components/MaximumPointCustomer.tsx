import React, { useState } from 'react';

interface User {
  name: string;
  img: string;
  score: number;
}

const MaximumPointCustomer = () => {
  const [users, setUsers] = useState<User[]>([
    { name: 'User 1',img:'', score: 100 },
    { name: 'User 2',img:'', score: 90 },
    { name: 'User 3', img:'',score: 110 },
    // ...
  ]);
  users.sort((a, b) => b.score - a.score);
  const topUsers = users.slice(0, 5);

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
         <img
           className="relative w-[22.05px] h-[24.58px]"
           alt=""
           src={`path_to_images/image${index + 1}.jpg`} 
         />
       </div>
       
       <div className="bg-p-white w-[70.23px] h-[49.16px] flex flex-row py-[17.55818748474121px] px-[35.11637496948242px] box-border items-center justify-center">
         <img
           className="relative w-[21.07px] h-[21.07px]"
           alt=""
           src={`path_to_images/image${index + 1}.jpg`} 
         />
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
  </div>;
};

export default MaximumPointCustomer;
