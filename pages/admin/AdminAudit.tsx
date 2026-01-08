import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const AdminAudit: React.FC = () => {
    return (
        <SkeletonPage title="审计配置 (Audit Configuration)" description="定义 Run 的记录深度与数据留存规则。">
            
            {/* Context Warning */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                            <strong>架构视图说明：</strong> 此处仅定义<strong>“记什么”</strong>（Logging Policy）。
                            <br/>
                            具体的审计日志（Logs）与证据内容（Evidence）属于运行态数据，请前往 <span className="font-mono font-bold">Runs → Explorer</span> 或 <span className="font-mono font-bold">Runs → Governance</span> 查看。
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">记录深度 (Audit Recording Level)</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                <div>
                                    <div className="text-sm font-medium text-gray-900">记录输入/输出 (Capture I/O)</div>
                                    <div className="text-xs text-gray-500">完整记录 Prompt 和 Completion 的文本内容。</div>
                                </div>
                                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input type="checkbox" checked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:right-0 checked:border-green-400"/>
                                    <label className="toggle-label block overflow-hidden h-6 rounded-full bg-green-400 cursor-pointer"></label>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                <div>
                                    <div className="text-sm font-medium text-gray-900">记录思维链 (Capture Thought Chain)</div>
                                    <div className="text-xs text-gray-500">记录 Agent 的中间推理过程（CoT / Reasoning）。</div>
                                </div>
                                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input type="checkbox" checked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:right-0 checked:border-green-400"/>
                                    <label className="toggle-label block overflow-hidden h-6 rounded-full bg-green-400 cursor-pointer"></label>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <div>
                                    <div className="text-sm font-medium text-gray-900">记录工具调用 (Capture Tool Payloads)</div>
                                    <div className="text-xs text-gray-500">记录工具调用的详细参数与原始返回结果。</div>
                                </div>
                                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300"/>
                                    <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-gray-900">证据捕获 (Evidence Capture)</h3>
                            <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">Storage Heavy</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <div className="text-sm font-medium text-gray-900">记录原始证据 (Capture Raw Evidence)</div>
                                <div className="text-xs text-gray-500">保存 RAG 检索到的原始文档片段快照，用于溯源审计。</div>
                            </div>
                            <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300"/>
                                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-blue-50 text-blue-700 text-xs rounded border border-blue-100">
                            开启此选项将显著增加存储成本。建议配合较短的数据留存策略使用。
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">数据留存 (Data Retention)</h3>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">追踪数据 (Hot Storage)</label>
                            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50 text-sm">
                                <option>30 Days</option>
                                <option>90 Days</option>
                                <option>1 Year</option>
                            </select>
                            <p className="mt-1 text-xs text-gray-500">Run Explorer 中可即时查询的日志。</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">合规归档 (Cold Storage)</label>
                            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50 text-sm">
                                <option>7 Years (Default)</option>
                                <option>10 Years</option>
                                <option>Indefinite</option>
                            </select>
                            <p className="mt-1 text-xs text-gray-500">用于满足监管要求的长期归档。</p>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
                                <span className="text-sm text-gray-600">到期后立即物理删除 (Purge)</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};