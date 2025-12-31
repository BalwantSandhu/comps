import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'elements',
        loadChildren: () =>
        import('./elements/elements.routes')
        .then(c => c.elementsRoutes)
    },
    {
        path: 'collections',
        loadComponent: () =>
        import('./collections/collections-home/collections-home.component')
        .then(c => c.CollectionsHomeComponent)
    },
    {
        path: '',
        loadComponent: () =>
            import('./home/home.component')
            .then(c => c.HomeComponent)
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
