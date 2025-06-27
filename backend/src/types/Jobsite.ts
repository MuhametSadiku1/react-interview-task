export interface Jobsite {
  id: string;
  name: string;
  status: 'Completed' | 'On Hold' | 'In Progress' | 'On Road';
} 