import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const DesignDependencies: React.FC = () => {
    return (
        <SkeletonPage title="依赖关系 (Dependencies)" description="防止设计变更造成不可控影响。">
            <div className="grid grid-cols-3 gap-6 h-[500px]">
                <div className="col-span-2 bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
                     <div className="text-center">
                         <div className="flex items-center justify-center gap-4 mb-4">
                             <div className="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm">Prompt Bundle A</div>
                             <div className="text-gray-400">→</div>
                             <div className="px-4 py-2 bg-brand-50 border border-brand-300 rounded shadow-sm text-brand-700 font-bold">FinBot Agent</div>
                             <div className="text-gray-400">→</div>
                             <div className="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm">Financial Workflow</div>
                         </div>
                         <p className="text-sm text-gray-500">Asset Dependency Graph Placeholder</p>
                     </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Impact Analysis</h3>
                    <div className="space-y-4">
                        <div className="text-sm text-gray-600">
                            If you modify <span className="font-bold text-gray-900">Prompt Bundle A</span>, the following will be affected:
                        </div>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm p-2 bg-red-50 text-red-700 rounded border border-red-100">
                                <span className="font-bold">Agent:</span> FinBot v1.2
                            </li>
                            <li className="flex items-center gap-2 text-sm p-2 bg-orange-50 text-orange-700 rounded border border-orange-100">
                                <span className="font-bold">Workflow:</span> Finance Flow v2
                            </li>
                        </ul>
                        <button className="w-full mt-4 px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">Run Full Check</button>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};