import React, { useState } from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';
import { useLocation } from 'react-router-dom';

// MOCK DATA
const AGENTS = [
    { id: 'agt_01', name: 'FinBot', version: 'v1.2.0', status: '已发布', bundle: 'Finance_Bundle_v2' },
    { id: 'agt_02', name: 'SupportAI', version: 'v2.0.1', status: '草稿', bundle: 'Support_Bundle_v5' },
];

export const DesignAgentsList: React.FC = () => {
  return (
    <SkeletonPage title="智能体列表 (Agent List)" description="定义平台中的决策主体，配置其角色、目标与能力边界。">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                <h3 className="text-sm font-medium text-gray-700">所有智能体</h3>
                <button className="px-3 py-1.5 bg-brand-600 text-white rounded text-sm hover:bg-brand-700">创建智能体</button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">名称</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">版本</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">绑定提示词包</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {AGENTS.map(agent => (
                        <tr key={agent.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-600">{agent.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{agent.version}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${agent.status === '已发布' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                    {agent.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{agent.bundle}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <a href="#" className="text-brand-600 hover:text-brand-900 mr-3">编辑</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">克隆</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </SkeletonPage>
  );
};

export const DesignAgentDetail: React.FC = () => {
    const [activeTab, setActiveTab] = useState('config');
    const tabMap: Record<string, string> = {
        'config': '基础配置',
        'role': '角色与目标',
        'skills': '允许技能',
        'policy': '风险策略'
    };

    return (
        <SkeletonPage title="FinBot (v1.2.0)" description="财务分析助手，负责生成季度报告摘要。">
            <div className="space-y-6">
                 {/* Basic Info */}
                 <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                     <div className="grid grid-cols-3 gap-6">
                         <div>
                             <label className="block text-sm font-medium text-gray-700">名称</label>
                             <div className="mt-1 text-sm text-gray-900">FinBot</div>
                         </div>
                         <div>
                             <label className="block text-sm font-medium text-gray-700">负责人</label>
                             <div className="mt-1 text-sm text-gray-900">财务团队</div>
                         </div>
                         <div>
                             <label className="block text-sm font-medium text-gray-700">描述</label>
                             <div className="mt-1 text-sm text-gray-900">分析 Q3 报告并生成摘要。</div>
                         </div>
                     </div>
                 </div>

                 {/* Config Tabs */}
                 <div className="bg-white border border-gray-200 rounded-lg shadow-sm min-h-[400px] flex flex-col">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
                            {['config', 'role', 'skills', 'policy'].map(tabKey => (
                                <button
                                    key={tabKey}
                                    onClick={() => setActiveTab(tabKey)}
                                    className={`${activeTab === tabKey ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                >
                                    {tabMap[tabKey]}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="p-6 flex-1 bg-gray-50 flex items-center justify-center border-dashed border-2 border-gray-200 m-4 rounded">
                         <div className="text-center">
                             <h3 className="text-sm font-medium text-gray-900">{tabMap[activeTab]} 面板</h3>
                             <p className="mt-1 text-sm text-gray-500">此区域用于配置 Agent 的 {tabMap[activeTab]}，定义“如何决策”。</p>
                             <p className="text-xs text-gray-400 mt-2">(设计态资产，不展示运行日志)</p>
                         </div>
                    </div>
                 </div>
            </div>
        </SkeletonPage>
    );
}

export const DesignAgentVersions: React.FC = () => {
    return (
        <SkeletonPage title="版本管理 (Agent Versions)" description="FinBot 的历史版本快照与变更记录。">
             <div className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                 {[1, 2, 3].map(v => (
                     <div key={v} className="p-4 flex items-center justify-between hover:bg-gray-50">
                         <div>
                             <div className="flex items-center gap-2">
                                 <span className="font-mono font-bold text-gray-900">v1.{v}.0</span>
                                 {v===3 && <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">当前版本</span>}
                             </div>
                             <div className="text-sm text-gray-500 mt-1">更新人: admin，时间: 2023-10-{20+v}</div>
                         </div>
                         <div className="flex space-x-3">
                             <button className="text-sm text-gray-600 hover:text-gray-900">差异比对</button>
                             <button className="text-sm text-brand-600 hover:text-brand-900">回滚至此版本</button>
                         </div>
                     </div>
                 ))}
             </div>
        </SkeletonPage>
    )
}