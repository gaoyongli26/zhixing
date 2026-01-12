import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const ScenarioGovernance: React.FC = () => {
    return (
        <SkeletonPage title="运行治理 (Operations & Governance)" description="定义业务场景运行时的治理边界与配额，而非执行逻辑。">
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">运行配额 (Quotas)</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                            <span className="text-sm text-gray-700">最大并发数 (Max Concurrency)</span>
                            <span className="font-mono font-bold text-gray-900">50</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                            <span className="text-sm text-gray-700">每日执行上限 (Daily Runs)</span>
                            <span className="font-mono font-bold text-gray-900">1,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">单次超时时间 (Timeout)</span>
                            <span className="font-mono font-bold text-gray-900">300s</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">风险与触发控制</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-4 h-4 mt-0.5 rounded border border-gray-300 bg-gray-50 flex items-center justify-center text-xs">✓</div>
                            <div>
                                <div className="text-sm font-medium text-gray-900">允许手动触发 (Manual Trigger)</div>
                                <div className="text-xs text-gray-500">允许运营人员在控制台点击“启动”按钮。</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-4 h-4 mt-0.5 rounded border border-gray-300 bg-gray-50 flex items-center justify-center text-xs">✓</div>
                            <div>
                                <div className="text-sm font-medium text-gray-900">API 调用需鉴权 (Authenticated API)</div>
                                <div className="text-xs text-gray-500">外部系统调用必须携带有效 Bearer Token。</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">关联审批规则 (Approval Gates)</h3>
                    <div className="bg-yellow-50 border border-yellow-100 rounded p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="p-2 bg-yellow-100 rounded text-yellow-700"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></span>
                            <div>
                                <div className="text-sm font-bold text-yellow-900">高额成本审批 (High Cost Approval)</div>
                                <div className="text-xs text-yellow-700">当预估成本 > $10.00 时，Run 将被挂起 (Suspended) 并等待人工审批。</div>
                            </div>
                        </div>
                        <button className="text-xs text-yellow-800 hover:underline">查看策略详情</button>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};