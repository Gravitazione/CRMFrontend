import { createBrowserRouter } from 'react-router-dom';
import HomePage from './home';
import PreviewPage from './preview';
import DatamanagementPage from './data-management';
import BannerPage from './banner';
import ArticlePage from './article';
import LoginPage from './login';

export const router = createBrowserRouter([
  ...HomePage,
  ...PreviewPage,
  ...DatamanagementPage,
  ...BannerPage,
  ...ArticlePage,
  ...LoginPage
]);
