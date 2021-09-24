import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./routes/home-page/home-page.component";
import {LoginComponent} from "./routes/sessions/login/login.component";
import {PageNotFoundComponent} from "./routes/sessions/page-not-found/page-not-found.component";
import {AuthGuard} from "./core/authentication/auth.guard";

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomePageComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomePageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
