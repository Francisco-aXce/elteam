import { Routes } from "@angular/router";

export const PLATFORM_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/feed/feed.component").then(m => m.FeedComponent),
  },
  {
    path: "team",
    loadChildren: () => import("./pages/team/team.routes").then(m => m.TEAM_ROUTES),
  }
];
