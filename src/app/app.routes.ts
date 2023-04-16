import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/platform/platform.component").then(m => m.PlatformComponent),
    loadChildren: () => import("./pages/platform/platform.routes").then(m => m.PLATFORM_ROUTES),
  },
  {
    path: "auth",
    loadComponent: () => import("./pages/auth/auth.component").then(m => m.AuthComponent),
    loadChildren: () => import("./pages/auth/auth.routes").then(m => m.AUTH_ROUTES),
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  }
];
