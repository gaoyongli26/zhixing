import React from 'react';
import { SkeletonPage } from '../../../components/ui/SkeletonPage';

export const RoleList: React.FC = () => {
    return (
        <SkeletonPage title="角色定义 (Roles)" description="定义平台治理权限模板。角色是权限的集合，决定用户在控制台能看到什么、操作什么。">
            
            {/* Scope Warning */}
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-purple-700">
                            <strong>权限边界说明：</strong> 此处的 Role 仅控制管理控制台（Admin Console）的功能访问权限。
                            <br/>
                            Run 的执行权限（Identity）和 Capability 的调用授权请在 <span className="font-mono font-bold">Capabilities</span> 子系统中配置。
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-700">系统角色与自定义角色</h3>
                    <button className="bg-brand-600 text-white px-3 py-1.5 rounded text-sm hover:bg-brand-700 font-medium">
                        + 新建角色
                    </button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">角色名称</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">适用范围</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">权限配置 (Modules)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Role 1 */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">Platform Super Admin</div>
                                <span className="text-xs text-gray-400">System Built-in</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Global (Org)</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex gap-1 flex-wrap">
                                    <span className="px-2 py-0.5 rounded text-xs bg-blue-50 text-blue-700 border border-blue-100">All Modules</span>
                                    <span className="px-2 py-0.5 rounded text-xs bg-red-50 text-red-700 border border-red-100">Full Control</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                                拥有平台所有配置权限，包括配额管理与审计日志查看。
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-gray-400 cursor-not-allowed">锁定</button>
                            </td>
                        </tr>

                        {/* Role 2 */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">Project Owner</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Project</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex gap-1 flex-wrap max-w-xs">
                                    <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">Design (RW)</span>
                                    <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">Runs (R)</span>
                                    <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">Knowledge (RW)</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                                负责特定项目内的 Agent 设计与知识库维护。
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-brand-600 hover:text-brand-900 mr-3">配置权限</button>
                                <button className="text-gray-400 hover:text-red-600">删除</button>
                            </td>
                        </tr>

                        {/* Role 3 */}
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">Compliance Auditor</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Global (Org)</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex gap-1 flex-wrap">
                                    <span className="px-2 py-0.5 rounded text-xs bg-yellow-50 text-yellow-700 border border-yellow-100">Audit Logs (Read-Only)</span>
                                    <span className="px-2 py-0.5 rounded text-xs bg-yellow-50 text-yellow-700 border border-yellow-100">Policy (Read-Only)</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                                仅用于查看合规报告与审计追踪，无任何编辑权限。
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-brand-600 hover:text-brand-900 mr-3">配置权限</button>
                                <button className="text-gray-400 hover:text-red-600">删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};