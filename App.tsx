import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { SkeletonPage } from './components/ui/SkeletonPage';

// Overview Pages
import { OverviewDashboard } from './pages/overview/OverviewDashboard';

// Runs Subsystem Pages
import { RunsExplorer } from './pages/runs/RunsExplorer';
import { RunDetail } from './pages/runs/RunDetail';
import { RunsViews } from './pages/runs/RunsViews';
import { RunsDiagnostics } from './pages/runs/RunsDiagnostics';
import { RunsGovernance } from './pages/runs/RunsGovernance';
import { RunsReplay } from './pages/runs/RunsReplay';
import { RunsSettings } from './pages/runs/RunsSettings';

// Business Scenarios Subsystem Pages
import { ScenarioCatalog } from './pages/scenarios/ScenarioCatalog';
import { ScenarioInstances } from './pages/scenarios/ScenarioInstances';
import { ScenarioVersions } from './pages/scenarios/ScenarioVersions';
import { ScenarioGovernance } from './pages/scenarios/ScenarioGovernance';

// Application Center Subsystem Pages (New)
import { ApplicationCatalog } from './pages/applications/ApplicationCatalog';
import { ApplicationInstances } from './pages/applications/ApplicationInstances';
import { DeploymentPackages } from './pages/applications/DeploymentPackages';
import { RuntimeBindings } from './pages/applications/RuntimeBindings';

// Design Subsystem Pages
import { DesignAgentsList, DesignAgentDetail, DesignAgentVersions } from './pages/design/DesignAgents';
import { DesignWorkflowsList, DesignWorkflowDesigner, DesignWorkflowVersions } from './pages/design/DesignWorkflows';
import { DesignEntryPoints } from './pages/design/DesignEntryPoints';
import { DesignPromptLibrary, DesignPromptEditor } from './pages/design/DesignPrompts';
import { DesignDependencies } from './pages/design/DesignDependencies';
import { DesignReleases } from './pages/design/DesignReleases';

// Knowledge Subsystem Pages
import { KnowledgeBaseList, KnowledgeBaseDetail } from './pages/knowledge/KnowledgeBases';
import { DataSourcesList, DataSourceDetail } from './pages/knowledge/DataSources';
import { SnapshotsList, SnapshotDetail } from './pages/knowledge/Snapshots';
import { RetrievalPoliciesList, RetrievalPolicyDetail } from './pages/knowledge/RetrievalPolicies';
import { KnowledgeUsage, EvidenceExplorer } from './pages/knowledge/UsageEvidence';
import { AccessControl } from './pages/knowledge/AccessControl';

// Capabilities Subsystem Pages (Replaces Skills)
import { CapabilitiesCatalogList, CapabilitiesCatalogDetail } from './pages/capabilities/CapabilitiesCatalog';
import { CapabilitiesSkillsList, CapabilitiesSkillsDetail } from './pages/capabilities/CapabilitiesSkills';
import { CapabilitiesMCPList, CapabilitiesMCPDetail } from './pages/capabilities/CapabilitiesMCP';
import { CapabilitiesConnectorsList, CapabilitiesConnectorsDetail } from './pages/capabilities/CapabilitiesConnectors';
import { CapabilitiesCredentialsList, CapabilitiesCredentialsDetail } from './pages/capabilities/CapabilitiesCredentials';
import { CapabilitiesPoliciesList } from './pages/capabilities/CapabilitiesPolicies';
import { CapabilitiesUsageOverview, CapabilitiesAuditExplorer } from './pages/capabilities/CapabilitiesUsageAudit';

// Models Subsystem Pages
import { ModelCatalog } from './pages/models/ModelCatalog';
import { ModelProviders } from './pages/models/ModelProviders';
import { ModelServices } from './pages/models/ModelServices';
import { UsageOverview } from './pages/models/UsageOverview';
import { TokenDistribution } from './pages/models/TokenDistribution';
import { HighTokenUsage } from './pages/models/HighTokenUsage';
import { CostReference } from './pages/models/CostReference';
import { ServiceStatus } from './pages/models/ServiceStatus';

// Runtime (Resources) Subsystem Pages
import { RuntimeOverview } from './pages/runtime/RuntimeOverview';
import { ResourcePools } from './pages/runtime/ResourcePools';
import { ClustersNodes } from './pages/runtime/ClustersNodes';
import { ServiceRuntime } from './pages/runtime/ServiceRuntime';
import { RuntimeIntegrations } from './pages/runtime/RuntimeIntegrations';

