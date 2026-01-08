import React from 'react';
import { SkeletonPage } from '../../../components/ui/SkeletonPage';

export const PermissionList: React.FC = () => {
    return (
        <SkeletonPage title="权限矩阵 (Permissions)" description="定义 UI / API 层面的访问控制。控制“谁能配置什么”，而非“Run 能做什么”。">
            
            {/* RBAC Warning */}
            <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-gray-700">
                            <strong>定位说明：</strong> 此页面仅控制管理控制台的功能开关（例如：能否看到“新建 Agent”按钮，能否调用 User Management API）。
                            <br/>
                            <span className="text-red-600 font-medium">严禁在此配置 Run 的行为：</span> 如需配置 Agent 是否允许调用外部 API，请前往 <strong>Capabilities</strong> 子系统。
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-x-auto">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-700">角色访问控制矩阵 (Role-Based Access Control)</h3>
                    <div className="flex gap-2">
                        <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-sm hover:bg-gray-50 font-medium">
                            导出矩阵 CSV
                        </button>
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase sticky left-0 bg-gray-50 z-10 w-64 border-r border-gray-200">
                                资源 / 动作 (Action)
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase w-32">
                                Super Admin
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase w-32">
                                Project Owner
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase w-32">
                                Developer
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase w-32">
                                Auditor
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Group: Design Subsystem */}
                        <tr className="bg-gray-50">
                            <td colSpan={5} className="px-6 py-2 text-xs font-bold text-gray-700 uppercase border-l-4 border-brand-500">
                                Design Subsystem (配置态)
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3 text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-100">
                                agent:create
                                <div className="text-xs text-gray-400 font-normal">创建新智能体</div>
                            </td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-gray-200">-</span></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3 text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-100">
                                agent:publish
                                <div className="text-xs text-gray-400 font-normal">发布/上线智能体版本</div>
                            </td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-gray-200">-</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-gray-200">-</span></td>
                        </tr>

                        {/* Group: Runs Subsystem */}
                        <tr className="bg-gray-50">
                            <td colSpan={5} className="px-6 py-2 text-xs font-bold text-gray-700 uppercase border-l-4 border-blue-500">
                                Runs Subsystem (运行态观测)
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3 text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-100">
                                run:view_list
                                <div className="text-xs text-gray-400 font-normal">查看执行列表</div>
                            </td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3 text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-100">
                                run:view_trace
                                <div className="text-xs text-gray-400 font-normal">查看详细 Trace (含 PII 脱敏后)</div>
                            </td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3 text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-100">
                                run:replay
                                <div className="text-xs text-gray-400 font-normal">发起重跑 / 恢复</div>
                            </td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-gray-200">-</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-gray-200">-</span></td>
                        </tr>

                        {/* Group: Admin Subsystem */}
                        <tr className="bg-gray-50">
                            <td colSpan={5} className="px-6 py-2 text-xs font-bold text-gray-700 uppercase border-l-4 border-purple-500">
                                Admin Subsystem (管理)
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3 text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-100">
                                admin:manage_users
                                <div className="text-xs text-gray-400 font-normal">添加/移除用户</div>
                            </td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-gray-200">-</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-gray-200">-</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-gray-200">-</span></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3 text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-100">
                                admin:view_audit_logs
                                <div className="text-xs text-gray-400 font-normal">查看平台操作审计日志</div>
                            </td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-gray-200">-</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-gray-200">-</span></td>
                            <td className="px-6 py-3 text-center"><span className="text-green-600 font-bold">✓</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};