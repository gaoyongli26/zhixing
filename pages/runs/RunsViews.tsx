import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SkeletonPage } from '../../components/ui/SkeletonPage';
import { RunStatus } from '../../types';
import { StatusBadge } from './RunsExplorer';

// Reusing Mock Data logic for visualization
const MOCK_VIEW_DATA = [
  { id: 'run_err_01', name: '数据清洗作业', status: RunStatus.FAILED, trigger: 'Schedule', agent: 'DataCleaner', workflow: 'ETL Flow', startTime: '2023-10-24 11:00:00', duration: '2s', cost: 0.00 },
  { id: 'run_err_02', name: '用户意图识别', status: RunStatus.BLOCKED, trigger: 'API', agent: 'IntentModel', workflow: '-', startTime: '2023-10-24 10:45:00', duration: '-', cost: 0.00 },
];

export const RunsViews: React.FC = () => {
  const { viewId } = useParams();
  const navigate = useNavigate();

  const viewConfig: Record<string, { title: string, desc: string, filterDesc: string }> = {
    'failed': { title: '失败与阻塞 (Failed & Blocked)', desc: '需要人工介入或重试的异常执行。', filterDesc: 'Status IN (Failed, Blocked)' },
    'risk': { title: '高风险执行 (High Risk)', desc: '触发了敏感数据策略或合规警告的执行。', filterDesc: 'RiskScore > 0.8' },
    'cost': { title: '高成本执行 (High Cost)', desc: 'Token 消耗或计算成本异常的执行。', filterDesc: 'Cost > $1.00' },
    'latency': { title: '高延迟执行 (Long Latency)', desc: '执行时间超过 SLA 预警线的任务。', filterDesc: 'Duration > 30s' },
    'saved': { title: '我的视图 (My Saved Views)', desc: '您保存的个性化过滤条件。', filterDesc: 'Custom Filters' },
  };

  const currentView = viewId && viewConfig[viewId] ? viewConfig[viewId] : { title: '未知视图', desc: '', filterDesc: '' };

  return (
    <SkeletonPage 
      title={currentView.title} 
      description={currentView.desc}
    >
        <div className="space-y-4">
            {/* View Context Banner */}
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                    <span className="text-sm text-blue-900 font-medium">当前视图过滤规则: <span className="font-mono bg-white px-2 py-0.5 rounded border border-blue-200">{currentView.filterDesc}</span></span>
                </div>
                <button className="text-xs text-blue-700 hover:underline">编辑视图规则</button>
            </div>

            {/* Table (Reused Structure) */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        {['Run ID', 'Status', 'Trigger Type', 'Agent', 'Workflow', 'Start Time', 'Duration', 'Cost'].map(h => (
                        <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {MOCK_VIEW_DATA.map((run) => (
                        <tr 
                        key={run.id} 
                        onClick={() => navigate(`/runs/${run.id}`)}
                        className="hover:bg-brand-50 cursor-pointer transition-colors"
                        >
                        <td className="px-6 py-4 whitespace-nowrap text-xs font-mono text-brand-600 hover:underline font-bold">{run.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={run.status} /></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{run.trigger}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{run.agent}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{run.workflow}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{run.startTime}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{run.duration}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">${run.cost.toFixed(4)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </SkeletonPage>
  );
};