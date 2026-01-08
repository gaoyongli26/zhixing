import React, { useState } from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

// Mock Data
const SERVICES = [
    { id: 'svc_01', endpoint: 'svc.azure.gpt4o.prod', catalog: 'gpt-4o', provider: 'Azure_Corp_Account', status: 'Healthy', rpm: '240k' },
    { id: 'svc_02', endpoint: 'svc.azure.gpt4o.dev', catalog: 'gpt-4o', provider: 'Azure_Corp_Account', status: 'Healthy', rpm: '10k' },
    { id: 'svc_03', endpoint: 'svc.openai.direct', catalog: 'gpt-4o', provider: 'OpenAI_Lab_Key', status: 'Healthy', rpm: '5k' },
    { id: 'svc_04', endpoint: 'svc.local.llama3', catalog: 'llama-3-70b-instruct', provider: 'Self_Hosted_VLLM', status: 'Degraded', rpm: '500' },
];

export const ModelServices: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string>(SERVICES[0].id);
    const selectedSvc = SERVICES.find(s => s.id === selectedId) || SERVICES[0];

    return (
        <SkeletonPage title="模型服务 (Model Services)" description="定义“如何调用”。Service 是模型目录在特定提供方上的可执行实例。">
            
            {/* Run-First Rule */}
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-green-800">
                            <strong>架构规则：</strong> Service 是 Run 唯一可直接调用的对象。
                            <br/>
                            Run 不直接调用 Catalog 或 Provider，必须通过 Service Endpoint 进行交互。
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 h-[600px]">
                
                {/* Left: Service List */}
                <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col">
                    <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">活跃服务</h3>
                        <button className="text-xs text-brand-600 font-medium hover:underline">+ 部署新服务</button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-2">
                        {SERVICES.map(svc => (
                            <div 
                                key={svc.id}
                                onClick={() => setSelectedId(svc.id)}
                                className={`p-3 rounded-md cursor-pointer border transition-all ${
                                    selectedId === svc.id 
                                    ? 'bg-brand-50 border-brand-300 shadow-sm' 
                                    : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'
                                }`}
                            >
                                <div className="flex justify-between items-start">
                                    <span className={`text-sm font-mono font-medium truncate ${selectedId === svc.id ? 'text-brand-700' : 'text-gray-800'}`}>{svc.endpoint}</span>
                                    <span className={`w-2 h-2 rounded-full mt-1.5 ${svc.status === 'Healthy' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`}></span>
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                    绑定: <span className="font-semibold text-gray-700">{svc.catalog}</span>
                                </div>
                                <div className="text-xs text-gray-400 mt-0.5">
                                    来源: {svc.provider}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Service Detail */}
                <div className="col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm p-6 overflow-y-auto">
                    <div className="border-b border-gray-200 pb-4 mb-6 flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 font-mono">{selectedSvc.endpoint}</h2>
                            <p className="text-sm text-gray-500 mt-1">
                                状态: <span className={`font-bold ${selectedSvc.status === 'Healthy' ? 'text-green-600' : 'text-yellow-600'}`}>{selectedSvc.status === 'Healthy' ? '健康 (Healthy)' : '降级 (Degraded)'}</span>
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50">配置</button>
                            <button className="px-3 py-1.5 text-sm bg-red-50 border border-red-200 text-red-700 rounded hover:bg-red-100">暂停服务</button>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Bindings */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider border-b border-gray-100 pb-1">定义绑定 (Definition Binding)</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <span className="block text-xs text-gray-500">实现能力 (Catalog)</span>
                                    <span className="font-medium text-gray-900 block mt-1 p-2 bg-gray-50 rounded border border-gray-200">{selectedSvc.catalog}</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500">托管于 (Provider)</span>
                                    <span className="font-medium text-gray-900 block mt-1 p-2 bg-gray-50 rounded border border-gray-200">{selectedSvc.provider}</span>
                                </div>
                            </div>
                        </div>

                        {/* Execution Config */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider border-b border-gray-100 pb-1">执行限制 (Execution Limits)</h3>
                            <div className="grid grid-cols-3 gap-6 bg-gray-50 p-4 rounded border border-gray-100">
                                <div>
                                    <span className="block text-xs text-gray-500">速率限制 (RPM)</span>
                                    <span className="font-mono text-lg font-bold text-gray-900">{selectedSvc.rpm}</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500">最大并发</span>
                                    <span className="font-mono text-lg font-bold text-gray-900">50</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500">超时时间</span>
                                    <span className="font-mono text-lg font-bold text-gray-900">60s</span>
                                </div>
                            </div>
                        </div>

                        {/* Routing Context (Read Only) */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider border-b border-gray-100 pb-1">路由上下文 (Routing Context)</h3>
                            <p className="text-xs text-gray-500 mb-2">此服务目前被以下策略引用：</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2 text-gray-700">
                                    <span className="bg-blue-100 text-blue-800 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold">规则</span>
                                    Global_Default_Route (优先级 100)
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <span className="bg-purple-100 text-purple-800 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold">降级</span>
                                    High_Availability_Policy (Step 1)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};