import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const TokenDistribution: React.FC = () => {
    return (
        <SkeletonPage title="Token 分布分析 (Token Distribution)" description="识别资源消耗的结构性特征与异常模式。">
            
            <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="text-sm text-gray-500">P50 (Median) Run</div>
                    <div className="text-xl font-mono font-bold text-gray-900 mt-1">450 Tokens</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="text-sm text-gray-500">P90 Run</div>
                    <div className="text-xl font-mono font-bold text-gray-900 mt-1">2,800 Tokens</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm border-l-4 border-l-orange-400">
                    <div className="text-sm text-gray-500">P99 (Outliers)</div>
                    <div className="text-xl font-mono font-bold text-orange-600 mt-1">32,000+ Tokens</div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm h-80 flex flex-col">
                    <h3 className="font-bold text-gray-900 mb-2">Single Run Size Histogram</h3>
                    <p className="text-xs text-gray-500 mb-4">大多数 Run 的 Token 消耗分布在什么区间？</p>
                    <div className="flex-1 border border-dashed border-gray-200 bg-gray-50 rounded flex items-center justify-center text-gray-400">
                        [ Histogram Chart ]
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-center">
                    <div className="bg-orange-50 border border-orange-100 p-4 rounded-lg">
                        <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Analysis Insight
                        </h4>
                        <p className="text-sm text-orange-800 leading-relaxed">
                            <strong>Token 异常通常意味着上游设计问题：</strong>
                            <br/>
                            1. Prompt 包含了过多无关的 Few-Shot 示例。<br/>
                            2. Knowledge Retrieval (RAG) 召回了过多或过长的文档片段。<br/>
                            3. Agent 进入了死循环或无效的推理步骤。
                        </p>
                        <div className="mt-4 pt-4 border-t border-orange-200">
                            <button className="text-xs font-bold text-orange-900 hover:underline">查看 P99 异常 Run &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonPage>
    );
};