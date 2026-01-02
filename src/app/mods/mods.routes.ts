import { Routes } from "@angular/router";

export const modsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
    import('./mods-home/mods-home.component')
    .then(c => c.ModsHomeComponent)
  }
]