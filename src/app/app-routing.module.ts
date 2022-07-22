import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNewsComponent } from './components/news/all-news/all-news.component';
import { NewsDetailsComponent } from './components/news/news-details/news-details.component';
import { TermsComponent } from './components/terms/terms.component';
import { AllWorksComponent } from './components/works/all-works/all-works.component';
import { WorkDetailsComponent } from './components/works/work-details/work-details.component';
import { WorksComponent } from './components/works/works.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'news',
    component: AllNewsComponent
  },
  {
    path: 'news/:id',
    component: NewsDetailsComponent
  },
  {
    path: 'works',
    component: WorksComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'works/:type',
    component: AllWorksComponent
  },
  {
    path: 'works/:type/:id',
    component: WorkDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
