import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../constants';

export const ScenarioInstances: React.FC = () => {
    const navigate = useNavigate();

    return (
        <SkeletonPage title="运行实例 (Scenario Instances)" description="真正“在跑的业务”。管理业务场景的启停、状态监控与执行入口。">
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <h3 className="text-sm font-medium text-gray-700">活跃业务实例</h3>
                    <div className="flex gap-2">
                        <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-sm hover:bg-gray-50">
                            批量暂停
                        </button>
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Instance Name / ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Scenario Template</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Execution</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trigger Config</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Control</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Instance 1: Running */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">Finance_Digest_Prod</div>
                                <div className="text-xs text-gray-500 font-mono">inst_8923</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Weekly Financial Digest
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    Running
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex flex-col cursor-pointer hover:underline" onClick={() => navigate('/runs/explorer')}>
                                    <span className="text-sm font-medium text-gray-900">Success</span>
                                    <span className="text-xs text-gray-500">2 hours ago</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Every Friday, 9:00 AM
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="flex justify-end gap-2">
                                    <button className="text-gray-400 hover:text-yellow-600" title="Pause"><Icon name="pause" /></button>
                                    <button className="text-gray-400 hover:text-red-600" title="Stop"><Icon name="stop" /></button>
                                </div>
                            </td>
                        </tr>

                        {/* Instance 2: Paused */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">Support_Refund_Bot_A</div>
                                <div className="text-xs text-gray-500 font-mono">inst_1102</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Customer Refund Handler
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    <span className="w-2 h-2 mr-1.5 bg-yellow-500 rounded-full"></span>
                                    Paused
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex flex-col cursor-pointer hover:underline" onClick={() => navigate('/runs/explorer')}>
                                    <span className="text-sm font-medium text-red-600">Failed</span>
                                    <span className="text-xs text-gray-500">Yesterday</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                On Webhook Event
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="flex justify-end gap-2">
                                    <button className="text-brand-600 hover:text-brand-800" title="Resume"><Icon name="play" /></button>
                                    <button className="text-gray-400 hover:text-red-600" title="Stop"><Icon name="stop" /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Run-First Linkage */}
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-center justify-between">
                <div>
                    <h4 className="text-sm font-bold text-blue-900">寻找执行细节？</h4>
                    <p className="text-xs text-blue-700 mt-1">
                        Instance 本身不存储日志。点击具体的 "Last Execution" 或前往 <span className="font-mono font-bold">Runs Explorer</span> 查看完整的执行事实 (Traces, Costs, Audit Logs)。
                    </p>
                </div>
                <button 
                    onClick={() => navigate('/runs/explorer')}
                    className="text-sm bg-white border border-blue-200 text-blue-700 px-3 py-1.5 rounded hover:bg-blue-50"
                >
                    前往 Runs Explorer &rarr;
                </button>
            </div>
        </SkeletonPage>
    );
};