import React from 'react';

interface SkeletonPageProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const SkeletonPage: React.FC<SkeletonPageProps> = ({ title, description, children }) => {
  return (
    <div className="max-w-[1600px] mx-auto space-y-6 animate-fade-in">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      
      {children ? (
        children
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col items-center justify-center text-center h-64 border-dashed">
          <div className="rounded-full bg-gray-100 p-3 mb-4">
            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-gray-900">功能开发中</h3>
          <p className="mt-1 text-sm text-gray-500">“{title}” 模块的功能即将上线。</p>
        </div>
      )}
    </div>
  );
};