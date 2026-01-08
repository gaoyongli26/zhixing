import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopNav } from './TopNav';
import { SideNav } from './SideNav';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <SideNav />
        <main className="flex-1 overflow-y-auto relative p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};