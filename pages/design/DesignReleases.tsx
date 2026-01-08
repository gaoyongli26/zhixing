import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const DesignReleases: React.FC = () => {
    return (
        <SkeletonPage title="版本与发布 (Releases)" description="管理设计态资产的发布生命周期。">
            <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                        <h3 className="font-bold text-gray-700">Release History</h3>
                    </div>
                    <div className="p-6">
                        <div className="relative border-l-2 border-gray-200 ml-4 space-y-8">
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-500 border-2 border-white"></div>
                                <div className="flex justify-between">
                                    <h4 className="font-bold text-gray-900">Release v2.1.0</h4>
                                    <span className="text-sm text-gray-500">Today, 10:00 AM</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">Updated Financial Bot prompt bundles and added new 'Retry' logic to workflow.</p>
                                <div className="mt-2 flex gap-2">
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">2 Agents</span>
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">1 Workflow</span>
                                </div>
                            </div>

                             <div className="relative pl-8 opacity-75">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 border-2 border-white"></div>
                                <div className="flex justify-between">
                                    <h4 className="font-bold text-gray-900">Release v2.0.0</h4>
                                    <span className="text-sm text-gray-500">Yesterday</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">Major overhaul of Customer Support logic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};