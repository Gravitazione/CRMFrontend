import MainLayout from '../../MainLayout';
import GenderCustomer from './components/GenderCustomer';
import MaximumPointCustomer from './components/MaximumPointCustomer';
import MaximumReward from './components/MaximumReward';
import PointCustomer from './components/PointCustomer';
import ProvinceCustomer from './components/ProvinceCustomer';
import TotalCustomer from './components/TotalCustomer';
import TotalPointCustomer from './components/TotalPointCustomer';
import TotalReward from './components/TotalReward';

const Summary = () => {
  const data = [8, 2]; 
  return (
    <MainLayout>
      <div className="">
        <div className="w-full">
          <div className=" items-start justify-start gap-4 text-center grid grid-rows-2 grid-flow-col pt-2">
            <div className="row-span-3">
              <TotalCustomer data={data}/>
            </div>
            <div className="col-span-2">
              <PointCustomer />
            </div>
            <div className="col-span-2">
              <TotalPointCustomer />
            </div>
          </div>
          <div className="items-start justify-start gap-4 grid grid-rows-1 grid-flow-col">
            <MaximumPointCustomer />
            <GenderCustomer />
            <TotalReward data={data}/>
          </div>
          <div className="items-start justify-start gap-4 grid grid-rows-1 grid-flow-col pt-4 pb-6">
            <div className="col-span-1">
              <MaximumReward />
            </div>
            <ProvinceCustomer />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Summary;
