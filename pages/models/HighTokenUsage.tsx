import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';
import { useNavigate } from 'react-router-dom';

export const HighTokenUsage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <SkeletonPage title="高消耗追踪 (High Token Usage)" description="从治理视角识别异常资源消耗点。">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <h3 className="text-sm font-medium text-gray-700">Top 10 High Token Runs (Last 24h)</h3>
                    <button className="text-xs text-brand-600 hover:underline">View All in Explorer</button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Run ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Model</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Agent</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total Tokens</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Input / Output</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <tr 
                                key={i} 
                                className="hover:bg-gray-50 cursor-pointer transition-colors"
                                onClick={() => navigate(`/runs/run_high_${i}`)}
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-brand-600 hover:underline">run_high_{i}928</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">gpt-4o</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Legal_Analyzer</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 text-right">{120000 - (i * 5000)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500 text-right font-mono">
                                    In: {110000 - (i * 4000)} | Out: {10000 - (i * 1000)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Top Models by Consumption</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">gpt-4o</span>
                            <span className="text-sm font-mono text-gray-900">45%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">claude-3-opus</span>
                            <span className="text-sm font-mono text-gray-900">30%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{width: '30%'}}></div>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Top Services by Consumption</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between border-b border-gray-50 pb-2">
                            <span className="font-mono text-gray-600">svc.azure.eastus.prod</span>
                            <span className="font-bold text-gray-900">1.2B Tokens</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-50 pb-2">
                            <span className="font-mono text-gray-600">svc.openai.direct</span>
                            <span className="font-bold text-gray-900">800M Tokens</span>
                        </li>
                    </ul>
                </div>
            </div>
        </SkeletonPage>
    );
};