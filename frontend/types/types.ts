export interface TableRow {
  id: string;
  nr: number;
  jobsiteId: string;
  item: string;
  quantity: number;
  description: string;
  notes: string;
}

type Status = "Completed" | "On Hold" | "In Progress";

export interface Jobsite {
  id: string;
  name: string;
  category: string[];
  status: Status;
}