// Admin Subsystem Pages
import { OrganizationList } from './pages/admin/organizations/OrganizationList';
import { ProjectList } from './pages/admin/projects/ProjectList';
import { UserList } from './pages/admin/users/UserList';
import { RoleList } from './pages/admin/roles/RoleList';
import { PermissionList } from './pages/admin/permissions/PermissionList';
import { PolicyList } from './pages/admin/policies/PolicyList';
import { AdminAudit } from './pages/admin/AdminAudit';
import { AdminQuotas } from './pages/admin/AdminQuotas';
import { AdminSettings } from './pages/admin/AdminSettings';
import { AdminIntegrations } from './pages/admin/AdminIntegrations';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default Redirect */}
          <Route index element={<Navigate to="/overview" replace />} />

          {/* OVERVIEW */}
          <Route path="overview" element={<OverviewDashboard />} />
          <Route path="overview/activity" element={<SkeletonPage title="活动动态" description="平台事件的实时信息流。" />} />

          {/* RUNS (Expanded) */}
          <Route path="runs" element={<Navigate to="/runs/explorer" replace />} />
          <Route path="runs/explorer" element={<RunsExplorer />} />
          
          {/* Runs - Views */}
          <Route path="runs/views/:viewId" element={<RunsViews />} />
          
          {/* Runs - Diagnostics */}
          <Route path="runs/diagnostics/:type" element={<RunsDiagnostics />} />
          
          {/* Runs - Governance */}
          <Route path="runs/governance/:type" element={<RunsGovernance />} />
          
          {/* Runs - Replay */}
          <Route path="runs/replay/:type" element={<RunsReplay />} />
          
          {/* Runs - Settings */}
          <Route path="runs/settings/:type" element={<RunsSettings />} />
          
          {/* Run Detail */}
          <Route path="runs/:runId" element={<RunDetail />} />

          {/* BUSINESS SCENARIOS */}
          <Route path="scenarios" element={<Navigate to="/scenarios/instances" replace />} />
          <Route path="scenarios/catalog" element={<ScenarioCatalog />} />
          <Route path="scenarios/instances" element={<ScenarioInstances />} />
          <Route path="scenarios/releases" element={<ScenarioVersions />} />
          <Route path="scenarios/governance" element={<ScenarioGovernance />} />

          {/* APPLICATIONS (Application Center) */}
          <Route path="applications" element={<Navigate to="/applications/catalog" replace />} />
          <Route path="applications/catalog" element={<ApplicationCatalog />} />
          <Route path="applications/instances" element={<ApplicationInstances />} />
          <Route path="applications/packages" element={<DeploymentPackages />} />
          <Route path="applications/bindings" element={<RuntimeBindings />} />

          {/* DESIGN */}
          <Route path="design" element={<Navigate to="/design/agents" replace />} />
          
          {/* Design - Agents */}
          <Route path="design/agents" element={<DesignAgentsList />} />
          <Route path="design/agents/detail/:agentId" element={<DesignAgentDetail />} />
          <Route path="design/agents/versions" element={<DesignAgentVersions />} />
          
          {/* Design - Workflows */}
          <Route path="design/workflows" element={<DesignWorkflowsList />} />
          <Route path="design/workflows/designer" element={<DesignWorkflowDesigner />} />
          <Route path="design/workflows/versions" element={<DesignWorkflowVersions />} />
          
          {/* Design - Entry Points */}
          <Route path="design/entry-points/:type" element={<DesignEntryPoints />} />
          
          {/* Design - Prompts */}
          <Route path="design/prompts/library" element={<DesignPromptLibrary />} />
          <Route path="design/prompts/editor" element={<DesignPromptEditor />} />
          <Route path="design/prompts/versions" element={<SkeletonPage title="版本管理 (Prompt Versions)" description="提示词包的历史记录。" />} />
          
          {/* Design - Dependencies */}
          <Route path="design/dependencies/graph" element={<DesignDependencies />} />
          <Route path="design/dependencies/impact" element={<DesignDependencies />} />
          
          {/* Design - Releases */}
          <Route path="design/releases/:type" element={<DesignReleases />} />

          {/* KNOWLEDGE */}
          <Route path="knowledge" element={<Navigate to="/knowledge/kbs" replace />} />
          
          {/* Knowledge - KBs */}
          <Route path="knowledge/kbs" element={<KnowledgeBaseList />} />
          <Route path="knowledge/kbs/:kbId" element={<KnowledgeBaseDetail />} />
          
          {/* Knowledge - Sources */}
          <Route path="knowledge/sources" element={<DataSourcesList />} />
          <Route path="knowledge/sources/:sourceId" element={<DataSourceDetail />} />
          
          {/* Knowledge - Snapshots */}
          <Route path="knowledge/snapshots" element={<SnapshotsList />} />
          <Route path="knowledge/snapshots/:snapshotId" element={<SnapshotDetail />} />

          {/* Knowledge - Policies */}
          <Route path="knowledge/policies" element={<RetrievalPoliciesList />} />
          <Route path="knowledge/policies/:policyId" element={<RetrievalPolicyDetail />} />
          
          {/* Knowledge - Usage & Evidence */}
          <Route path="knowledge/usage" element={<KnowledgeUsage />} />
          <Route path="knowledge/evidence" element={<EvidenceExplorer />} />
          
          {/* Knowledge - Access */}
          <Route path="knowledge/access" element={<AccessControl />} />
          <Route path="knowledge/access/audit" element={<AccessControl />} />

          {/* CAPABILITIES */}
          <Route path="capabilities" element={<Navigate to="/capabilities/catalog" replace />} />
          
          {/* Capabilities - Catalog */}
          <Route path="capabilities/catalog" element={<CapabilitiesCatalogList />} />
          <Route path="capabilities/catalog/:capId" element={<CapabilitiesCatalogDetail />} />
          
          {/* Capabilities - Skills */}
          <Route path="capabilities/skills" element={<CapabilitiesSkillsList />} />
          <Route path="capabilities/skills/:skillId" element={<CapabilitiesSkillsDetail />} />

          {/* Capabilities - MCP */}
          <Route path="capabilities/mcp" element={<CapabilitiesMCPList />} />
          <Route path="capabilities/mcp/:mcpId" element={<CapabilitiesMCPDetail />} />

          {/* Capabilities - Connectors */}
          <Route path="capabilities/connectors" element={<CapabilitiesConnectorsList />} />
          <Route path="capabilities/connectors/:connId" element={<CapabilitiesConnectorsDetail />} />

          {/* Capabilities - Credentials */}
          <Route path="capabilities/credentials" element={<CapabilitiesCredentialsList />} />
          <Route path="capabilities/credentials/:credId" element={<CapabilitiesCredentialsDetail />} />

          {/* Capabilities - Policies & Approvals */}
          <Route path="capabilities/policies" element={<CapabilitiesPoliciesList />} />
          <Route path="capabilities/approvals" element={<CapabilitiesPoliciesList />} />

          {/* Capabilities - Usage & Audit */}
          <Route path="capabilities/usage" element={<CapabilitiesUsageOverview />} />
          <Route path="capabilities/audit" element={<CapabilitiesAuditExplorer />} />

          {/* MODELS */}
          <Route path="models" element={<Navigate to="/models/catalog" replace />} />

          {/* Models - Catalog */}
          <Route path="models/catalog" element={<ModelCatalog />} />

          {/* Models - Providers */}
          <Route path="models/providers" element={<ModelProviders />} />

          {/* Models - Services */}
          <Route path="models/services" element={<ModelServices />} />

          {/* Models - Usage & Cost (Refactored) */}
          <Route path="models/usage/overview" element={<UsageOverview />} />
          <Route path="models/usage/token-distribution" element={<TokenDistribution />} />
          <Route path="models/usage/token-high" element={<HighTokenUsage />} />
          <Route path="models/usage/cost-reference" element={<CostReference />} />

          {/* Models - Service Status (Refactored) */}
          <Route path="models/status" element={<ServiceStatus />} />

          {/* RUNTIME (New) */}
          <Route path="runtime" element={<Navigate to="/runtime/overview" replace />} />
          <Route path="runtime/overview" element={<RuntimeOverview />} />
          <Route path="runtime/pools" element={<ResourcePools />} />
          <Route path="runtime/clusters" element={<ClustersNodes />} />
          <Route path="runtime/nodes" element={<ClustersNodes />} />
          <Route path="runtime/services" element={<ServiceRuntime />} />
          <Route path="runtime/integrations" element={<RuntimeIntegrations />} />

          {/* ADMIN (Refactored) */}
          <Route path="admin" element={<Navigate to="/admin/orgs" replace />} />

          {/* 1. 组织与项目 */}
          <Route path="admin/orgs" element={<OrganizationList />} />
          <Route path="admin/projects" element={<ProjectList />} />

          {/* 2. 用户与角色 */}
          <Route path="admin/users" element={<UserList />} />
          <Route path="admin/roles" element={<RoleList />} />

          {/* 3. 权限与策略 */}
          <Route path="admin/permissions" element={<PermissionList />} />
          <Route path="admin/policies" element={<PolicyList />} />

          {/* 4. 合规与审计 */}
          <Route path="admin/audit" element={<AdminAudit />} />

          {/* 5. 配额与限制 */}
          <Route path="admin/quotas" element={<AdminQuotas />} />

          {/* 6. 平台设置 */}
          <Route path="admin/settings" element={<AdminSettings />} />

          {/* 7. 集成与身份 */}
          <Route path="admin/integrations" element={<AdminIntegrations />} />

        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;