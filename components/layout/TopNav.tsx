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
    <header className="h-14 bg-slate-900 text-white flex items-center justify-between px-4 sticky top-0 z-50 shadow-md">
      {/* Left: Logo & Main Navigation */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-brand-500 rounded-md flex items-center justify-center text-white font-bold">
            <Icon name="cube" className="w-6 h-6" />
          </div>
          <span className="font-semibold text-lg tracking-tight">RunPlatform</span>
        </div>

        <nav className="flex items-center space-x-1 ml-4">
          {PLATFORM_NAVIGATION.map((subsystem) => (
            <button
              key={subsystem.id}
              onClick={() => navigate(subsystem.path)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors duration-200 ${
                isActive(subsystem.path)
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {subsystem.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Right: Context & User Actions */}
      <div className="flex items-center space-x-4">
        {/* Project Selector */}
        <div className="hidden md:flex items-center space-x-2 bg-slate-800 px-3 py-1 rounded border border-slate-700 cursor-pointer hover:bg-slate-700">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-sm text-slate-200">Acme Corp / 生产环境</span>
          <Icon name="chevron-down" className="w-3 h-3 text-slate-400" />
        </div>

        {/* Search */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="search" className="w-4 h-4 text-slate-500" />
          </div>
          <input
            type="text"
            placeholder="搜索执行 (Runs)、智能体..."
            className="bg-slate-800 text-sm text-slate-200 border border-slate-700 rounded pl-9 pr-4 py-1 w-64 focus:outline-none focus:border-brand-500 transition-all"
          />
        </div>

        {/* Create Button */}
        <button className="bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium px-4 py-1.5 rounded flex items-center shadow-sm transition-all">
          <span>新建</span>
          <Icon name="chevron-down" className="ml-2 w-3 h-3 opacity-75" />
        </button>

        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-500 to-blue-500 border border-slate-600 cursor-pointer"></div>
      </div>
    </header>
  );
};