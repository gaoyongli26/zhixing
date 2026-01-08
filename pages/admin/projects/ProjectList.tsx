import React from 'react';
import { SkeletonPage } from '../../../components/ui/SkeletonPage';

export const ProjectList: React.FC = () => {
    return (
        <SkeletonPage title="项目列表 (Projects)" description="Run 的最小业务归属单元。所有 Run 必须隶属于一个 Project。">
             
             {/* 核心定位提示：严格区分配置态与运行态 */}
             <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            <strong>配置视图说明：</strong> 此页面仅管理项目的属性、策略绑定与配额上限。
                            <br/>
                            如需查看项目下的 Run 列表、成功率、成本消耗等运行数据，请前往 <span className="font-mono font-bold">Runs → Explorer</span> 并按项目筛选。
                        </p>
                    </div>
                </div>
            </div>

             <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                 <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-700">业务单元列表</h3>
                    <button className="bg-brand-600 text-white px-3 py-1.5 rounded text-sm hover:bg-brand-700 font-medium">
                        + 新建项目 (New Project)
                    </button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">项目名称 / ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">所属 Organization</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认配置绑定</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Project 1 */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">Finance_Automation</div>
                                <div className="text-xs text-gray-500 font-mono">proj_fin_001</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Acme Corp (Global)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-xs">
                                        <span className="text-gray-500 w-16">策略:</span>
                                        <span className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-100">Finance_Gate_v2</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <span className="text-gray-500 w-16">配额:</span>
                                        <span className="bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded border border-purple-100">High_Tier_Quota</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <span className="text-gray-500 w-16">审计:</span>
                                        <span className="bg-yellow-50 text-yellow-700 px-1.5 py-0.5 rounded border border-yellow-100">Full_Trace_Log</span>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-800 border border-green-200">Active</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                2023-01-10
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-brand-600 hover:text-brand-900 mr-4">配置</button>
                                <button className="text-gray-400 hover:text-red-600">禁用</button>
                            </td>
                        </tr>

                        {/* Project 2 */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">Customer_Support_Bot</div>
                                <div className="text-xs text-gray-500 font-mono">proj_supp_02</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Acme Corp (Global)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-xs">
                                        <span className="text-gray-500 w-16">策略:</span>
                                        <span className="text-gray-400 italic">Inherit Org Default</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <span className="text-gray-500 w-16">配额:</span>
                                        <span className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded border border-gray-200">Standard_Quota</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <span className="text-gray-500 w-16">审计:</span>
                                        <span className="text-gray-400 italic">Inherit Org Default</span>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-800 border border-green-200">Active</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                2023-03-15
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-brand-600 hover:text-brand-900 mr-4">配置</button>
                                <button className="text-gray-400 hover:text-red-600">禁用</button>
                            </td>
                        </tr>

                        {/* Project 3 */}
                        <tr className="hover:bg-gray-50 opacity-70">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">Legal_Review_v2</div>
                                <div className="text-xs text-gray-500 font-mono">proj_leg_99</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Acme Finance Secure
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-xs">
                                        <span className="text-gray-500 w-16">策略:</span>
                                        <span className="bg-red-50 text-red-700 px-1.5 py-0.5 rounded border border-red-100">Strict_Audit_Only</span>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600 border border-gray-200">Disabled</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                2022-11-20
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-brand-600 hover:text-brand-900 mr-4">启用</button>
                                <button className="text-gray-400 hover:text-red-600">删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
             </div>
        </SkeletonPage>
    );
};