import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const AdminSettings: React.FC = () => {
    return (
        <SkeletonPage title="平台设置 (Platform Settings)" description="定义平台级通用运行参数与技术配置。不包含业务语义。">
            <div className="max-w-3xl space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4">基础设施 (Infrastructure)</h3>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">默认时区</label>
                            <select className="w-full border border-gray-300 rounded p-2 text-sm"><option>UTC</option><option>Asia/Shanghai</option></select>
                            <p className="text-xs text-gray-500 mt-1">影响所有 Log 时间戳的显示。</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Run ID 生成规则</label>
                            <select className="w-full border border-gray-300 rounded p-2 text-sm"><option>UUID v4</option><option>Time-ordered KSUID</option><option>Short ID (8 chars)</option></select>
                            <p className="text-xs text-gray-500 mt-1">改变新生成 Run 的 ID 格式。</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4">系统日志 (System Logs)</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                             <span className="text-sm text-gray-700">日志记录级别 (Log Level)</span>
                             <select className="border border-gray-300 rounded p-1 text-sm"><option>INFO</option><option>DEBUG</option><option>WARN</option></select>
                        </div>
                        <div className="flex items-center justify-between">
                             <span className="text-sm text-gray-700">保留内部系统日志</span>
                             <select className="border border-gray-300 rounded p-1 text-sm"><option>7 Days</option><option>30 Days</option></select>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};

// Keeping AdminFeatures separate if needed by Router, or just remove from routing in App.tsx if unused. 
// For now, mapping `AdminFeatures` to a placeholder or deprecated component to avoid breaks, 
// but since the prompt didn't ask for "Features" specifically in the menu, we will likely remove the route.
export const AdminFeatures: React.FC = () => <div>Deprecated</div>; 
