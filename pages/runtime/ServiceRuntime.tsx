import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const ServiceRuntime: React.FC = () => {
    return (
        <SkeletonPage title="服务运行态 (Service Runtime)" description="核心交汇点：观测模型服务实例在资源池中的承载状态。">
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">服务名称 (Service)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">运行状态</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">副本数 (Act/Exp)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">所在资源池</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">资源占用</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">操作</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Service 1: Healthy */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="text-sm font-bold text-gray-900">svc.azure.gpt4o.prod</div>
                                <div className="text-xs text-gray-500">Catalog: gpt-4o</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full"></span>
                                    运行中
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                                8 / 8
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                GPU-A100-80G
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-xs text-gray-500">8 GPUs</div>
                                <div className="text-xs text-gray-500">256 GB RAM</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                <button className="text-brand-600 hover:underline">Pod 日志</button>
                            </td>
                        </tr>

                        {/* Service 2: Pending */}
                        <tr className="bg-yellow-50">
                            <td className="px-6 py-4">
                                <div className="text-sm font-bold text-gray-900">svc.local.llama3.finetune</div>
                                <div className="text-xs text-gray-500">Catalog: llama-3-70b</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    <span className="w-2 h-2 mr-1.5 bg-yellow-500 rounded-full animate-pulse"></span>
                                    等待中 (Pending)
                                </span>
                                <div className="text-[10px] text-red-600 mt-1 font-medium">资源不足 (0/4 available)</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                                0 / 2
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                GPU-T4-Standard
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-xs text-gray-500">Requested: 4 GPUs</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                <button className="text-brand-600 hover:underline">事件 (Events)</button>
                            </td>
                        </tr>

                        {/* Service 3: Degraded */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="text-sm font-bold text-gray-900">svc.openai.fallback</div>
                                <div className="text-xs text-gray-500">Catalog: gpt-3.5-turbo</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                    <span className="w-2 h-2 mr-1.5 bg-orange-500 rounded-full"></span>
                                    降级 (Degraded)
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                                4 / 10
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                CPU-Inference
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-xs text-gray-500">16 Cores</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                <button className="text-brand-600 hover:underline">Pod 日志</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};