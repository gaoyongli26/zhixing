import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const RuntimeBindings: React.FC = () => {
    return (
        <SkeletonPage title="运行绑定 (Runtime Bindings)" description="定义 Application Instance 如何被平台其他子系统（如 Capabilities）引用。">
            
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                            <h3 className="text-sm font-medium text-gray-700">绑定列表</h3>
                        </div>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-white">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">绑定名称 (Binding Name)</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">类型 (Type)</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">目标实例 (Target)</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">使用方 (Used By)</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-bold text-gray-900">binding_pdf_service</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-0.5 rounded text-xs bg-blue-50 text-blue-700 border border-blue-100">HTTP Endpoint</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                                        pdf-parser-prod-01
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        Capability: parse_document
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-green-600 text-xs font-medium">
                                        生效中
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-bold text-gray-900">binding_python_sandbox</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-0.5 rounded text-xs bg-purple-50 text-purple-700 border border-purple-100">MCP Endpoint</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                                        python-env-worker-pool-a
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        Capability: exec_code
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-green-600 text-xs font-medium">
                                        生效中
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-bold text-gray-900">binding_postgres_primary</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700 border border-gray-200">TCP/SQL</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                                        postgres-primary-01
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        Connector: Internal_DB
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-green-600 text-xs font-medium">
                                        生效中
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">绑定详情</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-500 uppercase mb-1">当前选中</label>
                                <div className="text-sm font-bold text-gray-900">binding_python_sandbox</div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500 uppercase mb-1">连接协议 (Protocol)</label>
                                <div className="p-2 bg-gray-50 border border-gray-200 rounded text-xs font-mono text-gray-600">
                                    mcp://10.0.0.5:9090
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500 uppercase mb-1">认证策略 (Auth Strategy)</label>
                                <div className="text-sm text-gray-700">mTLS (双向 TLS 认证)</div>
                            </div>
                            <div className="pt-4 border-t border-gray-100">
                                <button className="w-full border border-gray-300 rounded text-sm py-2 text-gray-700 hover:bg-gray-50">
                                    测试连通性 (Test Connectivity)
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-xs text-yellow-800">
                        <strong>注意：</strong> Binding 变更不会立即中断正在进行的 Run，但会影响新启动的 Capability 调用。建议在低峰期操作。
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};