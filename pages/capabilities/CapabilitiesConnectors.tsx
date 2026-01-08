import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const CapabilitiesConnectorsList: React.FC = () => {
    return (
        <SkeletonPage title="连接器 (Connectors)" description="外部系统的连接抽象。描述“连的是哪个系统”，不描述调用细节。">
             <div className="grid grid-cols-3 gap-6">
                 {['Stripe_Production_API', 'Internal_Postgres_DB', 'Salesforce_CRM'].map((conn, i) => (
                     <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between h-48">
                         <div>
                             <div className="flex justify-between items-start">
                                 <h3 className="font-bold text-gray-900">{conn}</h3>
                                 <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded">Active</span>
                             </div>
                             <div className="mt-3 text-xs text-gray-500 space-y-1">
                                 <p>Type: External / REST</p>
                                 <p>Host: api.stripe.com</p>
                                 <p>Network: Public Internet</p>
                             </div>
                         </div>
                         <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                             <span className="text-xs text-gray-400">Associated MCPs: 4</span>
                             <button className="text-xs text-brand-600 hover:underline">Configure</button>
                         </div>
                     </div>
                 ))}
             </div>
        </SkeletonPage>
    );
};

export const CapabilitiesConnectorsDetail: React.FC = () => {
    return (
        <SkeletonPage title="Stripe_Production_API" description="Stripe 支付网关连接配置。">
            <div className="space-y-6">
                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">Endpoint Configuration</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div><span className="text-gray-500">Base URL:</span> <span className="font-mono ml-2">https://api.stripe.com/v1</span></div>
                        <div><span className="text-gray-500">Proxy:</span> <span className="ml-2 text-gray-400">None</span></div>
                        <div><span className="text-gray-500">Network Scope:</span> <span className="text-gray-900 ml-2">Public Internet (Egress Allowed)</span></div>
                    </div>
                </div>
                
                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">关联 MCP 接口</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>mcp.payment.charge</li>
                        <li>mcp.payment.refund</li>
                        <li>mcp.payment.get_status</li>
                    </ul>
                </div>
            </div>
        </SkeletonPage>
    );
};