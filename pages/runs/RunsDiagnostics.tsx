import React from 'react';
import { useLocation } from 'react-router-dom';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const RunsDiagnostics: React.FC = () => {
  const location = useLocation();
  const type = location.pathname.split('/').pop() || 'failures';

  const titles: Record<string, string> = {
    'failures': '失败分析 (Failure Analysis)',
    'latency': '延迟分析 (Latency Analysis)',
    'cost': '成本分析 (Cost Analysis)',
    'patterns': '模式分析 (Pattern Analysis)',
  };

  return (
    <SkeletonPage 
      title={titles[type] || '诊断分析'} 
      description="跨 Run 的聚合分析，识别系统性瓶颈与异常模式。"
    >
      <div className="grid grid-cols-2 gap-6">
        {/* Main Chart */}
        <div className="col-span-2 bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-80 flex flex-col">
            <h3 className="text-sm font-bold text-gray-700 mb-4">趋势分析</h3>
            <div className="flex-1 bg-gray-50 border border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400">
                [ 主要图表占位: {type} Trend Over Time ]
            </div>
        </div>

        {/* Breakdown Cards */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-64 flex flex-col">
             <h3 className="text-sm font-bold text-gray-700 mb-4">Top 5 异常来源 (Agents)</h3>
             <div className="space-y-3">
                {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                            <span className="text-sm text-gray-600">FinBot v{i}.0</span>
                        </div>
                        <span className="text-sm font-mono text-gray-900">{24 - i * 5}%</span>
                    </div>
                ))}
             </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-64 flex flex-col">
             <h3 className="text-sm font-bold text-gray-700 mb-4">异常分布 (Error Types)</h3>
             <div className="flex-1 bg-gray-50 border border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400">
                [ 饼图占位 ]
            </div>
        </div>
      </div>
    </SkeletonPage>
  );
};