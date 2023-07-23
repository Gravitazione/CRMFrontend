import MainLayout from '../../MainLayout';
import GenderCustomer from './components/GenderCustomer';
import MaximumPointCustomer from './components/MaximumPointCustomer';
import MaximumReward from './components/MaximumReward';
import PointCustomer from './components/PointCustomer';
import ProvinceCustomer from './components/ProvinceCustomer';
import TotalCustomer from './components/TotalCustomer';
import TotalPointCustomer from './components/TotalPointCustomer';
import TotalReward from './components/TotalReward';

import summary_data from './components/Summary.json';

const Summary = () => {
  return (
    <MainLayout>
      <div className="w-full pl-4">
        <div className=" items-start justify-start gap-4 text-center grid grid-rows-2 grid-flow-col pt-2">
          <div className="row-span-3">
            <TotalCustomer data={summary_data.TotalCustomerData} />
          </div>
          <div className="col-span-2">
            <PointCustomer pointCustomer={summary_data.pointCustomer} />
          </div>
          <div className="col-span-2">
            <TotalPointCustomer totalPointCustomer={summary_data.totalPointCustomer} />
          </div>
        </div>
        <div className="items-start justify-start gap-4 grid grid-rows-1 grid-flow-col">
          <MaximumPointCustomer data={summary_data.maximumPointCustomer} />
          <GenderCustomer genderCustomer={summary_data.genderCustomer} />
          <TotalReward data={summary_data.TotalCustomerData} />
        </div>
        <div className="items-start justify-start gap-4 grid grid-rows-1 grid-flow-col pt-4 pb-6">
          <div className="col-span-1">
            <MaximumReward reward={summary_data.reward} />
          </div>
          <ProvinceCustomer provinceCustomer={summary_data.provinceCustomer} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Summary;
