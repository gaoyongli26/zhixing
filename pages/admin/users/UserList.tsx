import React from 'react';
import { SkeletonPage } from '../../../components/ui/SkeletonPage';

export const UserList: React.FC = () => {
    return (
        <SkeletonPage title="用户列表 (Users)" description="管理平台内的身份主体。用户是配置规则、审计与治理的操作者。">
            
            {/* Identity Scope Warning */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                            <strong>定位说明：</strong> 此处的“用户”仅指能够登录本平台进行管理、设计与审计的自然人。
                            <br/>
                            Run 的执行身份（Identity）属于 Capability 授权范畴，请勿在此配置。本列表不展示用户的 Run 执行记录。
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                 <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <div className="flex items-center gap-4">
                        <h3 className="text-sm font-medium text-gray-700">成员管理</h3>
                        <div className="relative">
                            <input type="text" placeholder="搜索用户名或邮箱..." className="border border-gray-300 rounded pl-8 pr-3 py-1.5 text-sm w-64 focus:ring-1 focus:ring-brand-500 focus:border-brand-500" />
                            <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-sm hover:bg-gray-50 font-medium">
                            批量导入
                        </button>
                        <button className="bg-brand-600 text-white px-3 py-1.5 rounded text-sm hover:bg-brand-700 font-medium">
                            + 新建用户
                        </button>
                    </div>
                 </div>
                 <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">用户标识</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">所属 Organization</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">平台角色</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">认证源</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* User 1 */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xs border border-brand-200">
                                        AD
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">Admin User</div>
                                        <div className="text-xs text-gray-500">admin@acme.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Acme Corp (Global)
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                    Platform Super Admin
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                    Local DB
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-800 border border-green-200">Active</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-gray-400 hover:text-brand-600 mr-3">编辑</button>
                                <button className="text-gray-400 hover:text-brand-600">重置密码</button>
                            </td>
                        </tr>

                        {/* User 2 */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs border border-blue-200">
                                        JA
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">Jane Auditor</div>
                                        <div className="text-xs text-gray-500">jane.auditor@acme.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Acme Finance Secure
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    Compliance Auditor
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    SSO (Okta)
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-800 border border-green-200">Active</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-gray-400 hover:text-brand-600 mr-3">编辑</button>
                                <button className="text-gray-400 hover:text-red-600">禁用</button>
                            </td>
                        </tr>

                        {/* User 3 */}
                        <tr className="hover:bg-gray-50 opacity-60">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-xs border border-gray-200">
                                        DO
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">Dave Operations</div>
                                        <div className="text-xs text-gray-500">dave.ops@acme.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Legacy R&D
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    Project Manager
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Local DB
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600 border border-gray-200">Disabled</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-brand-600 hover:text-brand-900">启用</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};