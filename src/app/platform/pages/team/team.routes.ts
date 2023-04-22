import { Routes } from "@angular/router";

export const TEAM_ROUTES: Routes = [
  {
    path: "add",
    loadComponent: () => import("./add/add.component").then(m => m.AddComponent),
  }
];
