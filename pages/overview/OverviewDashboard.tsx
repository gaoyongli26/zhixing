import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../constants';

// Mock Data for Metrics
const METRICS = [
    { label: '24h 执行总数 (Runs)', value: '12,450', trend: '+12%', trendDir: 'up', path: '/runs/explorer' },
    { label: '成功率 (Success Rate)', value: '98.5%', trend: '-0.2%', trendDir: 'down', path: '/runs/explorer?status=success' },
    { label: '失败/阻塞 (Issues)', value: '42', trend: '+5', trendDir: 'bad', path: '/runs/views/failed' },
    { label: '平均延迟 (Avg Latency)', value: '450ms', trend: '-20ms', trendDir: 'up', path: '/runs/diagnostics/latency' },
    { label: '平均成本 (Avg Cost)', value: '¥0.32', trend: '+0.01', trendDir: 'bad', path: '/runs/diagnostics/cost' },
];

// Mock Data for Attention Required
const ATTENTION_ITEMS = [
    { id: 'run_err_9921', name: '季度财务汇总-Q3', issue: 'Failed', reason: 'API 超时 (Stripe)', time: '2 分钟前', severity: 'high' },
    { id: 'run_blk_9920', name: 'VIP客户退款流程', issue: 'Blocked', reason: '策略: 高额 > $500', time: '15 分钟前', severity: 'medium' },
    { id: 'run_lat_9918', name: '知识库全量索引', issue: 'Latency', reason: '耗时 > 120s (SLA: 30s)', time: '1 小时前', severity: 'low' },
    { id: 'run_cst_9915', name: '批量邮件生成', issue: 'High Cost', reason: '成本 $5.20 (阈值: $1.00)', time: '2 小时前', severity: 'medium' },
    { id: 'run_risk_9901', name: '外部数据清洗', issue: 'Risk', reason: '输出检测到 PII', time: '3 小时前', severity: 'high' },
];

// Mock Data for Recent Activity
const RECENT_ACTIVITY = [
    { id: 'run_suc_8821', action: '执行完成', desc: '每日早报生成', time: '刚刚', user: 'System' },
    { id: 'run_start_8822', action: '执行开始', desc: '工单自动分类', time: '10秒前', user: 'Webhook' },
    { id: 'run_blk_8820', action: '执行阻断', desc: '敏感数据导出', time: '2 分钟前', user: 'User_A' },
];

