import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const ApplicationInstances: React.FC = () => {
    return (
        <SkeletonPage title="应用实例 (Application Instances)" description="展示当前平台中“已经部署并可被调用的应用实例”。运维与平台管理员的核心页面。">
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <h3 className="text-sm font-medium text-gray-700">活跃实例列表</h3>
                    <div className="flex gap-2">
                        <span className="text-xs text-gray-500 flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> 12 Running
                        </span>
                        <span className="text-xs text-gray-500 flex items-center ml-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span> 1 Failed
                        </span>
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Instance Name / ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Application</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deployed Target</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Binding</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Control</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Instance 1 */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">pdf-parser-prod-01</div>
                                <div className="text-xs text-gray-500 font-mono">inst_app_881</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                PDF_Parser_Service (v2.1.0)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Cluster: aks-prod-01
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    Running
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-mono">
                                http://10.0.4.12:8080
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-gray-600 hover:text-gray-900 mr-2">Restart</button>
                                <button className="text-red-600 hover:text-red-900">Stop</button>
                            </td>
                        </tr>

                        {/* Instance 2 */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">python-env-worker-pool-a</div>
                                <div className="text-xs text-gray-500 font-mono">inst_app_992</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Python_Sandboxed_Env (v1.5.0)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Cluster: aks-prod-01
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    Running
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-mono">
                                mcp://python-sandbox
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-gray-600 hover:text-gray-900 mr-2">Restart</button>
                                <button className="text-red-600 hover:text-red-900">Stop</button>
                            </td>
                        </tr>

                        {/* Instance 3 */}
                        <tr className="hover:bg-gray-50 bg-red-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">legacy-pay-connector</div>
                                <div className="text-xs text-gray-500 font-mono">inst_app_001</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Legacy_Payment_Gateway (v0.9.0)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                VM: legacy-vm-04
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    Failed
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-mono">
                                -
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-blue-600 hover:text-blue-900 mr-2">Logs</button>
                                <button className="text-brand-600 hover:text-brand-900">Redeploy</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Run-First Warning */}
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center text-sm text-gray-500">
                此页面仅展示实例的<strong>存活状态 (Liveness)</strong>。
                如需查看该实例被哪些 Run 调用，或查看调用日志，请通过 Binding ID 前往 <span className="font-mono font-bold">Runtime Bindings</span> 或 <span className="font-mono font-bold">Runs Explorer</span>。
            </div>
        </SkeletonPage>
    );
};