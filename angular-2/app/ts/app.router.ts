//Author: Alexander Adu-Sarkodie

import { ModuleWithProviders } from 'angular/core';
import { ModuleWithProviRoutes, RouterModule } from 'angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

export const router: Routes = [
	//{ path:'', redirectTo: 'about', pathMatch: 'full' },
	{ path:'app', component: 'AppComponent' },
	{ path:'about', component: 'AboutComponent' },
	{path:'services', component: 'ServicesComponent'},
];

export const routes: ModuleWithProviders = RouteModule.forRoot(router);