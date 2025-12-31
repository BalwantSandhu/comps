import { Routes } from '@angular/router';

export const elementsRoutes: Routes = [
    { path: '',
      loadComponent: () => 
      import('./elements-home/elements-home.component')
      .then(c => c.ElementsHomeComponent)
     }
];
