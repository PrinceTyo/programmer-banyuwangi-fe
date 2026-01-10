import type { Navigation } from "./navigation";

export interface NavigationGrid {
  id: number;
  columnsCount: number;
  navigations: Navigation[];
}
