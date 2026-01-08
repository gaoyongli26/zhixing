import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const ClustersNodes: React.FC = () => {
    return (
        <SkeletonPage title="集群与节点 (Clusters & Nodes)" description="底层资源系统的物理运行状态映射。仅供观测，不可执行运维操作。">
            
            <div className="space-y-8">
                {/* Cluster 1 */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <h3 className="font-bold text-gray-900">azure-k8s-prod-01</h3>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded font-mono">Kubernetes</span>
                            <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded">Healthy</span>
                        </div>
                        <div className="text-xs text-gray-500">最近同步: 10秒前</div>
                    </div>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-white">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">节点名称</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">角色</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">GPU 资源</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">利用率</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {[1, 2, 3, 4, 5].map(i => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">aks-pool-0{i}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="flex items-center gap-1.5 text-sm text-gray-700">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            Ready
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Worker</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8 x NVIDIA A100-80GB</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <div className="w-24 bg-gray-100 rounded-full h-2">
                                                <div className="bg-brand-500 h-2 rounded-full" style={{width: `${75 + i*2}%`}}></div>
                                            </div>
                                            <span className="text-xs text-gray-500">{75 + i*2}%</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Cluster 2 */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden opacity-75">
                    <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <h3 className="font-bold text-gray-900">gpustack-onprem-01</h3>
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded font-mono">GPUStack</span>
                            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded">Degraded</span>
                        </div>
                        <div className="text-xs text-gray-500">最近同步: 2分钟前</div>
                    </div>
                    <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="divide-y divide-gray-200">
                            <tr className="bg-red-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">node-gpu-01</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="flex items-center gap-1.5 text-sm text-red-700 font-medium">
                                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                        NotReady (Network)
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Worker</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4 x NVIDIA T4</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">Unknown</td>
                            </tr>
                             <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">node-gpu-02</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="flex items-center gap-1.5 text-sm text-gray-700">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Ready
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Worker</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4 x NVIDIA T4</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 bg-gray-100 rounded-full h-2">
                                            <div className="bg-brand-500 h-2 rounded-full" style={{width: '95%'}}></div>
                                        </div>
                                        <span className="text-xs text-gray-500">95%</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </SkeletonPage>
    );
};