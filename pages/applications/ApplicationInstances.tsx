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
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> 15 运行中
                        </span>
                        <span className="text-xs text-gray-500 flex items-center ml-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span> 1 异常
                        </span>
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">实例名称 / ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">所属应用 (Application)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">部署目标</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">访问端点 (Endpoint)</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">控制</th>
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
                                通用 PDF 解析服务 (v2.1.0)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Cluster: aks-prod-01
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    运行中
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-mono">
                                http://10.0.4.12:8080
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-gray-600 hover:text-gray-900 mr-2">重启</button>
                                <button className="text-red-600 hover:text-red-900">停止</button>
                            </td>
                        </tr>

                        {/* Instance 2 */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">python-env-worker-pool-a</div>
                                <div className="text-xs text-gray-500 font-mono">inst_app_992</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Python 沙箱环境 (v1.5.0)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Cluster: aks-prod-01
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    运行中
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-mono">
                                mcp://python-sandbox
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-gray-600 hover:text-gray-900 mr-2">重启</button>
                                <button className="text-red-600 hover:text-red-900">停止</button>
                            </td>
                        </tr>

                        {/* Instance 3: Database */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">postgres-primary-01</div>
                                <div className="text-xs text-gray-500 font-mono">inst_db_102</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                PostgreSQL 数据库服务 (v15.4)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                AWS RDS (us-east-1)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    运行中
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-mono">
                                postgres://db-prod.internal:5432
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-gray-600 hover:text-gray-900 mr-2">监控</button>
                                <button className="text-brand-600 hover:text-brand-900">备份</button>
                            </td>
                        </tr>

                        {/* Instance 4: Cache */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">redis-cache-prod</div>
                                <div className="text-xs text-gray-500 font-mono">inst_cache_303</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Redis 缓存集群 (v7.0)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Cluster: aks-prod-01
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    运行中
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-mono">
                                redis://cache-cluster:6379
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-gray-600 hover:text-gray-900 mr-2">重启</button>
                                <button className="text-brand-600 hover:text-brand-900">扩容</button>
                            </td>
                        </tr>

                        {/* Instance 5: Email Tool */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">email-sender-worker-01</div>
                                <div className="text-xs text-gray-500 font-mono">inst_mail_404</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                邮件通知服务 (v1.2.0)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                VM: worker-node-03
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    运行中
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-mono">
                                http://10.0.5.20:3000
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-gray-600 hover:text-gray-900 mr-2">日志</button>
                                <button className="text-red-600 hover:text-red-900">停止</button>
                            </td>
                        </tr>

                        {/* Instance 6: Legacy */}
                        <tr className="hover:bg-gray-50 bg-red-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">legacy-pay-connector</div>
                                <div className="text-xs text-gray-500 font-mono">inst_app_001</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                旧版支付网关 (v0.9.0)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                VM: legacy-vm-04
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    失败 (Failed)
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 font-mono">
                                -
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-blue-600 hover:text-blue-900 mr-2">日志</button>
                                <button className="text-brand-600 hover:text-brand-900">重新部署</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Run-First Warning */}
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center text-sm text-gray-500">
                此页面仅展示实例的<strong>存活状态 (Liveness)</strong>。
                如需查看该实例被哪些 Run 调用，或查看调用日志，请通过 Binding ID 前往 <span className="font-mono font-bold">运行绑定 (Runtime Bindings)</span> 或 <span className="font-mono font-bold">Runs Explorer</span>。
            </div>
        </SkeletonPage>
    );
};