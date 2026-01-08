import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const AdminQuotas: React.FC = () => {
    return (
        <SkeletonPage title="配额与限制 (Quotas & Limits)" description="定义 Run 的资源与风险边界。此处仅定义上限，具体使用情况请参考 Model 用量页面。">
             <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <h3 className="text-sm font-medium text-gray-700">配额模板 (Templates)</h3>
                    <button className="bg-brand-600 text-white px-3 py-1.5 rounded text-sm">新建模板</button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">模板名称</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Run 次数上限 (RPM)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Token 预算 ($/月)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">并发数限制</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">绑定项目数</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Default Global Limit</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,000</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$5,000</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">All</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-600 hover:underline cursor-pointer">编辑</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">High Performance Tier</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Unlimited</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$20,000</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1 (Finance)</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-600 hover:underline cursor-pointer">编辑</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Dev Sandbox</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$200</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-600 hover:underline cursor-pointer">编辑</td>
                        </tr>
                    </tbody>
                </table>
             </div>
        </SkeletonPage>
    );
};