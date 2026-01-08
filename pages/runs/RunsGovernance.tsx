import React from 'react';
import { useLocation } from 'react-router-dom';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const RunsGovernance: React.FC = () => {
    const location = useLocation();
    const type = location.pathname.split('/').pop() || 'policy-hits';
    
    const context: Record<string, any> = {
        'policy-hits': { title: '策略命中 (Policy Hits)', desc: 'Run 执行过程中触发的治理策略记录。' },
        'blocked': { title: '拦截记录 (Blocked Runs)', desc: '被护栏 (Guardrails) 强制阻断的危险操作。' },
        'approvals': { title: '审批历史 (Approval History)', desc: '人工介入（Human-in-the-loop）的决策审计。' },
        'risk': { title: '风险事件 (Risk Events)', desc: '事后审计发现的潜在违规行为。' },
    };

    const current = context[type];

    return (
        <SkeletonPage title={current.title} description={current.desc}>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                 <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 uppercase">
                    <div className="col-span-2">时间</div>
                    <div className="col-span-2">Run ID</div>
                    <div className="col-span-3">命中策略 / 规则</div>
                    <div className="col-span-3">处理动作</div>
                    <div className="col-span-2 text-right">风险等级</div>
                 </div>
                 <div className="divide-y divide-gray-100">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="px-4 py-4 grid grid-cols-12 gap-4 text-sm items-center hover:bg-gray-50">
                            <div className="col-span-2 text-gray-500">2023-10-24 10:0{i}:00</div>
                            <div className="col-span-2 font-mono text-brand-600">run_gov_00{i}</div>
                            <div className="col-span-3 text-gray-900 font-medium">PII_Leakage_Prevention</div>
                            <div className="col-span-3 text-gray-600">Masked (脱敏处理)</div>
                            <div className="col-span-2 text-right">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                                    Medium
                                </span>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </SkeletonPage>
    );
};