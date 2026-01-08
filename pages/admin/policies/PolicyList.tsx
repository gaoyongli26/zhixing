import React from 'react';
import { SkeletonPage } from '../../../components/ui/SkeletonPage';

export const PolicyList: React.FC = () => {
    return (
        <SkeletonPage title="策略集 (Policies)" description="定义 Run 的强制治理规则（护栏）。决定什么样的 Run 是合法的。">
            
            {/* Governance Architecture Warning */}
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-orange-800">
                            <strong>架构视图说明（立法 vs 执法）：</strong> 
                            <br/>
                            此处仅负责<strong>定义规则</strong>（例如：“禁止在生产环境使用 GPT-3.5”）。
                            <br/>
                            策略是否生效、具体拦截了哪些 Run、以及拦截的频率统计，请前往 <span className="font-mono font-bold">Runs → Governance</span> 子系统查看。
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <div className="flex gap-4">
                        <h3 className="text-sm font-medium text-gray-700">治理规则列表</h3>
                        <div className="flex gap-2">
                            <span className="px-2 py-0.5 rounded text-xs bg-white border border-gray-300 text-gray-600">全部</span>
                            <span className="px-2 py-0.5 rounded text-xs bg-transparent text-gray-500 hover:bg-gray-100 cursor-pointer">能力约束</span>
                            <span className="px-2 py-0.5 rounded text-xs bg-transparent text-gray-500 hover:bg-gray-100 cursor-pointer">成本控制</span>
                            <span className="px-2 py-0.5 rounded text-xs bg-transparent text-gray-500 hover:bg-gray-100 cursor-pointer">合规审计</span>
                        </div>
                    </div>
                    <button className="bg-brand-600 text-white px-3 py-1.5 rounded text-sm hover:bg-brand-700 font-medium">
                        + 新建策略
                    </button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">策略名称</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">触发条件 (Trigger)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">治理动作 (Action)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Policy 1: Capability Constraint */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="text-sm font-bold text-gray-900">Prevent_Payment_In_Dev</div>
                                <div className="text-xs text-gray-500">防止开发环境误调用支付接口</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    Capability
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                                <code className="bg-gray-100 px-1 rounded text-xs">env == 'dev' AND capability.tag == 'money'</code>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded w-max">
                                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                                    Block (阻断)
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-green-600 text-xs font-medium">● 生效中</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-brand-600 hover:text-brand-900">配置规则</button>
                            </td>
                        </tr>

                        {/* Policy 2: Cost Control */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="text-sm font-bold text-gray-900">High_Cost_Approval_Gate</div>
                                <div className="text-xs text-gray-500">高额消耗需人工审批</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Cost
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                                <code className="bg-gray-100 px-1 rounded text-xs">predicted_cost &gt; $5.00</code>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="flex items-center text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded w-max">
                                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Suspend (审批)
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-green-600 text-xs font-medium">● 生效中</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-brand-600 hover:text-brand-900">配置规则</button>
                            </td>
                        </tr>

                        {/* Policy 3: Audit/Privacy */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="text-sm font-bold text-gray-900">PII_Detection_Reporting</div>
                                <div className="text-xs text-gray-500">敏感信息被动检测</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                    Audit
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                                <code className="bg-gray-100 px-1 rounded text-xs">output contains PII_Pattern</code>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="flex items-center text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded w-max">
                                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    Log Only (记录)
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-green-600 text-xs font-medium">● 生效中</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-brand-600 hover:text-brand-900">配置规则</button>
                            </td>
                        </tr>

                        {/* Policy 4: Model Fallback */}
                        <tr className="hover:bg-gray-50 opacity-60">
                            <td className="px-6 py-4">
                                <div className="text-sm font-bold text-gray-900">Force_Local_Model_Fallback</div>
                                <div className="text-xs text-gray-500">外部断网时强制切换本地模型</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    Model
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                                <code className="bg-gray-100 px-1 rounded text-xs">network_status == 'offline'</code>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="flex items-center text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded w-max">
                                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                                    Fallback (降级)
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-gray-500 text-xs font-medium">○ 已停用</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-brand-600 hover:text-brand-900">启用</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};