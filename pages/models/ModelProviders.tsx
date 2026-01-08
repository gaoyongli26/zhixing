import React, { useState } from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

// Mock Data
const PROVIDERS = [
    { id: 'prov_01', name: 'Azure_Corp_Account', type: 'Cloud', region: 'East US', status: 'Active', compliance: ['SOC2', 'HIPAA'] },
    { id: 'prov_02', name: 'OpenAI_Lab_Key', type: 'Third-party', region: 'Global', status: 'Active', compliance: [] },
    { id: 'prov_03', name: 'Self_Hosted_VLLM', type: 'Self-hosted', region: 'On-prem', status: 'Maintenance', compliance: ['Iso27001'] },
];

export const ModelProviders: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string>(PROVIDERS[0].id);
    const selectedProv = PROVIDERS.find(p => p.id === selectedId) || PROVIDERS[0];

    return (
        <SkeletonPage title="模型提供方 (Model Providers)" description="定义“能力由谁提供”。Model Provider 确定数据流向、信任边界与合规属性。">
            
            <div className="grid grid-cols-3 gap-6 h-[600px]">
                
                {/* Left: Provider List */}
                <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col">
                    <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Providers</h3>
                        <button className="text-xs text-brand-600 font-medium hover:underline">+ Add Provider</button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-2">
                        {PROVIDERS.map(prov => (
                            <div 
                                key={prov.id}
                                onClick={() => setSelectedId(prov.id)}
                                className={`p-3 rounded-md cursor-pointer border transition-all ${
                                    selectedId === prov.id 
                                    ? 'bg-brand-50 border-brand-300 shadow-sm' 
                                    : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'
                                }`}
                            >
                                <div className="flex justify-between items-center">
                                    <span className={`text-sm font-bold truncate ${selectedId === prov.id ? 'text-brand-900' : 'text-gray-900'}`}>{prov.name}</span>
                                    <span className={`w-2 h-2 rounded-full ${prov.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                </div>
                                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                                    <span>{prov.type}</span>
                                    <span>•</span>
                                    <span>{prov.region}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Provider Detail */}
                <div className="col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm p-6 overflow-y-auto">
                    <div className="border-b border-gray-200 pb-4 mb-6 flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">{selectedProv.name}</h2>
                            <p className="text-sm text-gray-500 mt-1">Provider ID: <span className="font-mono">{selectedProv.id}</span></p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 text-sm bg-brand-600 text-white rounded hover:bg-brand-700">Test Connection</button>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Trust & Compliance */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider border-b border-gray-100 pb-1">Trust & Compliance</h3>
                            <div className="grid grid-cols-2 gap-6 mb-4">
                                <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                    <span className="block text-xs text-gray-500 uppercase">Region / Data Residency</span>
                                    <span className="font-medium text-gray-900">{selectedProv.region}</span>
                                </div>
                                <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                    <span className="block text-xs text-gray-500 uppercase">Type</span>
                                    <span className="font-medium text-gray-900">{selectedProv.type}</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                {selectedProv.compliance.map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-green-50 text-green-700 border border-green-200 rounded text-xs font-medium flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        {tag}
                                    </span>
                                ))}
                                {selectedProv.compliance.length === 0 && <span className="text-xs text-gray-400 italic">No specific compliance tags</span>}
                            </div>
                        </div>

                        {/* Authentication */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider border-b border-gray-100 pb-1">Authentication</h3>
                            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-4 h-4 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    <span className="text-sm font-bold text-yellow-800">Managed Identity (System Assigned)</span>
                                </div>
                                <p className="text-xs text-yellow-700">
                                    Credentials are managed by the platform secret vault. This provider does not use static API keys.
                                </p>
                            </div>
                        </div>

                        {/* Supported Catalogs */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider border-b border-gray-100 pb-1">Supported Capabilities</h3>
                            <p className="text-xs text-gray-500 mb-2">This provider can fulfill the following model specifications:</p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs border border-gray-200">gpt-4o</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs border border-gray-200">gpt-3.5-turbo</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs border border-gray-200">text-embedding-3-large</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};