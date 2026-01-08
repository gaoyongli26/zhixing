import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const ServiceStatus: React.FC = () => {
    return (
        <SkeletonPage title="服务状态 (Service Status)" description="实时监控模型推理服务的可用性、当前延迟与统计指标。">
            
            {/* Global Status Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">系统可用性 (System Availability)</h3>
                    <p className="text-sm text-gray-500 mt-1">平台整体推理服务健康检查</p>
                </div>
                <div className="flex gap-8 text-center">
                    <div>
                        <div className="text-2xl font-bold text-green-600">99.98%</div>
                        <div className="text-xs text-gray-500 uppercase">在线率 (24h)</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-gray-900">452ms</div>
                        <div className="text-xs text-gray-500 uppercase">平均延迟</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-gray-900">0</div>
                        <div className="text-xs text-gray-500 uppercase">活跃事故</div>
                    </div>
                </div>
            </div>

            {/* Service List */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-700">端点状态详情</h3>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">服务接入点</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">区域 / 提供商</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">当前延迟</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">P95 延迟</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">P99 延迟</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">趋势 (1h)</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Service 1 */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900 font-mono">svc.azure.gpt4o.prod</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                East US (Azure)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full"></span>
                                    正常运行
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-mono">
                                450ms
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right font-mono">
                                1.2s
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right font-mono">
                                3.5s
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                <div className="w-16 h-4 bg-gray-100 rounded inline-block overflow-hidden relative">
                                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-200" style={{clipPath: 'polygon(0 100%, 20% 80%, 40% 85%, 60% 60%, 80% 70%, 100% 50%, 100% 100%, 0 100%)'}}></div>
                                </div>
                            </td>
                        </tr>

                        {/* Service 2 */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900 font-mono">svc.openai.direct</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Global (OpenAI)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full"></span>
                                    正常运行
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-mono">
                                800ms
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right font-mono">
                                1.8s
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right font-mono">
                                4.2s
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                <div className="w-16 h-4 bg-gray-100 rounded inline-block overflow-hidden relative">
                                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-200" style={{clipPath: 'polygon(0 100%, 20% 70%, 40% 75%, 60% 50%, 80% 60%, 100% 40%, 100% 100%, 0 100%)'}}></div>
                                </div>
                            </td>
                        </tr>

                        {/* Service 3 */}
                        <tr className="hover:bg-gray-50 bg-red-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900 font-mono">svc.local.llama3.gpu</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                On-prem (VLLM)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    <span className="w-2 h-2 mr-1.5 bg-red-500 rounded-full animate-pulse"></span>
                                    性能降级
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-700 text-right font-bold font-mono">
                                2400ms
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-700 text-right font-mono">
                                5.5s
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-700 text-right font-mono">
                                12.0s
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                <div className="w-16 h-4 bg-gray-100 rounded inline-block overflow-hidden relative">
                                    <div className="absolute bottom-0 left-0 w-full h-full bg-red-200" style={{clipPath: 'polygon(0 100%, 20% 90%, 40% 80%, 60% 40%, 80% 20%, 100% 10%, 100% 100%, 0 100%)'}}></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};