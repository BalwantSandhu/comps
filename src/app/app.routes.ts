import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BiographyComponent } from './collections/biography/biography.component';
import { CompaniesComponent } from './collections/companies/companies.component';
import { PartnersComponent } from './collections/partners/partners.component';

export const routes: Routes = [
    {
        // path: 'elements',
        // loadComponent: () =>
        // import('./elements/elements-home/elements-home.component')
        // .then(c => c.ElementsHomeComponent)
        // below is another way if page have more components in itself i.e. child component so we can use the loadChildren instead of loadComponent
        path: 'elements',
        loadChildren: () =>
        import('./elements/elements.routes')
        .then(c => c.elementsRoutes)
    },
    {
        path: 'collections',
        loadChildren: () =>
        import('./collections/collections.routes')
        .then(c => c.collectionsRoutes)
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
