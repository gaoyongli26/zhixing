import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const CapabilitiesSkillsList: React.FC = () => {
    return (
        <SkeletonPage title="技能列表 (Skills)" description="语义能力层：AI 可理解、可调用的语义动作接口。Skill 是 Capability 的执行入口。">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {['Process Full Refund', 'Search Knowledge Base', 'Send Slack Notification'].map((skill, i) => (
                     <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:border-brand-300 transition-colors cursor-pointer">
                         <h3 className="font-bold text-gray-900 mb-2">{skill}</h3>
                         <p className="text-sm text-gray-500 mb-4">自然语言描述：用于告诉 Agent 这个技能在什么场景下使用，以及它的预期效果。</p>
                         <div className="flex items-center justify-between text-xs mt-4 border-t border-gray-100 pt-3">
                             <div className="flex flex-col">
                                 <span className="text-gray-400">Parent Capability</span>
                                 <span className="font-medium text-gray-700">refund_customer_payment</span>
                             </div>
                             <span className="text-brand-600">查看详情 &rarr;</span>
                         </div>
                     </div>
                 ))}
             </div>
        </SkeletonPage>
    );
};

export const CapabilitiesSkillsDetail: React.FC = () => {
    return (
        <SkeletonPage title="Process Full Refund" description="语义技能详情。定义 AI 如何理解和填充参数。">
             <div className="space-y-6">
                 <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                     <h3 className="font-bold text-gray-900 mb-4">语义接口定义 (Semantic Interface)</h3>
                     <div className="grid grid-cols-2 gap-8">
                         <div className="bg-gray-900 p-4 rounded border border-gray-700">
                             <span className="text-xs font-bold text-gray-400 uppercase block mb-2">Input Schema (JSON Schema)</span>
                             <pre className="text-xs font-mono text-green-400">
{`{
  "type": "object",
  "properties": {
    "order_id": { 
      "type": "string",
      "description": "The unique ID of the order to refund" 
    },
    "reason": { 
      "type": "string", 
      "enum": ["defective", "regret", "late"] 
    }
  },
  "required": ["order_id"]
}`}
                             </pre>
                         </div>
                         <div className="bg-gray-50 p-4 rounded border border-gray-200">
                             <span className="text-xs font-bold text-gray-500 uppercase block mb-2">Output Description (System Prompt)</span>
                             <p className="text-sm text-gray-700">
                                 系统将返回退款处理结果（Success/Failed）以及退款交易号。
                                 若失败，会包含错误原因。
                             </p>
                         </div>
                     </div>
                 </div>

                 <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                     <h3 className="font-bold text-blue-900 mb-2">能力绑定 (Capability Binding)</h3>
                     <p className="text-sm text-blue-800">
                         此 Skill 映射到底层能力 <span className="font-mono font-bold">refund_customer_payment</span>。
                         <br/>
                         执行时将强制应用该 Capability 定义的风险等级与审批策略。Skill 层不单独定义风险。
                     </p>
                 </div>
             </div>
        </SkeletonPage>
    );
};