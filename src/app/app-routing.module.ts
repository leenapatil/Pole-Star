import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileResolverResolver } from './resolver/profile-resolver.resolver';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'profile', component: ProfileComponent, resolve: { profileData: ProfileResolverResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
