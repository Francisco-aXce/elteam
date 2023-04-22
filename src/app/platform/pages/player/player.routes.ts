import { Routes } from "@angular/router";

export const PLAYER_ROUTES: Routes = [
  {
    path: "add",
    loadComponent: () => import("./add/add.component").then(m => m.AddComponent),
  }
];
