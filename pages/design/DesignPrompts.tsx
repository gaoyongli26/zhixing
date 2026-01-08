import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const DesignPromptLibrary: React.FC = () => {
    return (
        <SkeletonPage title="提示词库 (Prompt Bundles)" description="Agent 与 Workflow 的行为策略集合。">
             <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bundle Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Scope</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Version</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Modified</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-brand-600">Finance_Global_Bundle</td>
                            <td className="px-6 py-4 text-sm text-gray-500">Global</td>
                            <td className="px-6 py-4 text-sm text-gray-500">v4.2</td>
                            <td className="px-6 py-4 text-sm text-gray-500">2h ago</td>
                        </tr>
                         <tr>
                            <td className="px-6 py-4 text-sm font-medium text-brand-600">Customer_Support_Tone</td>
                            <td className="px-6 py-4 text-sm text-gray-500">Project (Support)</td>
                            <td className="px-6 py-4 text-sm text-gray-500">v1.0</td>
                            <td className="px-6 py-4 text-sm text-gray-500">1d ago</td>
                        </tr>
                    </tbody>
                </table>
             </div>
        </SkeletonPage>
    );
};

export const DesignPromptEditor: React.FC = () => {
    return (
        <SkeletonPage title="编辑器 (Prompt Editor)" description="分层配置 System, Policy, Role 与 Task Prompts。">
            <div className="grid grid-cols-2 gap-6 h-[600px]">
                <div className="space-y-4 overflow-y-auto pr-2">
                    <div className="bg-white p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-gray-700">System Prompt</label>
                            <span className="text-xs text-gray-400">Layer 1</span>
                        </div>
                        <textarea className="w-full h-24 border-gray-300 rounded text-sm p-2 font-mono bg-gray-50" defaultValue="You are a helpful assistant for Acme Corp." />
                    </div>
                     <div className="bg-white p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-gray-700">Risk Policy (Inherited)</label>
                             <span className="text-xs text-gray-400">Layer 2</span>
                        </div>
                        <textarea disabled className="w-full h-24 border-gray-300 rounded text-sm p-2 font-mono bg-gray-100 text-gray-500" defaultValue="DO NOT reveal user PII. DO NOT give financial advice." />
                    </div>
                     <div className="bg-white p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-gray-700">Task Template</label>
                             <span className="text-xs text-gray-400">Layer 3</span>
                        </div>
                        <textarea className="w-full h-24 border-gray-300 rounded text-sm p-2 font-mono bg-gray-50" defaultValue="Analyze the following document: {{document_text}}" />
                    </div>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-y-auto">
                    <div className="uppercase text-xs text-gray-500 mb-4 border-b border-gray-700 pb-2">Final Prompt Preview (Read Only)</div>
                    <p>You are a helpful assistant for Acme Corp.</p>
                    <br/>
                    <p className="opacity-75"># Security Rules</p>
                    <p>DO NOT reveal user PII. DO NOT give financial advice.</p>
                    <br/>
                    <p>Analyze the following document: [Variable Placeholder]</p>
                </div>
            </div>
        </SkeletonPage>
    );
};