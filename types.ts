// Navigation Types
export interface NavItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavItem[];
}

export interface SubSystem {
  id: string;
  label: string;
  path: string;
  sidebar: NavItem[];
}

// Entity Types (Mock)
export enum RunStatus {
  COMPLETED = 'Completed',
  RUNNING = 'Running',
  FAILED = 'Failed',
  BLOCKED = 'Blocked',
}

export interface Run {
  id: string;
  name: string;
  status: RunStatus;
  trigger: string;
  agent: string;
  workflow: string;
  startTime: string;
  duration: string;
  cost: number;
}