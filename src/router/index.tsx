import { createBrowserRouter } from 'react-router-dom';
import HomePage from './home';
import App from '../App';
import PreviewPage from './preview';

export const router = createBrowserRouter([
  ...HomePage,
  ...PreviewPage,
  {
    path: '/',
    element: <App />,
  },
]);
