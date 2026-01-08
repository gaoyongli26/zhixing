import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const CapabilitiesPoliciesList: React.FC = () => {
    return (
        <SkeletonPage title="策略与审批 (Policies & Approvals)" description="定义动作执行的约束规则。Policy 定义“是否允许执行”，不负责执行审批流程。">
            <div className="space-y-6">
                 <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                     <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                        <h3 className="font-bold text-gray-700">Active Policies</h3>
                     </div>
                     <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Policy Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Target Capability</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trigger Condition</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">High Value Refund Guard</td>
                                <td className="px-6 py-4 text-sm text-gray-500">refund_customer_payment</td>
                                <td className="px-6 py-4 text-sm font-mono text-gray-600 bg-gray-50 rounded">amount &gt; 500</td>
                                <td className="px-6 py-4 text-sm"><span className="text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded text-xs">Require Approval</span></td>
                                <td className="px-6 py-4 text-sm"><span className="text-green-600">Active</span></td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Dev Env Write Block</td>
                                <td className="px-6 py-4 text-sm text-gray-500">ALL Write Capabilities</td>
                                <td className="px-6 py-4 text-sm font-mono text-gray-600 bg-gray-50 rounded">env == 'dev'</td>
                                <td className="px-6 py-4 text-sm"><span className="text-red-600 font-bold bg-red-50 px-2 py-1 rounded text-xs">Block</span></td>
                                <td className="px-6 py-4 text-sm"><span className="text-green-600">Active</span></td>
                            </tr>
                        </tbody>
                     </table>
                 </div>
                 
                 <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <p className="text-sm text-blue-700">
                        <strong>Run 关系说明：</strong> Run Detail 中必须显示命中的 Policy 与最终决策结果（Allowed / Blocked / Pending Approval）。
                    </p>
                </div>
            </div>
        </SkeletonPage>
    );
};