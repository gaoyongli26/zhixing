import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const ScenarioVersions: React.FC = () => {
    return (
        <SkeletonPage title="版本与发布 (Versions & Releases)" description="管理业务场景“使用哪一版设计资产在运行”。Design → Business 的发布闸门。">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-700">场景：周度财务摘要生成 - 发布历史</h3>
                </div>
                <div className="p-6">
                    <div className="relative border-l-2 border-gray-200 ml-4 space-y-8">
                        {/* Current Version */}
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                        v2.1.0 
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-medium">线上版本 (Live)</span>
                                    </h4>
                                    <p className="text-sm text-gray-500 mt-1">由 Admin 发布于 2023-10-24</p>
                                </div>
                                <button className="text-xs border border-gray-300 rounded px-2 py-1 hover:bg-gray-50 text-gray-600">回滚 (Rollback)</button>
                            </div>
                            <div className="mt-3 bg-gray-50 p-3 rounded text-sm border border-gray-100">
                                <div className="grid grid-cols-2 gap-4">
                                    <div><span className="text-gray-500 text-xs">Agent 版本:</span> <span className="font-mono text-gray-900">FinBot v1.2</span></div>
                                    <div><span className="text-gray-500 text-xs">Workflow 版本:</span> <span className="font-mono text-gray-900">Finance_Flow_v2</span></div>
                                </div>
                            </div>
                        </div>

                        {/* Previous Version */}
                        <div className="relative pl-8 opacity-60 hover:opacity-100 transition-opacity">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-400 border-2 border-white"></div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-gray-700">v2.0.0</h4>
                                    <p className="text-sm text-gray-500 mt-1">发布于 2023-10-20</p>
                                </div>
                                <button className="text-xs text-brand-600 hover:underline">重新上线 (Promote)</button>
                            </div>
                            <div className="mt-3 bg-white p-3 rounded text-sm border border-gray-200">
                                <div className="grid grid-cols-2 gap-4">
                                    <div><span className="text-gray-500 text-xs">Agent 版本:</span> <span className="font-mono text-gray-900">FinBot v1.1</span></div>
                                    <div><span className="text-gray-500 text-xs">Workflow 版本:</span> <span className="font-mono text-gray-900">Finance_Flow_v1</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};