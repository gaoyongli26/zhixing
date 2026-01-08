import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const RuntimeIntegrations: React.FC = () => {
    return (
        <SkeletonPage title="接入配置 (Integrations)" description="管理底层资源管理系统的连接与同步。">
            <div className="grid grid-cols-2 gap-6">
                
                {/* Integration 1 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold">K8s</div>
                            <div>
                                <h3 className="font-bold text-gray-900">Azure AKS Production</h3>
                                <div className="text-xs text-green-600 font-medium flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    已连接
                                </div>
                            </div>
                        </div>
                        <button className="text-sm text-gray-500 hover:text-gray-900">配置</button>
                    </div>
                    <div className="text-sm space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span className="text-gray-500">服务端点</span>
                            <span className="font-mono text-gray-700">api.aks-prod.azure...</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">同步范围</span>
                            <span className="text-gray-700">Namespace: model-serving</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">最近同步</span>
                            <span className="text-gray-700">15秒前</span>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 pt-3">
                        <div className="text-xs text-gray-400 font-mono bg-gray-50 p-2 rounded truncate">
                            Status: Ready. Found 5 nodes, 32 GPUs.
                        </div>
                    </div>
                </div>

                {/* Integration 2 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center text-purple-600 font-bold">GS</div>
                            <div>
                                <h3 className="font-bold text-gray-900">On-Prem GPUStack</h3>
                                <div className="text-xs text-green-600 font-medium flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    已连接
                                </div>
                            </div>
                        </div>
                        <button className="text-sm text-gray-500 hover:text-gray-900">配置</button>
                    </div>
                    <div className="text-sm space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span className="text-gray-500">服务端点</span>
                            <span className="font-mono text-gray-700">https://gpustack.local:443</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">同步范围</span>
                            <span className="text-gray-700">Full Cluster</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">最近同步</span>
                            <span className="text-gray-700">1分钟前</span>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 pt-3">
                        <div className="text-xs text-gray-400 font-mono bg-gray-50 p-2 rounded truncate">
                            Status: Ready. Found 4 nodes, 16 GPUs.
                        </div>
                    </div>
                </div>

                {/* New Integration Placeholder */}
                <div className="bg-gray-50 border border-gray-200 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-100 cursor-pointer transition-colors">
                    <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    <span className="text-sm font-medium">添加资源提供方</span>
                </div>

            </div>
        </SkeletonPage>
    );
};