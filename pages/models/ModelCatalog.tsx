import React, { useState } from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

// Mock Data
const MODELS = [
    { id: 'mod_01', name: 'gpt-4o', type: 'Chat', capabilities: ['Vision', 'Text', 'Audio'], lifecycle: 'Stable', context: '128k', output: '4k' },
    { id: 'mod_02', name: 'text-embedding-3-large', type: 'Embedding', capabilities: ['Vector'], lifecycle: 'Stable', context: '8k', output: '-' },
    { id: 'mod_03', name: 'llama-3-70b-instruct', type: 'Chat', capabilities: ['Text'], lifecycle: 'Preview', context: '8k', output: '2k' },
];

export const ModelCatalog: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string>(MODELS[0].id);
    const selectedModel = MODELS.find(m => m.id === selectedId) || MODELS[0];

    return (
        <SkeletonPage title="模型目录 (Model Catalog)" description="定义“能力是什么”。Model Catalog 描述推理能力的规格与标准，与部署方式无关。">
            
            {/* Concept Warning */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            <strong>概念说明：</strong> 这里仅定义标准（如 "GPT-4o"），不代表可执行的接口。
                            <br/>
                            如需查看实际运行的 API 端点，请前往 <span className="font-mono font-bold">Model Services</span>。
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 h-[600px]">
                
                {/* Left: Catalog List */}
                <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col">
                    <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">可用模型</h3>
                        <button className="text-xs text-brand-600 font-medium hover:underline">+ 注册新模型</button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-2">
                        {MODELS.map(model => (
                            <div 
                                key={model.id}
                                onClick={() => setSelectedId(model.id)}
                                className={`p-3 rounded-md cursor-pointer border transition-all ${
                                    selectedId === model.id 
                                    ? 'bg-brand-50 border-brand-300 shadow-sm' 
                                    : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'
                                }`}
                            >
                                <div className="flex justify-between items-start">
                                    <span className={`text-sm font-bold ${selectedId === model.id ? 'text-brand-900' : 'text-gray-900'}`}>{model.name}</span>
                                    {model.lifecycle === 'Preview' && <span className="text-[10px] bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded">Preview</span>}
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200">{model.type}</span>
                                    <div className="flex gap-1">
                                        {model.capabilities.map(cap => (
                                            <span key={cap} className="text-[10px] text-gray-500 bg-white border border-gray-100 px-1 rounded">{cap}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Catalog Detail */}
                <div className="col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm p-6 overflow-y-auto">
                    <div className="border-b border-gray-200 pb-4 mb-6 flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">{selectedModel.name}</h2>
                            <p className="text-sm text-gray-500 mt-1">标准规格定义 (Standard Specification)</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50">编辑规格</button>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Capabilities Specs */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider border-b border-gray-100 pb-1">能力规格 (Capability Specs)</h3>
                            <div className="grid grid-cols-3 gap-6 text-sm">
                                <div>
                                    <span className="block text-gray-500 text-xs">上下文窗口 (Context Window)</span>
                                    <span className="font-mono font-medium text-gray-900">{selectedModel.context}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-xs">最大输出 (Max Output)</span>
                                    <span className="font-mono font-medium text-gray-900">{selectedModel.output}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-500 text-xs">支持模态 (Modalities)</span>
                                    <span className="font-medium text-gray-900">{selectedModel.capabilities.join(', ')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Lifecycle Info */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider border-b border-gray-100 pb-1">生命周期 (Lifecycle)</h3>
                            <div className="bg-gray-50 rounded p-4 text-sm text-gray-600">
                                <p>状态: <span className="font-bold text-gray-900">{selectedModel.lifecycle}</span></p>
                                <p className="mt-1">知识截止日期: 2023年10月</p>
                                <p className="mt-1 text-xs text-gray-400">由平台管理员于 2023-05-15 定义。</p>
                            </div>
                        </div>

                        {/* Linked Services (Read Only) */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider border-b border-gray-100 pb-1">当前实现 (Provided By)</h3>
                            <p className="text-xs text-gray-500 mb-3">以下活跃服务实现了此模型规格：</p>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">svc.azure.gpt4o.prod</div>
                                            <div className="text-xs text-gray-500">Provider: Azure East US</div>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400 font-mono">ID: svc_823</span>
                                </div>
                                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">svc.openai.gpt4o.fallback</div>
                                            <div className="text-xs text-gray-500">Provider: OpenAI Platform</div>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400 font-mono">ID: svc_991</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};