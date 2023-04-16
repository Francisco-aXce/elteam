import { Routes } from "@angular/router";

export const PLATFORM_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import("./feed/feed.component").then(m => m.FeedComponent),
  }
];
