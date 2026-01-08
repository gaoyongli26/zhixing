import React from 'react';
import { SkeletonPage } from '../../../components/ui/SkeletonPage';

export const OrganizationList: React.FC = () => {
    return (
        <SkeletonPage title="组织列表 (Organizations)" description="定义 Run 的顶层责任与治理边界。">
            {/* Governance Context Warning */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                            <strong>架构说明：</strong> 在本私有化平台中，Organization 不是 SaaS 租户，而是合规策略、审计规则与责任归属的承载体。
                            <br/>
                            此处仅定义边界，Run 的具体执行结果与统计数据请前往 <span className="font-mono">Runs</span> 子系统查看。
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-700">治理单元</h3>
                    <button className="bg-brand-600 text-white px-3 py-1.5 rounded text-sm hover:bg-brand-700 font-medium">
                        + 新建组织 (New Org)
                    </button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">组织名称</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型 / 标签</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">绑定策略集</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">Acme Corp (Global)</div>
                                <div className="text-xs text-gray-500">ID: org_global_01</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">默认组织</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-800 border border-green-200">Active</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Global_PII_Masking, SOC2_Audit
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                2022-01-15
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-brand-600 hover:text-brand-900 mr-4">编辑</button>
                                <button className="text-gray-400 hover:text-red-600">禁用</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">Acme Finance Secure</div>
                                <div className="text-xs text-gray-500">ID: org_fin_secure_02</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">高合规 (High Compliance)</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-800 border border-green-200">Active</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Finance_Strict_Policy, Human_Approval
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                2023-05-20
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-brand-600 hover:text-brand-900 mr-4">编辑</button>
                                <button className="text-gray-400 hover:text-red-600">禁用</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50 opacity-60">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">Legacy R&D</div>
                                <div className="text-xs text-gray-500">ID: org_legacy_99</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">已归档</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600 border border-gray-200">Disabled</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                -
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                2021-11-01
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