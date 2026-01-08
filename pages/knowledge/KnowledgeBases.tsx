import React, { useState } from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

const MOCK_KBS = [
    { id: 'kb_01', name: 'Product_Docs_Global', status: 'Active', sources: 12, indexStatus: 'Ready', updated: '10 mins ago' },
    { id: 'kb_02', name: 'Legal_Contracts_Q3', status: 'Active', sources: 5, indexStatus: 'Building (45%)', updated: 'Just now' },
    { id: 'kb_03', name: 'Legacy_Wiki_Archive', status: 'Disabled', sources: 1, indexStatus: 'Error', updated: '30 days ago' },
];

export const KnowledgeBaseList: React.FC = () => {
    return (
        <SkeletonPage title="知识库列表 (Knowledge Bases)" description="Ragflow 索引集合的逻辑容器。管理事实域的边界与生命周期。">
            
            {/* Run-First Architecture Note */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            <strong>架构说明：</strong> Knowledge Base 仅作为管理容器。
                            <br/>
                            Run 执行时使用的是 <strong>Snapshot (快照)</strong>，而非当前的 Knowledge Base，以确保结果的可回放性 (Replayability)。
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                 <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-700">知识库容器</h3>
                    <button className="px-3 py-1.5 bg-brand-600 text-white rounded text-sm hover:bg-brand-700">创建知识库</button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">名称</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">绑定数据源</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">当前索引状态</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">最近更新</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">操作</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {MOCK_KBS.map(kb => (
                            <tr key={kb.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-600 cursor-pointer">{kb.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{kb.sources} Sources</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${
                                        kb.indexStatus.startsWith('Ready') ? 'bg-green-50 text-green-700 border-green-200' :
                                        kb.indexStatus.startsWith('Building') ? 'bg-blue-50 text-blue-700 border-blue-200 animate-pulse' :
                                        'bg-red-50 text-red-700 border-red-200'
                                    }`}>
                                        {kb.indexStatus}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{kb.updated}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{kb.status}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-brand-600 hover:text-brand-800 cursor-pointer">配置</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};

export const KnowledgeBaseDetail: React.FC = () => {
    return (
        <SkeletonPage title="Product_Docs_Global" description="Ragflow 索引详情。">
             <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                    {/* Basic Info */}
                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">基本信息</h3>
                        <p className="text-sm text-gray-600 mb-4">官方产品文档集合，包含 API 参考、用户手册与硬件规格说明书。</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                <span className="block text-xs text-gray-500 uppercase">Ragflow Engine</span>
                                <span className="font-mono font-bold text-gray-900">ragflow-v2-standard</span>
                            </div>
                            <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                <span className="block text-xs text-gray-500 uppercase">Current Index Version</span>
                                <span className="font-mono font-bold text-gray-900">v1024 (Hash: 9a8b...)</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">绑定数据源 (Read-Only)</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded border border-transparent hover:border-gray-100">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span className="text-sm text-gray-700">Official_Website_Crawler</span>
                                </div>
                                <span className="text-xs text-gray-400">Sync: Hourly</span>
                            </div>
                            <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded border border-transparent hover:border-gray-100">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span className="text-sm text-gray-700">Tech_Spec_PDFs_S3</span>
                                </div>
                                <span className="text-xs text-gray-400">Sync: Daily</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 space-y-6">
                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">操作</h3>
                        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 mb-3">
                            触发立即构建 (Rebuild Index)
                        </button>
                        <button className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50">
                            创建快照 (Snapshot)
                        </button>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                        <h4 className="text-xs font-bold text-yellow-800 uppercase mb-2">测试说明</h4>
                        <p className="text-xs text-yellow-700">
                            此处不支持直接检索测试。请前往 <span className="font-bold">Playground</span> 或使用 <span className="font-bold">Design → Agents</span> 进行上下文调试。
                        </p>
                    </div>
                </div>
             </div>
        </SkeletonPage>
    );
};