export type ToolCategory =
  | "activity"
  | "body-composition"
  | "calisthenics"
  | "calories"
  | "equipment"
  | "nutrition"
  | "planners"
  | "running"
  | "strength"
  | "trackers";

export interface Tool {
  id: string;
  name: string;
}
