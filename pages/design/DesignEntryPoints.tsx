import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';
import { useLocation } from 'react-router-dom';

export const DesignEntryPoints: React.FC = () => {
    const location = useLocation();
    const type = location.pathname.split('/').pop();

    const config: any = {
        'api': { title: 'API 入口 (API Endpoints)', desc: '通过 REST API 触发 Run。' },
        'webhook': { title: 'Webhook 入口', desc: '监听外部系统的回调事件。' },
        'schedule': { title: '定时触发 (Schedules)', desc: '基于 Cron 表达式的周期性任务。' },
        'manual': { title: '手动触发 (Manual)', desc: '为运营人员提供的 UI 触发按钮配置。' },
    };

    const current = config[type || 'api'];

    return (
        <SkeletonPage title={current.title} description={current.desc}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="font-bold text-gray-900">Process Invoice API</h3>
                            <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 mt-1 block">POST /api/v1/run/invoice</code>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="text-sm text-gray-500 space-y-2">
                        <div className="flex justify-between">
                            <span>Bound Workflow:</span>
                            <span className="font-medium text-gray-700">Financial Flow v2</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Auth:</span>
                            <span className="font-medium text-gray-700">Bearer Token</span>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <button className="text-sm text-brand-600 font-medium">Configure Params</button>
                    </div>
                </div>

                 <div className="bg-white border border-gray-200 border-dashed rounded-lg shadow-sm p-6 flex flex-col items-center justify-center text-gray-400">
                    <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    <span>Create New {type} Entry Point</span>
                </div>
            </div>
        </SkeletonPage>
    );
};