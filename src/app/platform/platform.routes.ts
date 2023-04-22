import { Routes } from "@angular/router";

export const PLATFORM_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/feed/feed.component").then(m => m.FeedComponent),
  },
  {
    path: "team",
    loadChildren: () => import("./pages/team/team.routes").then(m => m.TEAM_ROUTES),
  },
  {
    path: "player",
    loadChildren: () => import("./pages/player/player.routes").then(m => m.PLAYER_ROUTES),
  },
  {
    path: "game",
    loadChildren: () => import("./pages/game/game.routes").then(m => m.GAME_ROUTES),
  },
];
