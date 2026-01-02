import { Routes } from "@angular/router";

export const viewsroutes: Routes =[
  {
    path: '',
    loadComponent: () =>
    import('./views-home/views-home.component')
    .then(c => c.ViewsHomeComponent)
  }
];
