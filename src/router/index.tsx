import { createBrowserRouter } from 'react-router-dom';
import HomePage from './home';
import App from '../App';
import PreviewPage from './preview';
import DashboardPage from './dashboard';

export const router = createBrowserRouter([
  ...HomePage,
  ...PreviewPage,
  ...DashboardPage,
  {
    path: '/',
    element: <App />,
  },
]);
