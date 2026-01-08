import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const AccessControl: React.FC = () => {
    return (
        <SkeletonPage title="访问控制 (Access Control)" description="定义知识的可见性与使用边界。权限必须在设计态 (Design-time) 确定，运行时不进行动态协商。">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <h3 className="text-sm font-medium text-gray-700">Knowledge Base 访问规则</h3>
                    <button className="bg-brand-600 text-white px-3 py-1.5 rounded text-sm hover:bg-brand-700">添加规则</button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Knowledge Base</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">授权对象 (Subject)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">范围类型</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Finance_Global_KB</td>
                            <td className="px-6 py-4 text-sm text-gray-600">Org: Acme Finance Secure</td>
                            <td className="px-6 py-4 text-xs text-gray-500">Organization Bound</td>
                            <td className="px-6 py-4"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">Allow Read</span></td>
                            <td className="px-6 py-4 text-sm text-green-600">Active</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Legal_Contracts_Q3</td>
                            <td className="px-6 py-4 text-sm text-gray-600">Capability: analyze_contract</td>
                            <td className="px-6 py-4 text-xs text-gray-500">Capability Scope</td>
                            <td className="px-6 py-4"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">Allow Read</span></td>
                            <td className="px-6 py-4 text-sm text-green-600">Active</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">HR_Salary_Data</td>
                            <td className="px-6 py-4 text-sm text-gray-600">Project: Public_Demo</td>
                            <td className="px-6 py-4 text-xs text-gray-500">Project Bound</td>
                            <td className="px-6 py-4"><span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs">Deny All</span></td>
                            <td className="px-6 py-4 text-sm text-green-600">Active</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-2">脱敏策略 (Data Masking) - Placeholder</h4>
                <p className="text-xs text-gray-500">
                    此处将配置 Ragflow 解析过程中的 PII 自动脱敏规则。
                    <br/>
                    (Feature coming in v2.1)
                </p>
            </div>
        </SkeletonPage>
    );
};