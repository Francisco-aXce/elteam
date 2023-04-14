import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: "auth",
    loadComponent: () => import("./pages/auth/auth.component").then(m => m.AuthComponent)
  }
];
