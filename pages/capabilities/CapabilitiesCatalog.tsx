import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const CapabilitiesCatalogList: React.FC = () => {
    return (
        <SkeletonPage title="能力目录 (Capability Catalog)" description="Run 的“法定”动作边界。定义 AI 被允许执行的动作（名词），而非具体实现。">
            
            {/* Run-First Rule */}
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-purple-700">
                            <strong>架构规则：</strong> Capability 是审计与追责的一级对象。
                            <br/>
                            Run 中执行的所有外部动作都必须映射到一个 Capability，它是风险控制与授权的根节点。
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                 <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-700">所有能力定义</h3>
                    <button className="px-3 py-1.5 bg-brand-600 text-white rounded text-sm hover:bg-brand-700">定义新能力</button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">能力名称 (Capability Name)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">类别 (Category)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">风险等级 (Risk)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">审批模式 (Approval)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">关联 Skills</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50 cursor-pointer">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-600">refund_customer_payment</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">Destructive / Write</td>
                            <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-0.5 rounded text-xs bg-red-100 text-red-800 font-bold">High</span></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Required (Mandatory)</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Active</td>
                        </tr>
                        <tr className="hover:bg-gray-50 cursor-pointer">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-600">query_user_profile</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">Read / Internal</td>
                            <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-800">Low</span></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Auto (Audit Only)</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">12</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Active</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};

export const CapabilitiesCatalogDetail: React.FC = () => {
    return (
        <SkeletonPage title="refund_customer_payment" description="允许 Run 向支付网关发起退款请求。">
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">风险与约束 (Risk & Constraints)</h3>
                         <div className="grid grid-cols-2 gap-4 text-sm">
                             <div><span className="text-gray-500">风险等级:</span> <span className="text-red-600 font-bold bg-red-50 px-2 rounded">High</span></div>
                             <div><span className="text-gray-500">默认审批:</span> <span className="text-gray-900">Human Approval Required</span></div>
                             <div><span className="text-gray-500">业务影响:</span> <span className="text-gray-900">Financial Loss (Recoverable)</span></div>
                             <div><span className="text-gray-500">幂等性要求:</span> <span className="text-gray-900">Strict (Idempotency Key)</span></div>
                         </div>
                         <p className="mt-4 text-xs text-gray-500 bg-gray-50 p-3 rounded">
                             <strong>声明式定义：</strong> 此 Capability 授予 Run 调用 `stripe.refund` 端点的权限。它不定义 *何时* 调用，只定义 *可以* 调用。
                         </p>
                    </div>

                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">关联执行接口 (Bound Interfaces)</h3>
                         <div className="space-y-4">
                             <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                 <div>
                                     <div className="text-sm font-medium text-gray-900">MCP Interface</div>
                                     <div className="text-xs text-gray-500">mcp.payment.refund (Standard Protocol)</div>
                                 </div>
                                 <button className="text-xs text-brand-600 hover:underline">查看协议</button>
                             </div>
                         </div>
                    </div>
                </div>

                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">关联语义技能 (Semantic Skills)</h3>
                    <p className="text-xs text-gray-500 mb-3">AI 通过以下 Skill 调用此能力：</p>
                    <ul className="space-y-3">
                        <li className="text-sm text-gray-700 bg-gray-50 p-2 rounded border border-gray-100">
                            <span className="font-bold block text-gray-900">Process Full Refund</span>
                            <span className="text-xs text-gray-500">为用户执行全额退款操作。</span>
                        </li>
                        <li className="text-sm text-gray-700 bg-gray-50 p-2 rounded border border-gray-100">
                            <span className="font-bold block text-gray-900">Handle Dispute</span>
                            <span className="text-xs text-gray-500">处理争议并退回款项。</span>
                        </li>
                    </ul>
                </div>
            </div>
        </SkeletonPage>
    );
};