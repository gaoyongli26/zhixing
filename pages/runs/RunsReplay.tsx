import React from 'react';
import { useLocation } from 'react-router-dom';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const RunsReplay: React.FC = () => {
    const location = useLocation();
    const type = location.pathname.split('/').pop() || 'history';

  return (
    <SkeletonPage 
      title="回放与恢复 (Replay & Recovery)" 
      description="Run 的确定性回放、故障恢复与批量重跑管理。"
    >
      <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">最近回放任务</h3>
                  <div className="space-y-4">
                      {[1, 2].map(i => (
                          <div key={i} className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                              <div className="flex justify-between items-start">
                                  <div>
                                      <div className="font-medium text-gray-900">Batch Rerun: Financial Reports Q3</div>
                                      <div className="text-xs text-gray-500 mt-1">Started by admin • 10 runs included</div>
                                  </div>
                                  <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">Processing</span>
                              </div>
                              <div className="mt-3 w-full bg-gray-200 rounded-full h-1.5">
                                  <div className="bg-blue-600 h-1.5 rounded-full" style={{width: '45%'}}></div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          <div className="col-span-1 space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">发起重跑</h3>
                  <div className="space-y-4">
                      <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:border-brand-500 hover:ring-1 hover:ring-brand-500 transition-all">
                          <div className="font-medium text-gray-900">按 ID 重跑</div>
                          <div className="text-xs text-gray-500 mt-1">输入 Run ID 列表进行回放</div>
                      </button>
                      <button className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:border-brand-500 hover:ring-1 hover:ring-brand-500 transition-all">
                          <div className="font-medium text-gray-900">按 View 重跑</div>
                          <div className="text-xs text-gray-500 mt-1">重跑 "Failed Runs" 视图中的所有项</div>
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </SkeletonPage>
  );
};