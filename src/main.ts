import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { FlagListComponent } from './app/flag-list/flag-list.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { FlagListItemComponent } from './app/flag-list-item/flag-list-item.component';

const routes: Routes = [
  {path:'', redirectTo: '/flags', pathMatch: 'full'}, //default route
  { path: 'flags', component: FlagListComponent },
  { path: 'flags/:id', component: FlagListItemComponent },
  {path:'modify-flag', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));

