import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';
import { useNavigate } from 'react-router-dom';

export const KnowledgeUsage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <SkeletonPage title="使用与证据 (Usage & Evidence)" description="从知识视角索引 Run 的证据使用情况。本页不是事实源，而是跳转至 Runs Explorer 的索引入口。">
            
            <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-sm font-bold text-gray-500 uppercase">最近引用知识的 Runs</h3>
                    <div className="text-3xl font-bold text-gray-900 mt-2">1,240</div>
                    <div className="text-xs text-green-600 mt-1">+12% vs yesterday</div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm border-l-4 border-l-orange-400">
                    <h3 className="text-sm font-bold text-orange-800 uppercase">高风险知识引用</h3>
                    <div className="text-3xl font-bold text-gray-900 mt-2">5</div>
                    <div className="text-xs text-gray-500 mt-1">Runs referencing 'Confidential_Pricing'</div>
                    <button 
                        onClick={() => navigate('/runs/explorer?filter=evidence:confidential')}
                        className="text-xs text-brand-600 hover:underline mt-2 block"
                    >
                        查看 Runs &rarr;
                    </button>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-center items-center cursor-pointer hover:bg-gray-50" onClick={() => navigate('/runs/explorer')}>
                    <span className="text-brand-600 font-bold">前往 Runs Explorer</span>
                    <span className="text-xs text-gray-400 mt-1">使用高级过滤器按知识库筛选</span>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="font-bold text-gray-700 text-sm">证据索引 (Evidence Index)</h3>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Run ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Used Knowledge Base</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Snapshot Version</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hit Docs</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {[1, 2, 3, 4, 5].map(i => (
                            <tr key={i} className="hover:bg-gray-50 cursor-pointer" onClick={() => navigate(`/runs/run_${i}`)}>
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-mono text-brand-600 hover:underline">run_ev_{i}928</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Product_Docs_Global</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">snap_v1024</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{3 + i} chunks</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:{10+i} AM</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};

export const EvidenceExplorer: React.FC = () => {
    return <KnowledgeUsage />;
};