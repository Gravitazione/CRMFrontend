import React from 'react';
import SideBar from './components/sidebar/SideBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <div className="">
          <SideBar />
        </div>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