export const OverviewDashboard: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-[1600px] mx-auto space-y-8 animate-fade-in pb-10">
            
            {/* 1. Global Status Bar (平台态势条) */}
            <div 
                className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:shadow-sm transition-shadow"
                onClick={() => navigate('/runs/diagnostics/failures')}
            >
                <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <span className="font-bold text-green-900 text-sm">系统状态: 正常 (Normal)</span>
                    <span className="h-4 border-l border-green-300 mx-2"></span>
                    <span className="text-sm text-green-700">过去 1 小时执行成功率 99.8% • 未检测到大规模阻断</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-green-700 font-medium group">
                    查看健康诊断
                    <Icon name="chart-bar" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>

            {/* 2. Key Run Metrics (Run 核心指标) */}
            <div className="grid grid-cols-5 gap-4">
                {METRICS.map((metric, idx) => (
                    <div 
                        key={idx} 
                        className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:border-brand-300 cursor-pointer transition-colors"
                        onClick={() => navigate(metric.path)}
                    >
                        <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-2">{metric.label}</div>
                        <div className="flex items-end justify-between">
                            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                            <div className={`text-xs font-medium flex items-center ${metric.trendDir === 'bad' || metric.trendDir === 'down' ? 'text-red-600' : 'text-green-600'}`}>
                                {metric.trend}
                                {metric.trendDir === 'bad' && <span className="ml-1 text-[10px]">⚠️</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-8">
                {/* 3. Attention Required (需要关注的 Run) - CORE SECTION */}
                <div className="col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            <Icon name="shield-check" className="text-orange-500" />
                            需要关注 (Attention Required)
                        </h2>
                        <button 
                            onClick={() => navigate('/runs/views/failed')}
                            className="text-sm text-brand-600 hover:underline"
                        >
                            查看全部异常
                        </button>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">执行 ID / 名称</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">问题类型</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">原因</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">时间</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {ATTENTION_ITEMS.map((item) => (
                                    <tr 
                                        key={item.id} 
                                        className="hover:bg-gray-50 cursor-pointer group"
                                        onClick={() => navigate(`/runs/${item.id}`)}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-bold text-gray-900 group-hover:text-brand-600 font-mono">{item.id}</div>
                                            <div className="text-xs text-gray-500">{item.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs font-bold rounded-full border ${
                                                item.issue === 'Failed' ? 'bg-red-50 text-red-700 border-red-100' :
                                                item.issue === 'Blocked' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                                                item.issue === 'Risk' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                                'bg-yellow-50 text-yellow-700 border-yellow-100'
                                            }`}>
                                                {item.issue}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {item.reason}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-400">
                                            {item.time}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Column: Recent Activity & Quick Drill-down */}
                <div className="space-y-8">
                    
                    {/* 4. Recent Activity (最近发生) */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-gray-900">最近活动 (Recent Activity)</h2>
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                            <ul className="space-y-4">
                                {RECENT_ACTIVITY.map((act, i) => (
                                    <li key={i} className="flex gap-3 relative pb-4 last:pb-0 border-l border-gray-100 last:border-0 ml-2 pl-4">
                                        <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white ${
                                            act.action.includes('完成') ? 'bg-green-500' :
                                            act.action.includes('阻断') ? 'bg-orange-500' : 'bg-blue-500'
                                        }`}></div>
                                        <div className="flex-1 cursor-pointer hover:bg-gray-50 rounded -mt-1 p-1" onClick={() => navigate(`/runs/${act.id}`)}>
                                            <div className="flex justify-between text-xs mb-0.5">
                                                <span className="font-bold text-gray-700">{act.action}</span>
                                                <span className="text-gray-400">{act.time}</span>
                                            </div>
                                            <div className="text-sm text-gray-900">{act.desc}</div>
                                            <div className="text-xs text-gray-400 mt-1">触发源: {act.user}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                                <button onClick={() => navigate('/overview/activity')} className="text-xs text-gray-500 hover:text-brand-600">查看完整活动流 &rarr;</button>
                            </div>
                        </div>
                    </div>

                    {/* 5. Quick Drill-down (快速下钻) */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-gray-900">快速下钻 (Drill-down)</h2>
                        <div className="grid grid-cols-1 gap-3">
                            <button 
                                onClick={() => navigate('/runs/views/failed')}
                                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-red-300 hover:bg-red-50 transition-all text-left group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="bg-red-100 p-2 rounded text-red-600">
                                        <Icon name="shield-check" className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">失败与阻塞 (Failed & Blocked)</div>
                                        <div className="text-xs text-gray-500">查看严重的停止性问题</div>
                                    </div>
                                </div>
                                <Icon name="chevron-down" className="w-4 h-4 text-gray-400 -rotate-90 group-hover:text-red-500" />
                            </button>

                            <button 
                                onClick={() => navigate('/runs/views/cost')}
                                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-yellow-300 hover:bg-yellow-50 transition-all text-left group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="bg-yellow-100 p-2 rounded text-yellow-600">
                                        <Icon name="currency-dollar" className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">高成本执行 (High Cost)</div>
                                        <div className="text-xs text-gray-500">分析 Token 消耗尖峰</div>
                                    </div>
                                </div>
                                <Icon name="chevron-down" className="w-4 h-4 text-gray-400 -rotate-90 group-hover:text-yellow-500" />
                            </button>

                            <button 
                                onClick={() => navigate('/runs/views/latency')}
                                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-300 hover:bg-blue-50 transition-all text-left group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 p-2 rounded text-blue-600">
                                        <Icon name="clock" className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">长延迟执行 (Long Latency)</div>
                                        <div className="text-xs text-gray-500">性能瓶颈分析</div>
                                    </div>
                                </div>
                                <Icon name="chevron-down" className="w-4 h-4 text-gray-400 -rotate-90 group-hover:text-blue-500" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};