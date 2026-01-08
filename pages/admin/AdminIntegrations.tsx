import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const AdminIntegrations: React.FC = () => {
    return (
        <SkeletonPage title="集成与身份 (Integrations & Identity)" description="定义平台如何接入企业既有体系（身份认证、外部审计）。">
            <div className="space-y-6">
                
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4">身份认证 (Identity Providers)</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border border-gray-200 rounded p-4 flex items-center justify-between bg-gray-50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold">OIDC</div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">OpenID Connect</div>
                                    <div className="text-xs text-gray-500">Okta / Auth0 / Azure AD</div>
                                </div>
                            </div>
                            <button className="px-3 py-1 bg-white border border-gray-300 rounded text-xs hover:bg-gray-50">配置</button>
                        </div>
                        <div className="border border-gray-200 rounded p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-600 font-bold">LDAP</div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">LDAP / AD</div>
                                    <div className="text-xs text-gray-500">Legacy Active Directory</div>
                                </div>
                            </div>
                            <button className="px-3 py-1 bg-white border border-gray-300 rounded text-xs hover:bg-gray-50">启用</button>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4">外部系统集成 (External Sinks)</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                            <div>
                                <div className="text-sm font-bold text-gray-900">Splunk Audit Forwarding</div>
                                <div className="text-xs text-gray-500">将所有管理操作审计日志推送到 Splunk HEC。</div>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">已连接</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-sm font-bold text-gray-900">PagerDuty Incidents</div>
                                <div className="text-xs text-gray-500">当配额耗尽或系统健康度下降时触发。</div>
                            </div>
                            <button className="text-sm text-brand-600 hover:underline">配置</button>
                        </div>
                    </div>
                </div>

            </div>
        </SkeletonPage>
    );
};