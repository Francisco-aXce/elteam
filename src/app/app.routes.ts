import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import("./platform/layout/layout.component").then(m => m.LayoutComponent),
    loadChildren: () => import("./platform/platform.routes").then(m => m.PLATFORM_ROUTES),
  },
  {
    path: "auth",
    loadComponent: () => import("./auth/layout/layout.component").then(m => m.LayoutComponent),
    loadChildren: () => import("./auth/auth.routes").then(m => m.AUTH_ROUTES),
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  }
];
