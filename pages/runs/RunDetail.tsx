import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RunStatus } from '../../types';

export const RunDetail: React.FC = () => {
  const { runId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('trace');

  const tabs = [
    { id: 'trace', label: '追踪 (Trace)' },
    { id: 'evidence', label: '证据 (Evidence)' },
    { id: 'tool-calls', label: '工具调用' },
    { id: 'cost', label: '成本与用量' },
    { id: 'audit', label: '审计日志' },
    { id: 'replay', label: '回放 (Replay)' },
  ];

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span className="cursor-pointer hover:text-gray-900" onClick={() => navigate('/runs/explorer')}>执行 (Runs)</span>
            <span>/</span>
            <span>{runId}</span>
        </div>
        
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    总结 Q3 财务报告
                    <span className="bg-green-100 text-green-800 text-sm px-2.5 py-0.5 rounded-full font-medium">已完成</span>
                </h1>
                <div className="mt-2 flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex gap-1">
                        <span className="font-medium text-gray-700">触发:</span> 调度任务
                    </div>
                    <div className="flex gap-1">
                        <span className="font-medium text-gray-700">Agent:</span> FinBot v1.2
                    </div>
                    <div className="flex gap-1">
                        <span className="font-medium text-gray-700">时长:</span> 12s
                    </div>
                    <div className="flex gap-1">
                        <span className="font-medium text-gray-700">成本:</span> $0.04
                    </div>
                </div>
            </div>
            <div className="flex space-x-3">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">下载日志</button>
                <button className="px-4 py-2 bg-brand-600 text-white rounded text-sm font-medium hover:bg-brand-700">重新运行</button>
            </div>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <nav className="-mb-px flex space-x-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                ${activeTab === tab.id
                  ? 'border-brand-500 text-brand-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content Placeholder */}
      <div className="bg-white rounded-lg border border-gray-200 min-h-[400px] p-6 shadow-sm">
        {activeTab === 'trace' && (
           <div className="space-y-4">
               <div className="h-8 bg-gray-100 rounded w-1/3 animate-pulse"></div>
               <div className="pl-4 border-l-2 border-gray-300 space-y-3">
                    <div className="bg-blue-50 border border-blue-100 rounded p-3">
                        <div className="flex justify-between">
                            <div className="text-xs text-blue-800 font-bold mb-1">Agent: FinBot</div>
                            <div className="text-xs text-gray-400">0s</div>
                        </div>
                        <div className="text-sm text-gray-600">正在分析用户输入...</div>
                    </div>
                    <div className="bg-purple-50 border border-purple-100 rounded p-3 ml-4">
                         <div className="flex justify-between">
                            <div className="text-xs text-purple-800 font-bold mb-1">Tool: DatabaseQuery</div>
                            <div className="text-xs text-gray-400">1.2s</div>
                         </div>
                         <div className="text-sm font-mono text-gray-600 bg-white p-2 rounded border border-purple-100">SELECT * FROM reports WHERE q='Q3'</div>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded p-3">
                        <div className="flex justify-between">
                            <div className="text-xs text-green-800 font-bold mb-1">Output</div>
                            <div className="text-xs text-gray-400">12s</div>
                        </div>
                        <div className="text-sm text-gray-600">摘要生成成功，已返回给用户。</div>
                    </div>
               </div>
           </div>
        )}
        {activeTab !== 'trace' && (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 py-20">
                <p>“{tabs.find(t => t.id === activeTab)?.label}” 的内容将显示在这里。</p>
                <p className="text-sm mt-2">Run-First 扩展架构的一部分。</p>
            </div>
        )}
      </div>
    </div>
  );
};