import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const CostReference: React.FC = () => {
    return (
        <SkeletonPage title="成本参考 (Cost Reference)" description="基于 Token 量的非绑定性成本估算。">
            
            {/* Disclaimer - MANDATORY */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                    <div className="ml-3">
                        <h3 className="text-sm font-bold text-yellow-800">⚠️ 免责声明 (Disclaimer)</h3>
                        <p className="text-sm text-yellow-700 mt-1">
                            本页面展示的成本均为基于公开定价的<strong>估算值 (Estimated)</strong>。
                            <br/>
                            它不反映实际的企业折扣、预留实例定价或第三方 API 账单。请勿将其作为财务结算或审计依据。
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Estimated Monthly Spend</h3>
                    <div className="text-3xl font-bold text-gray-900 font-mono">$4,250.00 <span className="text-sm text-gray-400 font-normal">(est.)</span></div>
                    <p className="text-xs text-gray-500 mt-2">Based on current usage projection.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">Pricing Rules Applied (Reference)</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                            <span>GPT-4o Input</span>
                            <span className="font-mono">$5.00 / 1M Tokens</span>
                        </div>
                        <div className="flex justify-between">
                            <span>GPT-4o Output</span>
                            <span className="font-mono">$15.00 / 1M Tokens</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Embedding-v3</span>
                            <span className="font-mono">$0.13 / 1M Tokens</span>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};