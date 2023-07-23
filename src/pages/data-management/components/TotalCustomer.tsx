import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import dotblue from '../../../assets/icons/dot-blue.svg';
import dotgray from '../../../assets/icons/dot-gray.svg';

// Register arc element for doughnut chart
Chart.register(ArcElement);

const TotalCustomer = ({ data }: { data: number[] }) => {
  const chartData = {
    labels: ['Red', 'Blue'],
    datasets: [
      {
        label: '# of Votes',
        data: data,
        backgroundColor: ['#045AB3', '#8190A0'],
        borderColor: ['#045AB3', '#8190A0'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-white shadow-lg w-[522px] h-[423px] rounded-xl">
      <div className="rounded-3xs   flex flex-col p-11 items-center justify-start ">
        <div className="flex flex-row items-start justify-start text-left">
          <div className="relative font-light inline-block w-[350px] shrink-0 text-black">จำนวนลูกค้าทั้งหมด</div>
        </div>
        <div className="mt-4" style={{ position: 'relative', width: '45%', height: '45%' }}>
          <Doughnut data={chartData} />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '48%',
              transform: 'translate(-50%, -50%)',
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            <div>{data.reduce((a, b) => a + b, 0)}</div>
            <div>คน</div>
          </div>
        </div>

        <div className=" mt-4 flex flex-row items-start justify-center gap-[141px]">
          <div className="flex flex-col items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-start gap-[10px] text-left">
              <img className="relative rounded-3xs w-5 h-5" alt="" src={dotblue} />
              <div className="relative font-light text-black">Active</div>
            </div>
            <b className="relative text-5xl text-p-blue text-black">8</b>
            <div className="relative font-light text-black">คน</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[10px]">
            <div className="flex flex-row items-center justify-start gap-[10px] text-left">
              <img className="relative rounded-3xs w-5 h-5" alt="" src={dotgray} />
              <div className="relative font-light text-black">Inactive</div>
            </div>
            <b className="relative text-5xl text-p-d-gray text-black">2</b>
            <div className="relative font-light text-black">คน</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCustomer;
