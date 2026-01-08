import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const CapabilitiesMCPList: React.FC = () => {
    return (
        <SkeletonPage title="MCP 接口 (MCP Interfaces)" description="Model Context Protocol 接口定义。标准化的执行契约，屏蔽底层连接细节。">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">MCP Interface Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Protocol Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bound Connector</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Used By Skills</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">mcp.payment.refund</td>
                            <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700 border border-gray-200">JSON-RPC / HTTP</span></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Stripe_Connector_v1</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Active</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">mcp.search.vector_db</td>
                            <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700 border border-gray-200">gRPC</span></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Qdrant_Internal</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">12</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Active</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};

export const CapabilitiesMCPDetail: React.FC = () => {
    return (
        <SkeletonPage title="mcp.payment.refund" description="MCP 协议层定义。不包含业务语义，只包含技术签名。">
            <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">Method Signature</h3>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm text-gray-700">
                        POST /mcp/execute
                        <br/>
                        Content-Type: application/json
                    </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm text-gray-300">
                    <div className="text-gray-500 mb-2">// Technical Schema (Protocol Level)</div>
                    <pre>
{`{
  "namespace": "payment",
  "method": "refund",
  "parameters": {
      "amount_cents": "integer",
      "currency_iso": "string"
  },
  "timeout_ms": 30000,
  "retry_policy": "none"
}`}
                    </pre>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-sm text-yellow-700">
                        <strong>Run 关系说明：</strong> MCP 调用的 Request/Response 是 Run 回放与取证的<strong>最低层证据</strong>。
                    </p>
                </div>
            </div>
        </SkeletonPage>
    );
};