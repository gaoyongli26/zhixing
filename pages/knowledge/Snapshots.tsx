import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const SnapshotsList: React.FC = () => {
    return (
        <SkeletonPage title="知识快照 (Snapshots)" description="Knowledge Base 在某一时刻的不可变冻结版本。Run 必须绑定 Snapshot 以实现可审计回放。">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Snapshot ID / Version</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">所属 Knowledge Base</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created At</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Doc / Chunk Count</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-bold text-brand-600">snap_v1024</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Product_Docs_Global</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-25 10:00</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">150 Docs / 4,200 Chunks</td>
                            <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">Available</span></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-bold text-gray-600">snap_v1023</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Product_Docs_Global</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-24 10:00</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">148 Docs / 4,150 Chunks</td>
                            <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">Deprecated</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};

export const SnapshotDetail: React.FC = () => {
    return (
        <SkeletonPage title="Snapshot: snap_v1024" description="不可变索引状态。所有基于此快照的 Run 都将看到完全一致的知识视图。">
            <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">索引摘要 (Immutable Index Summary)</h3>
                    <div className="grid grid-cols-4 gap-6 text-center divide-x divide-gray-100">
                        <div>
                            <div className="text-2xl font-bold text-gray-900">150</div>
                            <div className="text-xs text-gray-500 uppercase mt-1">Documents</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900">4,200</div>
                            <div className="text-xs text-gray-500 uppercase mt-1">Total Chunks</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900">1.2GB</div>
                            <div className="text-xs text-gray-500 uppercase mt-1">Index Size</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900">Qdrant</div>
                            <div className="text-xs text-gray-500 uppercase mt-1">Vector Store</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">覆盖数据源 (Scope)</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex justify-between">
                                <span>Official_Website_Crawler</span>
                                <span className="font-mono text-gray-400">commit: a8f92...</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Tech_Spec_PDFs_S3</span>
                                <span className="font-mono text-gray-400">etag: 5d4e1...</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">生命周期控制</h3>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-gray-700">允许新 Run 使用</span>
                            <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" checked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 border-gray-300 checked:border-green-500"/>
                                <label className="toggle-label block overflow-hidden h-5 rounded-full bg-green-500 cursor-pointer"></label>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500">
                            关闭后，新的 Run 无法绑定此 Snapshot，但现有历史 Run 的回放不受影响。
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <button className="text-xs text-red-600 hover:underline disabled:opacity-50" disabled>删除 Snapshot (Active Runs Exist)</button>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};