import React, { useState } from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';
import { Icon } from '../../constants';

// Mock Data
const SCENARIOS = [
    {
        id: 'scn_01',
        name: 'Weekly Financial Digest',
        description: '自动生成周报摘要并发送邮件',
        bound: 'FinBot v1.2 | Finance_Flow_v2',
        trigger: 'Schedule (Cron)',
        scope: 'Project: Finance_Automation',
        status: 'Published'
    },
    {
        id: 'scn_02',
        name: 'Customer Refund Handler',
        description: '处理用户退款申请的自动化流程',
        bound: 'SupportAI v2.0',
        trigger: 'Event (Webhook)',
        scope: 'Global (All Projects)',
        status: 'Draft'
    },
    {
        id: 'scn_03',
        name: 'Competitor Analysis Report',
        description: '监控竞争对手动态并生成分析报告',
        bound: 'AnalystBot v1.0',
        trigger: 'Manual',
        scope: 'Project: Marketing',
        status: 'Published'
    }
];

export const ScenarioCatalog: React.FC = () => {
    const [viewMode, setViewMode] = useState<'card' | 'list'>('card');

    return (
        <SkeletonPage title="业务场景 (Business Scenarios)" description="定义平台中“允许被部署和运行”的业务场景模板。">
            
            {/* Context Warning */}
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-purple-700">
                            <strong>架构规则：</strong> 这是一个发布后的业务能力清单（Template），不是运行状态页面。
                            <br/>
                            Run 不会直接由此处产生，必须先将 Template 实例化为 <strong>Scenario Instance</strong> 后才能执行。
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <h3 className="text-sm font-medium text-gray-700">业务场景模板</h3>
                        <div className="flex bg-gray-200 rounded p-0.5 gap-0.5">
                            <button
                                onClick={() => setViewMode('card')}
                                className={`p-1.5 rounded transition-all ${viewMode === 'card' ? 'bg-white shadow text-brand-600' : 'text-gray-500 hover:text-gray-700'}`}
                                title="卡片视图"
                            >
                                <Icon name="cube" className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-1.5 rounded transition-all ${viewMode === 'list' ? 'bg-white shadow text-brand-600' : 'text-gray-500 hover:text-gray-700'}`}
                                title="列表视图"
                            >
                                <Icon name="list" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <button className="bg-brand-600 text-white px-3 py-1.5 rounded text-sm hover:bg-brand-700 font-medium">
                        + 定义新场景
                    </button>
                </div>

                {viewMode === 'list' ? (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Scenario Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bound Agent / Workflow</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trigger Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deployed Scope</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">操作</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {SCENARIOS.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-bold text-gray-900">{item.name}</div>
                                        <div className="text-xs text-gray-500">{item.description}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {item.bound}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700 border border-gray-200">{item.trigger}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.scope}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-0.5 rounded text-xs ${item.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-brand-600 hover:text-brand-900 mr-3">详情</button>
                                        {item.status === 'Published' && <button className="text-blue-600 hover:text-blue-900">部署实例</button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SCENARIOS.map((item) => (
                            <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:border-brand-300 transition-all flex flex-col">
                                <div className="p-5 flex-1">
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="text-lg font-bold text-gray-900 line-clamp-1" title={item.name}>{item.name}</h4>
                                        <span className={`px-2 py-0.5 rounded text-xs flex-shrink-0 ${item.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-4 h-10 line-clamp-2">{item.description}</p>
                                    
                                    <div className="space-y-2 text-xs">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Icon name="puzzle" className="w-3 h-3 text-gray-400" />
                                            <span className="truncate">{item.bound}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Icon name="lightning-bolt" className="w-3 h-3 text-gray-400" />
                                            <span>{item.trigger}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Icon name="globe-alt" className="w-3 h-3 text-gray-400" />
                                            <span className="truncate">{item.scope}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-100 px-5 py-3 bg-gray-50 rounded-b-lg flex justify-between items-center">
                                    <button className="text-xs text-gray-500 hover:text-gray-900 font-medium">查看详情</button>
                                    {item.status === 'Published' ? (
                                        <button className="text-xs bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded shadow-sm hover:bg-gray-50 hover:text-blue-600">
                                            部署实例
                                        </button>
                                    ) : (
                                        <button className="text-xs text-gray-400 cursor-not-allowed">
                                            不可部署
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        {/* New Scenario Card */}
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 hover:border-brand-300 hover:text-brand-600 cursor-pointer hover:bg-brand-50 transition-colors min-h-[240px]">
                            <div className="p-3 bg-gray-50 rounded-full mb-3 group-hover:bg-white">
                                <Icon name="template" className="w-6 h-6" />
                            </div>
                            <span className="font-medium text-sm">+ 定义新场景</span>
                        </div>
                    </div>
                )}
            </div>
        </SkeletonPage>
    );
};