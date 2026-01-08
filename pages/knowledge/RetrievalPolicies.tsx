import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const RetrievalPoliciesList: React.FC = () => {
    return (
        <SkeletonPage title="检索策略 (Retrieval Policies)" description="定义 Ragflow 如何检索知识。策略在设计态 (Design-time) 冻结，Run 运行时不可动态修改。">
            <div className="grid grid-cols-3 gap-6">
                 {['Semantic_Hybrid_v2', 'Exact_Match_Strict', 'Recall_Heavy_Draft'].map((name, i) => (
                     <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:border-brand-300 transition-colors cursor-pointer">
                         <div className="flex justify-between items-start mb-2">
                             <h3 className="font-bold text-gray-900 text-sm">{name}</h3>
                             <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
                         </div>
                         <div className="space-y-1 text-xs text-gray-500 mb-4">
                             <div>Strategy: {i === 1 ? 'Exact Match' : 'Hybrid (Vector + Kw)'}</div>
                             <div>Top-K: {i === 2 ? '50' : '10'}</div>
                             <div>Rerank: {i === 0 ? 'Enabled' : 'Disabled'}</div>
                         </div>
                         <div className="flex justify-between text-xs text-gray-400 border-t border-gray-50 pt-2">
                             <span>Scope: Project</span>
                             <span>Refs: 12 Agents</span>
                         </div>
                     </div>
                 ))}
            </div>
        </SkeletonPage>
    );
};

export const RetrievalPolicyDetail: React.FC = () => {
    return (
        <SkeletonPage title="Semantic_Hybrid_v2" description="混合检索策略配置详情。">
             <div className="grid grid-cols-3 gap-6">
                 <div className="col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm space-y-6">
                     <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">Strategy Type</label>
                         <div className="flex gap-4">
                             <div className="px-4 py-2 bg-brand-50 border border-brand-200 rounded text-brand-700 text-sm font-medium">Hybrid (Vector + Keyword)</div>
                             <div className="px-4 py-2 border border-gray-200 rounded text-gray-600 text-sm">Vector Only</div>
                             <div className="px-4 py-2 border border-gray-200 rounded text-gray-600 text-sm">Keyword Only</div>
                         </div>
                     </div>
                     
                     <div className="grid grid-cols-3 gap-6">
                         <div>
                             <label className="block text-sm font-medium text-gray-700 mb-1">Top-K (Recall)</label>
                             <input type="number" disabled value={20} className="w-full border border-gray-200 rounded p-2 text-sm bg-gray-50 text-gray-500 cursor-not-allowed" />
                         </div>
                         <div>
                             <label className="block text-sm font-medium text-gray-700 mb-1">Similarity Threshold</label>
                             <input type="number" disabled value={0.75} className="w-full border border-gray-200 rounded p-2 text-sm bg-gray-50 text-gray-500 cursor-not-allowed" />
                         </div>
                         <div>
                             <label className="block text-sm font-medium text-gray-700 mb-1">Rerank Enabled</label>
                             <input type="text" disabled value="Yes" className="w-full border border-gray-200 rounded p-2 text-sm bg-gray-50 text-gray-500 cursor-not-allowed" />
                         </div>
                     </div>

                     <div className="bg-gray-50 p-3 rounded text-xs text-gray-500">
                         <span className="font-bold">Note:</span> 这些参数在 Policy 创建后即冻结。如需修改，请创建新 Policy。
                     </div>
                 </div>

                 <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                     <h4 className="text-sm font-bold text-gray-900 mb-4">绑定关系</h4>
                     <div className="space-y-4 text-sm">
                         <div>
                             <span className="block text-gray-500 text-xs">默认绑定 Knowledge Base</span>
                             <span className="font-medium">Product_Docs_Global</span>
                         </div>
                         <div>
                             <span className="block text-gray-500 text-xs">适用范围 (Scope)</span>
                             <span className="font-medium">Global (All Projects)</span>
                         </div>
                     </div>
                 </div>
             </div>
        </SkeletonPage>
    );
};