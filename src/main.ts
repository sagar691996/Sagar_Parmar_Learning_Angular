import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { FlagListComponent } from './app/flag-list/flag-list.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { FlagListItemComponent } from './app/flag-list-item/flag-list-item.component';
import { provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataServiceService } from './app/services/in-memory-data-service.service';

const routes: Routes = [
  {path:'', redirectTo: '/flags', pathMatch: 'full'}, //default route
  { path: 'flags', component: FlagListComponent },
  { path: 'flags/:id', loadComponent: () =>
    import('./app/flag-list-item/flag-list-item.component').then(
      m => m.FlagListItemComponent
    )},
{ path: 'modify-list-item', loadComponent: () =>
    import('./app/modify-list-item/modify-list-item.component').then(
      m => m.ModifyListItemComponent
    )},
{ path: 'modify-list-item/:id', loadComponent: () =>
    import('./app/modify-list-item/modify-list-item.component').then(
      m => m.ModifyListItemComponent
    )},
{ path: '**', loadComponent: () =>
    import('./app/page-not-found/page-not-found.component').then(
      m => m.PageNotFoundComponent
    )}
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServiceService, { delay: 1000 }))
  ],
}).catch((err) => console.error(err));
