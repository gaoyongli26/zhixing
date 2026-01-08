import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const RunsSettings: React.FC = () => {
  return (
    <SkeletonPage 
      title="设置 (Runs Settings)" 
      description="配置 Run 的数据生命周期、成本监控阈值与默认行为。"
    >
      <div className="max-w-3xl bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-100">
          <div className="p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">数据留存 (Retention)</h3>
              <div className="grid grid-cols-2 gap-6">
                  <div>
                      <label className="block text-sm font-medium text-gray-700">Trace 日志保留期</label>
                      <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm rounded-md border">
                          <option>30 天</option>
                          <option>90 天</option>
                          <option>1 年</option>
                      </select>
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700">审计日志保留期</label>
                      <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm rounded-md border">
                          <option>永久</option>
                          <option>7 年</option>
                      </select>
                  </div>
              </div>
          </div>

          <div className="p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">成本阈值 (Cost Thresholds)</h3>
              <div className="space-y-4">
                  <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-700">单次 Run 成本预警 ($)</div>
                      <input type="number" defaultValue={1.0} className="w-24 border-gray-300 rounded-md border p-2 text-right" />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-700">每日总成本上限 ($)</div>
                      <input type="number" defaultValue={100.0} className="w-24 border-gray-300 rounded-md border p-2 text-right" />
                  </div>
              </div>
          </div>
          
           <div className="p-6 bg-gray-50 flex justify-end">
               <button className="px-4 py-2 bg-brand-600 text-white rounded font-medium hover:bg-brand-700">保存更改</button>
           </div>
      </div>
    </SkeletonPage>
  );
};