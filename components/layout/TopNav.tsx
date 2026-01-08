import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PLATFORM_NAVIGATION, Icon } from '../../constants';

export const TopNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <header className="h-14 bg-slate-900 text-white flex items-center justify-between sticky top-0 z-50 shadow-md">
      {/* Left: Logo & Main Navigation */}
      <div className="flex items-center h-full">
        {/* Logo Section: Fixed width w-64 to match SideNav */}
        <div 
          className="w-64 h-full flex items-center px-4 cursor-pointer group hover:bg-slate-800 transition-colors border-r border-slate-800" 
          onClick={() => navigate('/')}
        >
          <div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center text-white shadow-inner group-hover:bg-brand-500 transition-colors shrink-0">
            <Icon name="cube" className="w-5 h-5" />
          </div>
          <div className="flex flex-col justify-center ml-3 overflow-hidden">
            <span className="font-bold text-lg leading-none tracking-wide text-white truncate">知行</span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wider leading-none mt-1 group-hover:text-slate-200 transition-colors truncate">一体化AI应用平台</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center space-x-1 px-4 h-8">
          {PLATFORM_NAVIGATION.map((subsystem) => (
            <button
              key={subsystem.id}
              onClick={() => navigate(subsystem.path)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors duration-200 ${
                isActive(subsystem.path)
                  ? 'bg-slate-800 text-white shadow-sm ring-1 ring-slate-700'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {subsystem.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Right: Context & User Actions */}
      <div className="flex items-center space-x-4 px-4">
        {/* Project Selector */}
        <div className="hidden md:flex items-center space-x-2 bg-slate-800 px-3 py-1 rounded border border-slate-700 cursor-pointer hover:bg-slate-700 transition-colors">
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
          <span className="text-sm text-slate-200">Acme Corp / 生产环境</span>
          <Icon name="chevron-down" className="w-3 h-3 text-slate-400" />
        </div>

        {/* Search */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="search" className="w-4 h-4 text-slate-500 group-focus-within:text-brand-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="全站搜索..."
            className="bg-slate-800 text-sm text-slate-200 border border-slate-700 rounded-md pl-9 pr-4 py-1.5 w-48 focus:w-64 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder-slate-500"
          />
        </div>

        {/* Create Button */}
        <button className="bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium px-4 py-1.5 rounded flex items-center shadow-sm transition-all active:scale-95">
          <span>新建</span>
          <Icon name="chevron-down" className="ml-2 w-3 h-3 opacity-75" />
        </button>

        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-500 to-blue-600 border border-slate-600 cursor-pointer hover:ring-2 hover:ring-slate-500 transition-all shadow-md"></div>
      </div>
    </header>
  );
};