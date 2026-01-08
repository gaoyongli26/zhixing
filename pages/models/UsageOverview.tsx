import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';
import { useNavigate } from 'react-router-dom';

export const UsageOverview: React.FC = () => {
    const navigate = useNavigate();

    return (
        <SkeletonPage title="使用概览 (Usage Overview)" description="平台整体推理资源的使用情况聚合。仅用于态势感知，不用于决策。">
            
            {/* Fact-First Principle */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            <strong>定位说明：</strong> 此页面展示聚合的 Token 事实。
                            <br/>
                            如需排查具体 Run 的异常，请点击相应指标跳转至 <span className="font-mono font-bold">Runs Explorer</span>。
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mb-8">
                 {[
                     { label: '总执行数 (24h)', val: '14,205', col: 'text-gray-900', filter: 'status=all' },
                     { label: '输入 Token 总量', val: '1.2B', col: 'text-blue-600', filter: 'sort=input_tokens' },
                     { label: '输出 Token 总量', val: '450M', col: 'text-purple-600', filter: 'sort=output_tokens' },
                     { label: '平均 Token / Run', val: '1,150', col: 'text-gray-900', filter: 'sort=avg_tokens' },
                 ].map((stat, i) => (
                     <div 
                        key={i} 
                        className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center cursor-pointer hover:border-brand-300 transition-colors"
                        onClick={() => navigate(`/runs/explorer?${stat.filter}`)}
                     >
                         <div className={`text-3xl font-bold ${stat.col} mb-2`}>{stat.val}</div>
                         <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                     </div>
                 ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm h-96 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900">Token 消耗趋势 (过去7天)</h3>
                    <select className="border border-gray-300 rounded text-sm p-1">
                        <option>所有模型</option>
                        <option>gpt-4o</option>
                        <option>claude-3-opus</option>
                    </select>
                </div>
                <div className="flex-1 border border-dashed border-gray-200 bg-gray-50 rounded flex items-center justify-center text-gray-400">
                    [ 图表占位: Input vs Output Tokens ]
                </div>
            </div>
        </SkeletonPage>
    );
};