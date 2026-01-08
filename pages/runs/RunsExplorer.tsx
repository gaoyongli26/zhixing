import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SkeletonPage } from '../../components/ui/SkeletonPage';
import { Run, RunStatus } from '../../types';

// Enhanced Mock Data
const MOCK_RUNS: Run[] = [
  { id: 'run_8923n23', name: '总结 Q3 财务报告', status: RunStatus.COMPLETED, trigger: '调度任务', agent: 'FinBot v1.2', workflow: '财务分析流', startTime: '2023-10-24 10:00:00', duration: '12s', cost: 0.04 },
  { id: 'run_8923n24', name: '客户工单分类', status: RunStatus.RUNNING, trigger: 'Webhook', agent: 'SupportAI', workflow: '智能分流', startTime: '2023-10-24 10:05:30', duration: '-', cost: 0.01 },
  { id: 'run_8923n25', name: '代码审查辅助', status: RunStatus.FAILED, trigger: 'API', agent: 'DevMate', workflow: 'PR 审查', startTime: '2023-10-24 09:15:00', duration: '4s', cost: 0.00 },
  { id: 'run_8923n26', name: '发票数据提取', status: RunStatus.COMPLETED, trigger: '邮件', agent: 'DocProcess', workflow: 'OCR 流水线', startTime: '2023-10-24 08:30:00', duration: '45s', cost: 0.12 },
  { id: 'run_8923n27', name: 'RAG 检索测试', status: RunStatus.BLOCKED, trigger: '手动', agent: 'RAG-v2', workflow: '-', startTime: '2023-10-23 18:00:00', duration: '-', cost: 0.00 },
];

export const StatusBadge = ({ status }: { status: RunStatus }) => {
  const styles = {
    [RunStatus.COMPLETED]: 'bg-green-100 text-green-800',
    [RunStatus.RUNNING]: 'bg-blue-100 text-blue-800 animate-pulse',
    [RunStatus.FAILED]: 'bg-red-100 text-red-800',
    [RunStatus.BLOCKED]: 'bg-yellow-100 text-yellow-800',
  };
  
  const labels = {
    [RunStatus.COMPLETED]: '已完成',
    [RunStatus.RUNNING]: '运行中',
    [RunStatus.FAILED]: '失败',
    [RunStatus.BLOCKED]: '已阻塞',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};

export const RunsExplorer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SkeletonPage 
      title="执行探索 (Runs Explorer)" 
      description="平台核心：所有执行追踪、成本消耗和审计日志的统一事实来源。"
    >
      <div className="space-y-4">
        {/* Advanced Filters Placeholder */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex flex-wrap gap-4 items-end">
                <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">时间范围</label>
                    <select className="block w-40 text-sm border-gray-300 rounded-md shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 border p-2">
                        <option>过去 24 小时</option>
                        <option>过去 7 天</option>
                        <option>自定义范围</option>
                    </select>
                </div>
                 <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">状态</label>
                    <select className="block w-32 text-sm border-gray-300 rounded-md shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 border p-2">
                        <option>全部状态</option>
                        <option>失败 (Failed)</option>
                        <option>运行中 (Running)</option>
                    </select>
                </div>
                 <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">智能体 (Agent)</label>
                    <select className="block w-40 text-sm border-gray-300 rounded-md shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 border p-2">
                        <option>所有 Agents</option>
                        <option>FinBot</option>
                        <option>SupportAI</option>
                    </select>
                </div>
                <div className="space-y-1">
                     <label className="text-xs font-medium text-gray-500">成本区间 ($)</label>
                     <div className="flex items-center gap-2">
                        <input type="text" placeholder="0" className="w-20 text-sm border p-2 rounded bg-gray-50" />
                        <span className="text-gray-400">-</span>
                        <input type="text" placeholder="100" className="w-20 text-sm border p-2 rounded bg-gray-50" />
                     </div>
                </div>
                <div className="flex-1"></div>
                <button className="px-4 py-2 bg-brand-600 text-white rounded text-sm font-medium hover:bg-brand-700">查询</button>
            </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                <div className="font-medium text-sm text-gray-700">执行列表</div>
                <div className="text-xs text-gray-500">显示 24,039 条记录中的 5 条</div>
            </div>
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    {['执行 ID', '状态', '触发类型', '智能体 (Agent)', '工作流 (Workflow)', '开始时间', '耗时', '成本'].map(h => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {MOCK_RUNS.map((run) => (
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
      </div>
    </SkeletonPage>
  );
};