import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const DataSourcesList: React.FC = () => {
    return (
        <SkeletonPage title="数据源 (Data Sources)" description="管理知识的原始事实来源。Run 永远不会直接访问 Data Source，只访问经过索引的 Snapshot。">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Source Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Linked KB</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sync Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Updated</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">S3_Bucket_Invoices</td>
                            <td className="px-6 py-4 text-sm text-gray-500">File / S3</td>
                            <td className="px-6 py-4 text-sm text-gray-500">Finance_KB</td>
                            <td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-800">Idle</span></td>
                            <td className="px-6 py-4 text-sm text-gray-500">10 mins ago</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Zendesk_API_Connector</td>
                            <td className="px-6 py-4 text-sm text-gray-500">API / SaaS</td>
                            <td className="px-6 py-4 text-sm text-gray-500">Support_KB</td>
                            <td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800 animate-pulse">Syncing</span></td>
                            <td className="px-6 py-4 text-sm text-gray-500">Syncing now...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};

export const DataSourceDetail: React.FC = () => {
    return (
        <SkeletonPage title="S3_Bucket_Invoices" description="原始发票文件来源。">
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">连接配置 (Masked)</h3>
                         <div className="grid grid-cols-2 gap-4 text-sm">
                             <div><span className="text-gray-500">Source Type:</span> <span className="text-gray-900">AWS S3 Object Storage</span></div>
                             <div><span className="text-gray-500">Bucket URL:</span> <span className="font-mono bg-gray-100 px-2 rounded text-gray-600">s3://fin-data-prod-***</span></div>
                             <div><span className="text-gray-500">Region:</span> <span className="text-gray-900">us-east-1</span></div>
                             <div><span className="text-gray-500">Sync Schedule:</span> <span className="text-gray-900">Cron(0 * * * *)</span></div>
                         </div>
                    </div>
                    
                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">同步日志 (Recent Logs)</h3>
                        <div className="bg-gray-900 rounded p-4 text-xs font-mono text-gray-300 space-y-1 h-48 overflow-y-auto">
                            <p><span className="text-green-400">[INFO]</span> 2023-10-25 10:00:01 Sync started.</p>
                            <p><span className="text-gray-500">[DEBUG]</span> Found 12 new files.</p>
                            <p><span className="text-gray-500">[DEBUG]</span> Parsing invoice_2023_10_24.pdf...</p>
                            <p><span className="text-green-400">[INFO]</span> 2023-10-25 10:00:45 Sync completed. 12 docs added.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">状态与控制</h3>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">当前状态</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-bold">Idle</span>
                    </div>
                    <button className="w-full border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">立即同步 (Manual Sync)</button>
                </div>
            </div>
        </SkeletonPage>
    );
};