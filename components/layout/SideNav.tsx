import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PLATFORM_NAVIGATION, Icon } from '../../constants';

export const SideNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine which subsystem we are in
  const currentSubsystem = PLATFORM_NAVIGATION.find(sys => 
    location.pathname.startsWith(sys.path)
  );

  if (!currentSubsystem) return null;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto flex flex-col h-[calc(100vh-3.5rem)]">
      {/* Sidebar Header/Context */}
      <div className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          {currentSubsystem.label}
        </h2>
      </div>

      <nav className="p-3 space-y-1">
        {currentSubsystem.sidebar.map((item, index) => (
          <div key={index}>
            <div 
              onClick={() => item.path !== '#' && navigate(item.path)}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer group transition-colors ${
                location.pathname === item.path
                  ? 'bg-brand-50 text-brand-900'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {item.icon && (
                <span className={`mr-3 ${location.pathname === item.path ? 'text-brand-500' : 'text-gray-400 group-hover:text-gray-500'}`}>
                   <Icon name={item.icon} />
                </span>
              )}
              {item.label}
            </div>

            {/* Nested Items */}
            {item.children && (
              <div className="mt-1 ml-6 space-y-1 border-l border-gray-100 pl-2">
                {item.children.map((child, cIndex) => (
                   <div 
                   key={cIndex}
                   onClick={() => navigate(child.path)}
                   className={`flex items-center px-3 py-1.5 text-sm rounded-md cursor-pointer transition-colors ${
                     location.pathname === child.path
                       ? 'text-brand-700 bg-gray-50 font-medium'
                       : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                   }`}
                 >
                   {child.label}
                 </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom hint */}
      <div className="mt-auto p-4 border-t border-gray-100">
        <div className="text-xs text-gray-400 text-center">
          {currentSubsystem.label} 子系统 v1.0
        </div>
      </div>
    </aside>
  );
};