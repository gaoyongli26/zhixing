import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const CapabilitiesCredentialsList: React.FC = () => {
    return (
        <SkeletonPage title="凭据 (Credentials)" description="AI 执行动作时使用的身份 (Identity)。Credential 是责任主体，审计与安全的关键对象。">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Credential Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Scope (Connectors)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Privilege Level</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Stripe_Secret_Key_Prod</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">API Key</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Stripe_Production_API</td>
                            <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-0.5 rounded text-xs bg-red-50 text-red-700 border border-red-100">Write / Admin</span></td>
                            <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-800">Active</span></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Salesforce_OAuth_Bot</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">OAuth 2.0</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Salesforce_CRM</td>
                            <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-0.5 rounded text-xs bg-blue-50 text-blue-700 border border-blue-100">Read Only</span></td>
                            <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-0.5 rounded text-xs bg-yellow-100 text-yellow-800">Rotating</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};

export const CapabilitiesCredentialsDetail: React.FC = () => {
    return (
        <SkeletonPage title="Stripe_Secret_Key_Prod" description="敏感凭据详情。">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                            <strong>安全提示：</strong> 仅显示元数据。真实密钥存储在 Vault 中，平台界面不可见。
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Lifecycle & Rotation</h3>
                <div className="text-sm text-gray-600 space-y-2">
                    <div className="flex justify-between w-64"><span>Created:</span> <span>2023-01-01</span></div>
                    <div className="flex justify-between w-64"><span>Last Rotated:</span> <span>2023-06-01</span></div>
                    <div className="flex justify-between w-64"><span>Next Rotation:</span> <span>2023-12-01</span></div>
                </div>
            </div>
            
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm mt-6">
                <h3 className="font-bold text-gray-900 mb-4">Run 关系</h3>
                <p className="text-sm text-gray-500">
                    在 Run Detail 中，所有使用此凭据的外部调用都将标记责任主体为 <span className="font-mono text-gray-700">Stripe_Secret_Key_Prod</span>。
                </p>
            </div>
        </SkeletonPage>
    );
};