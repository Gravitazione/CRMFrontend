import BannerList from '../../pages/banner/BannerList';
import BannerSetList from '../../pages/banner/BannerSetList';
import BannerGroupList from '../../pages/banner/BannerGroupList';

const BannerPage = [
  {
    path: '/bannerlist',
    element: <BannerList />,
  },
  {
    path: '/bannersetlist',
    element: <BannerSetList />,
  },
  {
    path: '/bannergrouplist',
    element: <BannerGroupList />,
  },
];

export default BannerPage;
