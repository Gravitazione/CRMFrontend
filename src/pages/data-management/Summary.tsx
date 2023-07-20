import MainLayout from '../../MainLayout';

const Summary = () => {
  return (
    <MainLayout>
       <div className="relative bg-bg-color w-full h-[1309px] overflow-hidden text-left text-lg text-p-black font-light-web-subparagraph02-prompt-light-16">
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[1450px] flex flex-col items-start justify-start gap-[20px]">
        <div className="flex flex-row items-start justify-start gap-[20px] text-center">
          <div className="rounded-3xs bg-p-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-col p-10 items-center justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start text-left">
              <div className="relative font-light inline-block w-[442px] shrink-0">
                จำนวนลูกค้าทั้งหมด
              </div>
            </div>
            <div className="relative w-[165px] h-[166px] text-5xl">
              <div className="absolute top-[calc(50%_-_83px)] left-[calc(50%_-_82px)] rounded-[50%] bg-p-blue w-[165px] h-[165px]" />
              <div className="absolute top-[calc(50%_-_83px)] left-[calc(50%_+_84px)] rounded-[50%] bg-p-d-gray w-[166px] h-[167px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
              <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_13px)] flex flex-col items-center justify-start">
                <b className="relative">10</b>
                <div className="relative text-lg font-light">คน</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-[141px]">
              <div className="flex flex-col items-center justify-start gap-[10px]">
                <div className="flex flex-row items-center justify-start gap-[10px] text-left">
                  <img
                    className="relative rounded-3xs w-5 h-5"
                    alt=""
                    src="/rectangle-34.svg"
                  />
                  <div className="relative font-light">Active</div>
                </div>
                <b className="relative text-5xl text-p-blue">8</b>
                <div className="relative font-light">คน</div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[10px]">
                <div className="flex flex-row items-center justify-start gap-[10px] text-left">
                  <img
                    className="relative rounded-3xs w-5 h-5"
                    alt=""
                    src="/rectangle-311.svg"
                  />
                  <div className="relative font-light">Inactive</div>
                </div>
                <b className="relative text-5xl text-p-d-gray">2</b>
                <div className="relative font-light">คน</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[23px] text-left">
            <div className="rounded-3xs bg-p-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-row p-10 items-start justify-start gap-[10px]">
              <div className="flex flex-col items-center justify-start gap-[20px]">
                <div className="relative font-light inline-block w-[314px]">
                  จำนวนคะแนนทั้งหมด
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
                  <b className="relative">16,000,000</b>
                  <div className="relative text-lg font-light">คะแนน</div>
                </div>
              </div>
              <img
                className="relative w-px h-[120.5px]"
                alt=""
                src="/line-41.svg"
              />
              <div className="flex flex-col items-center justify-start gap-[20px]">
                <div className="relative font-light inline-block w-[315px]">
                  คะแนนที่ใช้ไป
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
                  <b className="relative">10,000,000</b>
                  <div className="relative text-lg font-light">คะแนน</div>
                </div>
              </div>
              <img
                className="relative w-px h-[120.5px]"
                alt=""
                src="/line-41.svg"
              />
              <div className="flex flex-col items-center justify-start gap-[20px]">
                <div className="relative font-light inline-block w-[314px]">
                  คะแนนคงเหลือ
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
                  <b className="relative">6,000,000</b>
                  <div className="relative text-lg font-light">คะแนน</div>
                </div>
              </div>
            </div>
            <div className="rounded-3xs bg-p-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-row p-10 items-start justify-start gap-[10px]">
              <div className="w-[482px] flex flex-col items-center justify-start gap-[20px]">
                <div className="relative font-light inline-block w-[482px]">
                  จำนวนลูกค้าที่สะสมคะแนน
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
                  <b className="relative">30</b>
                  <div className="relative text-lg font-light">คน</div>
                </div>
              </div>
              <img
                className="relative w-px h-[120.5px]"
                alt=""
                src="/line-41.svg"
              />
              <div className="w-[482px] flex flex-col items-center justify-start gap-[20px]">
                <div className="relative font-light inline-block w-[480px]">
                  จำนวนครั้งที่สะสมคะแนน
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px] text-5xl">
                  <b className="relative">20</b>
                  <div className="relative text-lg font-light">ครั้ง</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[20px]">
          <div className="rounded-3xs bg-p-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start text-base">
            <div className="rounded-t-3xs rounded-b-none flex flex-row pt-10 px-10 pb-5 items-start justify-start text-lg">
              <div className="relative font-light inline-block w-[442px] shrink-0">
                5 อันดับ ลูกค้าที่มีคะแนนสะสมสูงสุด
              </div>
            </div>
            <div className="flex flex-row items-start justify-center text-center text-p-white">
              <div className="bg-p-d-gray h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <div className="relative">อันดับ</div>
              </div>
              <div className="bg-p-d-gray w-20 h-14" />
              <div className="bg-p-d-gray w-[201px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start text-left">
                <div className="relative">ชื่อ-นามสกุล</div>
              </div>
              <div className="bg-p-d-gray w-[120px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
                <div className="relative">คะแนน</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center">
              <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <img
                  className="relative w-[25.12px] h-7"
                  alt=""
                  src="/fluentemojiflat1stplacemedal3.svg"
                />
              </div>
              <div className="bg-p-white w-20 h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
              </div>
              <div className="bg-p-white w-[201px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
                <div className="relative font-light">Lorem ipsum</div>
              </div>
              <div className="bg-p-white w-[120px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end text-center">
                <div className="relative font-light">300000</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center">
              <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <img
                  className="relative w-[25.12px] h-7"
                  alt=""
                  src="/group6.svg"
                />
              </div>
              <div className="bg-p-white w-20 h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
              </div>
              <div className="bg-p-white w-[201px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
                <div className="relative font-light">Lorem ipsum</div>
              </div>
              <div className="bg-p-white w-[120px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end text-center">
                <div className="relative font-light">100000</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center">
              <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <img
                  className="relative w-[25.12px] h-7"
                  alt=""
                  src="/group11.svg"
                />
              </div>
              <div className="bg-p-white w-20 h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
              </div>
              <div className="bg-p-white w-[201px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
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
              <div className="bg-p-white w-[201px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start text-left">
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
              <div className="w-[201px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start text-left">
                <div className="relative font-light">Lorem ipsum</div>
              </div>
              <div className="w-[120px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
                <div className="relative font-light">42000</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xs bg-p-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-col p-10 items-center justify-start gap-[20px]">
            <div className="w-[440px] flex flex-row items-start justify-start">
              <div className="relative font-light inline-block w-[440px] shrink-0">
                จำนวนลูกค้าทั้งหมด
              </div>
            </div>
            <div className="w-[442px] flex flex-row items-start justify-between">
              <div className="flex flex-col items-center justify-start gap-[20px]">
                <div className="w-20 h-[203px] flex flex-row items-center justify-center">
                  <img
                    className="relative w-[99px] h-[182px]"
                    alt=""
                    src="/ionwoman1.svg"
                  />
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px]">
                  <div className="relative font-light">หญิง</div>
                  <b className="relative text-5xl">25%</b>
                </div>
              </div>
              <div className="w-[78px] flex flex-col items-center justify-start gap-[20px]">
                <div className="w-20 h-[203px] flex flex-row items-center justify-start">
                  <img
                    className="relative w-20 h-[182px]"
                    alt=""
                    src="/ionman1.svg"
                  />
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px]">
                  <div className="relative font-light">ชาย</div>
                  <b className="relative text-5xl">25%</b>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[20px]">
                <div className="w-20 h-[203px] flex flex-row py-[34px] px-0 box-border items-center justify-center">
                  <img
                    className="relative w-28 h-28"
                    alt=""
                    src="/biarrowthroughheartfill1.svg"
                  />
                </div>
                <div className="flex flex-col items-center justify-start gap-[10px]">
                  <div className="relative font-light">ไม่ระบุเพศ</div>
                  <b className="relative text-5xl">50%</b>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xs bg-p-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-col p-10 items-center justify-start gap-[20px] text-center">
            <div className="flex flex-row items-start justify-start text-left">
              <div className="relative font-light inline-block w-[442px] shrink-0">
                จำนวนครั้งที่แลกของรางวัล
              </div>
            </div>
            <div className="relative w-[165px] h-[166px] text-5xl">
              <div className="absolute top-[calc(50%_-_83px)] left-[calc(50%_-_82px)] rounded-[50%] bg-p-blue w-[165px] h-[165px]" />
              <div className="absolute top-[calc(50%_-_83px)] left-[calc(50%_+_84px)] rounded-[50%] bg-p-d-gray w-[166px] h-[167px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
              <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_13px)] flex flex-col items-center justify-start">
                <b className="relative">10</b>
                <div className="relative text-lg font-light">คน</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-[141px]">
              <div className="flex flex-col items-center justify-start gap-[10px]">
                <div className="flex flex-row items-center justify-start gap-[10px] text-left">
                  <img
                    className="relative rounded-3xs w-5 h-5"
                    alt=""
                    src="/rectangle-34.svg"
                  />
                  <div className="relative font-light">Active</div>
                </div>
                <b className="relative text-5xl text-p-blue">8</b>
                <div className="relative font-light">คน</div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[10px]">
                <div className="flex flex-row items-center justify-start gap-[10px] text-left">
                  <img
                    className="relative rounded-3xs w-5 h-5"
                    alt=""
                    src="/rectangle-311.svg"
                  />
                  <div className="relative font-light">Inactive</div>
                </div>
                <b className="relative text-5xl text-p-d-gray">2</b>
                <div className="relative font-light">คน</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[20px] text-base">
          <div className="rounded-3xs bg-p-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start">
            <div className="rounded-t-3xs rounded-b-none flex flex-row pt-10 px-10 pb-5 items-start justify-start text-lg">
              <div className="relative font-light inline-block w-[442px] shrink-0">
                5 อันดับ ของรางวัลที่มีการแลกมากที่สุด
              </div>
            </div>
            <div className="flex flex-row items-start justify-center text-center text-p-white">
              <div className="bg-p-d-gray h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <div className="relative">อันดับ</div>
              </div>
              <div className="bg-p-d-gray w-[90px] h-14 flex flex-row p-5 box-border items-center justify-center">
                <div className="relative">รูปภาพ</div>
              </div>
              <div className="bg-p-d-gray w-[227px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
                <div className="relative">ชื่อของรางวัล</div>
              </div>
              <div className="bg-p-d-gray w-[168px] h-14 flex flex-row py-5 px-0 box-border items-center justify-start">
                <div className="relative">ประเภทของรางวัล</div>
              </div>
              <div className="bg-p-d-gray w-[72px] h-14 flex flex-row py-5 px-0 box-border items-center justify-start">
                <div className="relative">หมวดหมู่</div>
              </div>
              <div className="bg-p-d-gray w-[120px] h-14 flex flex-row p-5 box-border items-center justify-end">
                <div className="relative">จำนวนลูกค้า</div>
              </div>
              <div className="bg-p-d-gray h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
                <div className="relative">ยอดรวมการแลกของรางวัล</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center">
              <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <img
                  className="relative w-[25.12px] h-7"
                  alt=""
                  src="/fluentemojiflat1stplacemedal3.svg"
                />
              </div>
              <div className="bg-p-white w-[90px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
              </div>
              <div className="bg-p-white w-[227px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
                <div className="relative font-light">Lorem ipsum</div>
              </div>
              <div className="bg-p-white w-[168px] h-14 flex flex-row py-5 px-0 box-border items-center justify-start">
                <div className="relative font-light">Reward/Privilege</div>
              </div>
              <div className="bg-p-white w-[72px] h-14 flex flex-row py-5 px-0 box-border items-center justify-start">
                <div className="relative font-light">Lorem</div>
              </div>
              <div className="bg-p-white w-[120px] h-14 flex flex-row p-5 box-border items-center justify-end">
                <div className="relative font-light">1,000</div>
              </div>
              <div className="bg-p-white w-[265px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
                <div className="relative font-light">1,000</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center">
              <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <img
                  className="relative w-[25.12px] h-7"
                  alt=""
                  src="/group6.svg"
                />
              </div>
              <div className="bg-p-white w-[90px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
              </div>
              <div className="bg-p-white w-[227px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
                <div className="relative font-light">Lorem ipsum</div>
              </div>
              <div className="bg-p-white w-[168px] h-14 flex flex-row py-5 px-0 box-border items-center justify-start">
                <div className="relative font-light">Lorem ipsum</div>
              </div>
              <div className="bg-p-white w-[72px] h-14 flex flex-row py-5 px-0 box-border items-center justify-start">
                <div className="relative font-light">Lorem</div>
              </div>
              <div className="bg-p-white w-[120px] h-14 flex flex-row p-5 box-border items-center justify-end">
                <div className="relative font-light">800</div>
              </div>
              <div className="bg-p-white w-[265px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
                <div className="relative font-light">800</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center">
              <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <img
                  className="relative w-[25.12px] h-7"
                  alt=""
                  src="/group21.svg"
                />
              </div>
              <div className="bg-p-white w-[90px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
              </div>
              <div className="bg-p-white w-[227px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
                <div className="relative font-light">Lorem ipsum</div>
              </div>
              <div className="bg-p-white w-[168px] h-14 flex flex-row py-5 px-0 box-border items-center justify-start">
                <div className="relative font-light">Lorem ipsum</div>
              </div>
              <div className="bg-p-white w-[72px] h-14 flex flex-row py-5 px-0 box-border items-center justify-start">
                <div className="relative font-light">Lorem</div>
              </div>
              <div className="bg-p-white w-[120px] h-14 flex flex-row p-5 box-border items-center justify-end">
                <div className="relative font-light">700</div>
              </div>
              <div className="bg-p-white w-[265px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
                <div className="relative font-light">700</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center">
              <div className="bg-p-white w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center text-center text-lg text-p-d-gray">
                <div className="relative font-light">4</div>
              </div>
              <div className="bg-p-white w-[90px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center">
                <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
              </div>
              <div className="bg-p-white w-[227px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
                <div className="relative font-light">Lorem ipsum</div>
              </div>
              <div className="bg-p-white w-[168px] h-14 flex flex-row py-5 px-0 box-border items-center justify-start">
                <div className="relative font-light">Lorem ipsum</div>
              </div>
              <div className="bg-p-white w-[72px] h-14 flex flex-row py-5 px-0 box-border items-center justify-start">
                <div className="relative font-light">Lorem</div>
              </div>
              <div className="bg-p-white w-[120px] h-14 flex flex-row p-5 box-border items-center justify-end">
                <div className="relative font-light">500</div>
              </div>
              <div className="bg-p-white w-[265px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
                <div className="relative font-light">500</div>
              </div>
            </div>
            <div className="rounded-t-none rounded-b-3xs flex flex-row items-center justify-center">
              <div className="w-[121px] h-14 flex flex-row py-5 px-10 box-border items-center justify-center text-center text-lg text-p-d-gray">
                <div className="relative font-light">5</div>
              </div>
              <div className="w-[90px] h-14 flex flex-row py-5 px-0 box-border items-center justify-center">
                <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
              </div>
              <div className="w-[227px] h-14 flex flex-row py-5 px-10 box-border items-center justify-start">
                <div className="relative font-light">Lorem ipsum</div>
              </div>
              <div className="w-[168px] h-14 flex flex-row py-5 px-0 box-border items-center justify-start">
                <div className="relative font-light">Lorem ipsum</div>
              </div>
              <div className="w-[72px] h-14 flex flex-row py-5 px-0 box-border items-center justify-start">
                <div className="relative font-light">Lorem</div>
              </div>
              <div className="bg-p-white w-[120px] h-14 flex flex-row p-5 box-border items-center justify-end">
                <div className="relative font-light">300</div>
              </div>
              <div className="bg-p-white w-[265px] h-14 flex flex-row py-5 px-10 box-border items-center justify-end">
                <div className="relative font-light">300</div>
              </div>
            </div>
          </div>
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
                <img
                  className="relative w-[25.12px] h-7"
                  alt=""
                  src="/fluentemojiflat1stplacemedal11.svg"
                />
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
                <img
                  className="relative w-[25.12px] h-7"
                  alt=""
                  src="/group31.svg"
                />
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
                <img
                  className="relative w-[25.12px] h-7"
                  alt=""
                  src="/group41.svg"
                />
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
      </div>
    </div>
    </MainLayout>
  );
};

export default Summary;
