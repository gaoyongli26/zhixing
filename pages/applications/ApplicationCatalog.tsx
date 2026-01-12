import React, { useState } from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';
import { Icon } from '../../constants';

// Mock Data
const APPLICATIONS = [
    {
        id: 'app_01',
        name: '通用 PDF 解析服务',
        description: '基于 OCR 的高性能 PDF 解析服务，支持多语言识别与表格提取。',
        type: '工具服务',
        interfaces: ['HTTP', 'gRPC'],
        version: 'v2.1.0',
        status: '已发布'
    },
    {
        id: 'app_02',
        name: 'Python 沙箱环境',
        description: '安全隔离的代码执行环境，预装 NumPy/Pandas，限制网络访问。',
        type: '运行时环境',
        interfaces: ['MCP'],
        version: 'v1.5.0',
        status: '已发布'
    },
    {
        id: 'app_03',
        name: '旧版支付网关',
        description: '旧版支付接口封装，用于兼容老系统订单处理。',
        type: 'API 后端',
        interfaces: ['REST'],
        version: 'v0.9.0',
        status: '已废弃'
    },
    {
        id: 'app_04',
        name: 'PostgreSQL 数据库服务',
        description: '企业级关系型数据库实例，支持自动备份与高可用配置。',
        type: '数据服务',
        interfaces: ['TCP', 'SQL'],
        version: 'v15.4',
        status: '已发布'
    },
    {
        id: 'app_05',
        name: 'Redis 缓存集群',
        description: '高性能内存数据结构存储，用于缓存与消息代理。',
        type: '数据服务',
        interfaces: ['TCP'],
        version: 'v7.0',
        status: '已发布'
    },
    {
        id: 'app_06',
        name: '邮件通知服务',
        description: '集成 SMTP/SendGrid 的通用邮件发送服务，支持模板渲染。',
        type: '工具服务',
        interfaces: ['HTTP', 'MCP'],
        version: 'v1.2.0',
        status: '已发布'
    },
    {
        id: 'app_07',
        name: '通用网页爬虫',
        description: '支持动态渲染的网页抓取工具，内置防反爬策略与代理池。',
        type: '工具服务',
        interfaces: ['HTTP', 'MCP'],
        version: 'v3.0.1',
        status: '开发中'
    }
];

export const ApplicationCatalog: React.FC = () => {
    const [viewMode, setViewMode] = useState<'card' | 'list'>('card');

    return (
        <SkeletonPage title="应用资产 (Application Catalog)" description="定义平台中“可被部署和复用的运行依赖模板”。开发者与平台侧的交付清单。">
            
            {/* Run-First Architecture Note */}
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-purple-700">
                            <strong>架构规则：</strong> Application 是 Run 的“运行依赖”，但不是 Run 的执行主体。
                            <br/>
                            Run 不会直接由此处产生，Run 执行时调用的是 <strong>应用实例 (Application Instance)</strong>。
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <h3 className="text-sm font-medium text-gray-700">应用定义列表</h3>
                        <div className="flex bg-gray-200 rounded p-0.5 gap-0.5">
                            <button
                                onClick={() => setViewMode('card')}
                                className={`p-1.5 rounded transition-all ${viewMode === 'card' ? 'bg-white shadow text-brand-600' : 'text-gray-500 hover:text-gray-700'}`}
                                title="卡片视图"
                            >
                                <Icon name="cube" className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-1.5 rounded transition-all ${viewMode === 'list' ? 'bg-white shadow text-brand-600' : 'text-gray-500 hover:text-gray-700'}`}
                                title="列表视图"
                            >
                                <Icon name="list" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <button className="bg-brand-600 text-white px-3 py-1.5 rounded text-sm hover:bg-brand-700 font-medium">
                        + 注册新应用
                    </button>
                </div>

                {viewMode === 'list' ? (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">应用名称 (Name)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">类型 (Type)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">接口协议 (Interfaces)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">版本 (Version)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态 (Status)</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">操作</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {APPLICATIONS.map((app) => (
                                <tr key={app.id} className={`hover:bg-gray-50 ${app.status === '已废弃' ? 'opacity-60' : ''}`}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-bold text-gray-900">{app.name}</div>
                                        <div className="text-xs text-gray-500">{app.description}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-0.5 rounded text-xs border ${
                                            app.type === '工具服务' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                            app.type === '运行时环境' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                            'bg-gray-100 text-gray-700 border-gray-200'
                                        }`}>
                                            {app.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex gap-1">
                                            {app.interfaces.map(iface => (
                                                <span key={iface} className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200">{iface}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">{app.version}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-0.5 rounded text-xs ${
                                            app.status === '已发布' ? 'bg-green-100 text-green-800' : 
                                            app.status === '开发中' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        {app.status === '已废弃' ? (
                                            <button className="text-gray-400 cursor-not-allowed">无法部署</button>
                                        ) : (
                                            <>
                                                <button className="text-brand-600 hover:text-brand-900 mr-3">详情</button>
                                                <button className="text-blue-600 hover:text-blue-900">部署实例</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {APPLICATIONS.map((app) => (
                            <div key={app.id} className={`bg-white border border-gray-200 rounded-lg shadow-sm hover:border-brand-300 transition-all flex flex-col ${app.status === '已废弃' ? 'opacity-75' : ''}`}>
                                <div className="p-5 flex-1">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 bg-gray-100 rounded text-gray-600">
                                                <Icon name={app.type === '运行时环境' ? 'cube' : 'server-stack'} className="w-4 h-4" />
                                            </div>
                                            <h4 className="text-sm font-bold text-gray-900 line-clamp-1" title={app.name}>{app.name}</h4>
                                        </div>
                                        <span className={`px-2 py-0.5 rounded text-xs flex-shrink-0 ${
                                            app.status === '已发布' ? 'bg-green-100 text-green-800' : 
                                            app.status === '开发中' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {app.status}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-4 h-8 line-clamp-2">{app.description}</p>
                                    
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-gray-400">类型</span>
                                            <span className={`px-1.5 py-0.5 rounded text-xs border ${
                                                app.type === '工具服务' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                                app.type === '运行时环境' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                                'bg-gray-50 text-gray-600 border-gray-100'
                                            }`}>{app.type}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-gray-400">接口</span>
                                            <div className="flex gap-1">
                                                {app.interfaces.map(iface => (
                                                    <span key={iface} className="bg-gray-50 border border-gray-200 px-1.5 rounded text-gray-600">{iface}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-gray-400">版本</span>
                                            <span className="font-mono text-gray-700">{app.version}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-100 px-5 py-3 bg-gray-50 rounded-b-lg flex justify-between items-center">
                                    <button className="text-xs text-gray-500 hover:text-gray-900 font-medium">查看详情</button>
                                    {app.status === '已废弃' ? (
                                        <span className="text-xs text-gray-400 cursor-not-allowed">无法部署</span>
                                    ) : (
                                        <button className="text-xs bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded shadow-sm hover:bg-gray-50 hover:text-blue-600">
                                            部署实例
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        
                        {/* Add New Card */}
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 hover:border-brand-300 hover:text-brand-600 cursor-pointer hover:bg-brand-50 transition-colors min-h-[220px]">
                            <div className="p-3 bg-gray-50 rounded-full mb-3 group-hover:bg-white">
                                <Icon name="collection" className="w-6 h-6" />
                            </div>
                            <span className="font-medium text-sm">+ 注册新应用</span>
                        </div>
                    </div>
                )}
            </div>
        </SkeletonPage>
    );
};