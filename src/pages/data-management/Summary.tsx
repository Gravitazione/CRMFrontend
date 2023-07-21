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
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="w-11/12">
          <div className=" items-start justify-start gap-[20px] text-center grid grid-rows-2 grid-flow-col pt-2">
            <div className="row-span-3">
              <TotalCustomer />
            </div>
            <div className="col-span-2">
              <PointCustomer />
            </div>
            <div className="col-span-2">
              <TotalPointCustomer />
            </div>
          </div>
          <div className="items-start justify-start gap-[20px] grid grid-rows-1 grid-flow-col">
            <MaximumPointCustomer />
            <GenderCustomer />
            <TotalReward />
          </div>
          <div className="flex-row items-start justify-start gap-[20px] grid grid-cols-3 pt-4">
            <div className="col-span-2">
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
