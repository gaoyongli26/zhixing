import React from 'react';
import { SkeletonPage } from '../../components/ui/SkeletonPage';

export const DeploymentPackages: React.FC = () => {
    return (
        <SkeletonPage title="部署包 (Deployment Packages)" description="管理 Application 的“可部署交付物” (Artifacts)。">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Package Name / Tag</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Application</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Build Time</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Verification</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Size</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900 font-mono">docker.io/repo/pdf-parser:v2.1.0</div>
                                <div className="text-xs text-gray-500">Hash: sha256:8a9f...</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                PDF_Parser_Service
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded text-xs bg-blue-50 text-blue-700 border border-blue-100">Docker Image</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                2023-10-24 14:00
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-green-600 text-xs flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Scanned
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500 font-mono">
                                450 MB
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900 font-mono">pkg_python_sandbox_v1.5.0.tar.gz</div>
                                <div className="text-xs text-gray-500">Hash: md5:7c2b...</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                Python_Sandboxed_Env
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700 border border-gray-200">Archive</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                2023-10-22 09:30
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-green-600 text-xs flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Signed
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500 font-mono">
                                120 MB
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </SkeletonPage>
    );
};