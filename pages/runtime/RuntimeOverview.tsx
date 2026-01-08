import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const RuntimeOverview: React.FC = () => {
    return (
        <SkeletonPage title="资源态势 (Overview)" description="模型服务运行依赖的资源健康度与承载能力概览。">
            
            {/* Situation Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900">基础设施健康度</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium border border-green-200">
                        稳定 (Stable)
                    </span>
                </div>
                <div className="grid grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                    <div>
                        <div className="text-3xl font-bold text-gray-900">2</div>
                        <div className="text-xs text-gray-500 uppercase mt-1">已连接集群</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gray-900">12 / 12</div>
                        <div className="text-xs text-gray-500 uppercase mt-1">健康节点</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-brand-600">64</div>
                        <div className="text-xs text-gray-500 uppercase mt-1">GPU 总数 (A100/H100)</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-yellow-600">85%</div>
                        <div className="text-xs text-gray-500 uppercase mt-1">GPU 分配率</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* Service Pressure */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm h-64 flex flex-col">
                    <h3 className="font-bold text-gray-900 mb-4">模型服务承载情况</h3>
                    <div className="flex-1 flex flex-col justify-center space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">运行中服务 (Running Services)</span>
                            <span className="font-bold text-gray-900">18</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">等待中 (资源不足)</span>
                            <span className="font-bold text-red-600 bg-red-50 px-2 rounded">2</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">降级实例 (Degraded)</span>
                            <span className="font-bold text-yellow-600">0</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                        </div>
                        <div className="text-xs text-gray-400 text-center">90% 的请求副本正在运行</div>
                    </div>
                </div>

                {/* Resource Distribution */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm h-64 flex flex-col items-center justify-center text-gray-400 border-dashed">
                    [ 图表占位: 按资源池的 GPU 使用分布 ]
                </div>
            </div>
        </SkeletonPage>
    );
};