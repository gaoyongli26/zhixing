import React, { useState } from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';
import { Icon } from '../../constants';

// Mock Data
const CATEGORIES = ['全部', '财务 (Finance)', '客户服务 (Support)', '人力资源 (HR)', 'IT 运维 (Ops)', '市场营销 (Marketing)'];

const SCENARIOS = [
    {
        id: 'scn_01',
        name: '周度财务摘要生成',
        description: '自动聚合 ERP 数据，生成周报摘要并发送邮件给财务总监。',
        category: '财务 (Finance)',
        bound: 'FinBot v1.2 | Finance_Flow_v2',
        trigger: '定时 (Cron)',
        scope: '项目: 财务自动化',
        status: '已发布'
    },
    {
        id: 'scn_02',
        name: '客户退款自动处理',
        description: '根据退款策略自动处理用户提交的退款申请，高额需人工审批。',
        category: '客户服务 (Support)',
        bound: 'SupportAI v2.0',
        trigger: '事件 (Webhook)',
        scope: '全局 (所有项目)',
        status: '草稿'
    },
    {
        id: 'scn_03',
        name: '竞争对手情报分析',
        description: '监控竞争对手新闻与财报，生成 SWOT 分析报告。',
        category: '市场营销 (Marketing)',
        bound: 'AnalystBot v1.0',
        trigger: '手动触发',
        scope: '项目: 市场部',
        status: '已发布'
    },
    {
        id: 'scn_04',
        name: '员工入职指引助手',
        description: '为新员工提供 24/7 的入职 Q&A 与文档指引，集成飞书/钉钉。',
        category: '人力资源 (HR)',
        bound: 'HR_Helper v3.1',
        trigger: '交互式 (Chat)',
        scope: '全局 (所有项目)',
        status: '已发布'
    },
    {
        id: 'scn_05',
        name: '服务器异常日志巡检',
        description: '每小时扫描系统日志，识别异常模式并自动创建 Jira 工单。',
        category: 'IT 运维 (Ops)',
        bound: 'Ops_Guardian v0.9',
        trigger: '定时 (Cron)',
        scope: '项目: 基础设施',
        status: '开发中'
    },
    {
        id: 'scn_06',
        name: '销售线索清洗与评分',
        description: '对 CRM 中的新线索进行数据补全与意向评分，辅助销售跟进。',
        category: '市场营销 (Marketing)',
        bound: 'Sales_Booster v1.5',
        trigger: '事件 (Webhook)',
        scope: '项目: 销售部',
        status: '已发布'
    }
];

export const ScenarioCatalog: React.FC = () => {
    const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
    const [selectedCategory, setSelectedCategory] = useState('全部');

    const filteredScenarios = selectedCategory === '全部' 
        ? SCENARIOS 
        : SCENARIOS.filter(s => s.category === selectedCategory);

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

                {/* Categories */}
                <div className="px-6 py-3 border-b border-gray-100 flex gap-2 overflow-x-auto">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3 py-1 text-xs rounded-full border transition-colors whitespace-nowrap ${
                                selectedCategory === cat 
                                ? 'bg-brand-50 border-brand-200 text-brand-700 font-medium' 
                                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {viewMode === 'list' ? (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">场景名称 (Name)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">分类 (Category)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">绑定 Agent / Workflow</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">触发方式 (Trigger)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">适用范围 (Scope)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态 (Status)</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">操作</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredScenarios.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-bold text-gray-900">{item.name}</div>
                                        <div className="text-xs text-gray-500 truncate max-w-xs">{item.description}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.category}
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
                                        <span className={`px-2 py-0.5 rounded text-xs ${
                                            item.status === '已发布' ? 'bg-green-100 text-green-800' : 
                                            item.status === '开发中' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-brand-600 hover:text-brand-900 mr-3">详情</button>
                                        {item.status === '已发布' && <button className="text-blue-600 hover:text-blue-900">部署实例</button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredScenarios.map((item) => (
                            <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:border-brand-300 transition-all flex flex-col">
                                <div className="p-5 flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">{item.category.split(' ')[0]}</div>
                                        <span className={`px-2 py-0.5 rounded text-xs flex-shrink-0 ${
                                            item.status === '已发布' ? 'bg-green-100 text-green-800' : 
                                            item.status === '开发中' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-1" title={item.name}>{item.name}</h4>
                                    <p className="text-xs text-gray-500 mb-4 h-8 line-clamp-2">{item.description}</p>
                                    
                                    <div className="space-y-2 text-xs border-t border-gray-50 pt-3">
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
                                    {item.status === '已发布' ? (
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
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 hover:border-brand-300 hover:text-brand-600 cursor-pointer hover:bg-brand-50 transition-colors min-h-[220px]">
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