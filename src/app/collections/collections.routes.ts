import {  Routes } from '@angular/router';

export const collectionsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => 
    import('./collections-home/collections-home.component')
    .then(c => c.CollectionsHomeComponent),
    children: [
      {   path: '',
      loadComponent: () =>
      import('./biography/biography.component')
      .then(c => c.BiographyComponent)
      },
      {   path: 'companies',
          loadComponent: () =>
          import('./companies/companies.component')
          .then(c => c.CompaniesComponent)
      },
      {
          path: 'partners',
          loadComponent: () =>
              import('./partners/partners.component')
              .then(c => c.PartnersComponent)
      }
    ]
  }
]
