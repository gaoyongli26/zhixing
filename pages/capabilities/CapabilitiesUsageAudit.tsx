import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';
import { useNavigate } from 'react-router-dom';

export const CapabilitiesUsageOverview: React.FC = () => {
    const navigate = useNavigate();

    return (
        <SkeletonPage title="使用与审计 (Usage & Audit)" description="从动作视角索引 Run 行为。本页不是事实源，而是跳转至 Runs 子系统的索引入口。">
            
            <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">Capability 使用趋势</h3>
                    <div className="h-48 flex items-center justify-center bg-gray-50 border border-dashed border-gray-200 rounded text-gray-400">
                        [ Chart: Calls per Capability ]
                    </div>
                </div>
                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">高风险动作分布</h3>
                    <div className="h-48 flex items-center justify-center bg-gray-50 border border-dashed border-gray-200 rounded text-gray-400">
                        [ Chart: High Risk Actions ]
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">审计追踪快捷入口</h3>
                <div className="grid grid-cols-3 gap-4">
                    <div 
                        onClick={() => navigate('/runs/explorer?filter=cap_type:destructive')}
                        className="p-4 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer group"
                    >
                        <div className="font-bold text-gray-900 group-hover:text-brand-600">所有破坏性操作</div>
                        <div className="text-xs text-gray-500 mt-1">跳转至 Runs Explorer 查看所有 Write/Delete 类型调用</div>
                    </div>
                    <div 
                        onClick={() => navigate('/runs/explorer?filter=risk:high')}
                        className="p-4 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer group"
                    >
                        <div className="font-bold text-gray-900 group-hover:text-brand-600">高风险调用</div>
                        <div className="text-xs text-gray-500 mt-1">跳转至 Runs Explorer 查看 Risk Level = High</div>
                    </div>
                    <div 
                        onClick={() => navigate('/runs/governance/blocked')}
                        className="p-4 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer group"
                    >
                        <div className="font-bold text-gray-900 group-hover:text-brand-600">被阻断的尝试</div>
                        <div className="text-xs text-gray-500 mt-1">跳转至 Governance 查看 Blocked Runs</div>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};

// Deprecated component, redirecting logic conceptually
export const CapabilitiesAuditExplorer: React.FC = () => {
    return <div>Deprecated. Use Runs Explorer.</div>;
};