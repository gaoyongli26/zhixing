import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const DesignWorkflowsList: React.FC = () => {
    return (
        <SkeletonPage title="工作流列表 (Workflows)" description="定义 Run 的结构路径与执行蓝图。">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <button className="bg-brand-600 text-white px-4 py-2 rounded text-sm font-medium">New Workflow</button>
                </div>
                <div className="divide-y divide-gray-200">
                    {['Financial Approval Flow', 'Customer Refund Logic', 'Data Pipeline Alpha'].map((name, i) => (
                        <div key={i} className="p-4 flex justify-between items-center">
                            <div>
                                <h4 className="text-sm font-bold text-gray-900">{name}</h4>
                                <p className="text-xs text-gray-500 mt-1">Version: v{i+1}.0 • {2+i} Entry Points</p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Active</span>
                        </div>
                    ))}
                </div>
            </div>
        </SkeletonPage>
    );
};

export const DesignWorkflowDesigner: React.FC = () => {
    return (
        <SkeletonPage title="画布设计器 (Designer)" description="可视化编排 Agent Node, Condition Node 与 Sub-flow。">
            <div className="h-[600px] bg-gray-100 border border-gray-300 rounded-lg relative overflow-hidden flex">
                {/* Palette */}
                <div className="w-48 bg-white border-r border-gray-300 p-4 space-y-4">
                    <div className="text-xs font-bold text-gray-500 uppercase">Nodes</div>
                    <div className="p-2 bg-white border border-gray-300 rounded shadow-sm text-sm cursor-grab">Agent Node</div>
                    <div className="p-2 bg-white border border-gray-300 rounded shadow-sm text-sm cursor-grab">Condition</div>
                    <div className="p-2 bg-white border border-gray-300 rounded shadow-sm text-sm cursor-grab">Wait for Input</div>
                </div>
                {/* Canvas */}
                <div className="flex-1 flex items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
                    <div className="text-center p-8 bg-white/80 backdrop-blur rounded-xl border border-gray-200 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-800">Workflow Canvas Placeholder</h3>
                        <p className="text-sm text-gray-500 mt-2">在这里编排 Run 的执行路径。</p>
                        <div className="mt-4 flex gap-4 justify-center">
                            <div className="w-16 h-16 bg-blue-100 rounded border-2 border-blue-500 flex items-center justify-center text-xs">Start</div>
                            <div className="w-8 border-t-2 border-gray-400 self-center"></div>
                            <div className="w-32 h-16 bg-white rounded border border-gray-300 flex items-center justify-center text-xs shadow-sm">FinBot Agent</div>
                            <div className="w-8 border-t-2 border-gray-400 self-center"></div>
                            <div className="w-16 h-16 bg-green-100 rounded border-2 border-green-500 flex items-center justify-center text-xs">End</div>
                        </div>
                    </div>
                </div>
                 {/* Properties */}
                 <div className="w-64 bg-white border-l border-gray-300 p-4">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-4">Node Properties</div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700">Selected</label>
                            <input disabled value="FinBot Agent" className="mt-1 block w-full border-gray-300 rounded-md text-sm bg-gray-50 p-2" />
                        </div>
                         <div>
                            <label className="block text-xs font-medium text-gray-700">Error Policy</label>
                            <select className="mt-1 block w-full border-gray-300 rounded-md text-sm p-2">
                                <option>Retry (3x)</option>
                                <option>Fail Fast</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};

export const DesignWorkflowVersions: React.FC = () => {
    return (
        <SkeletonPage title="版本管理 (Workflow Versions)" description="发布、回滚与版本比对。">
            <div className="bg-white p-8 border border-gray-200 rounded-lg text-center text-gray-500">
                Workflow 版本控制界面占位符。
            </div>
        </SkeletonPage>
    );
};