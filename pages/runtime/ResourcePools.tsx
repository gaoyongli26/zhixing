import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const ResourcePools: React.FC = () => {
    return (
        <SkeletonPage title="资源池 (Resource Pools)" description="平台可用于承载模型服务的资源能力集合（逻辑抽象）。">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Pool 1 */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col hover:border-brand-300 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">GPU-A100-80G</h3>
                            <div className="text-xs text-gray-500 mt-1">高性能推理池</div>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">正常</span>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                        <div>
                            <div className="flex justify-between text-xs text-gray-600 mb-1">
                                <span>容量 (Capacity)</span>
                                <span>32 / 40 卡</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-gray-50 p-2 rounded">
                                <span className="block text-xs text-gray-400">节点数</span>
                                <span className="font-medium text-gray-900">5</span>
                            </div>
                            <div className="bg-gray-50 p-2 rounded">
                                <span className="block text-xs text-gray-400">服务数</span>
                                <span className="font-medium text-gray-900">8</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto border-t border-gray-100 pt-4 text-xs text-gray-500 flex justify-between">
                        <span>提供商: Azure East US</span>
                        <span className="text-brand-600 hover:underline cursor-pointer">查看详情</span>
                    </div>
                </div>

                {/* Pool 2 */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col hover:border-brand-300 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">GPU-T4-Standard</h3>
                            <div className="text-xs text-gray-500 mt-1">高性价比 / 小模型</div>
                        </div>
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs animate-pulse">资源耗尽</span>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                        <div>
                            <div className="flex justify-between text-xs text-gray-600 mb-1">
                                <span>容量 (Capacity)</span>
                                <span>16 / 16 卡</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-red-500 h-2 rounded-full" style={{width: '100%'}}></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-gray-50 p-2 rounded">
                                <span className="block text-xs text-gray-400">节点数</span>
                                <span className="font-medium text-gray-900">4</span>
                            </div>
                            <div className="bg-gray-50 p-2 rounded">
                                <span className="block text-xs text-gray-400">服务数</span>
                                <span className="font-medium text-gray-900">12</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto border-t border-gray-100 pt-4 text-xs text-gray-500 flex justify-between">
                        <span>提供商: On-prem VLLM</span>
                        <span className="text-brand-600 hover:underline cursor-pointer">查看详情</span>
                    </div>
                </div>

                {/* Pool 3 */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col hover:border-brand-300 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">CPU-Inference</h3>
                            <div className="text-xs text-gray-500 mt-1">Embedding / 重排序</div>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">正常</span>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                        <div>
                            <div className="flex justify-between text-xs text-gray-600 mb-1">
                                <span>vCores</span>
                                <span>120 / 500 核</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{width: '24%'}}></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-gray-50 p-2 rounded">
                                <span className="block text-xs text-gray-400">节点数</span>
                                <span className="font-medium text-gray-900">3</span>
                            </div>
                            <div className="bg-gray-50 p-2 rounded">
                                <span className="block text-xs text-gray-400">服务数</span>
                                <span className="font-medium text-gray-900">4</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto border-t border-gray-100 pt-4 text-xs text-gray-500 flex justify-between">
                        <span>提供商: Azure East US</span>
                        <span className="text-brand-600 hover:underline cursor-pointer">查看详情</span>
                    </div>
                </div>

            </div>
        </SkeletonPage>
    );
};