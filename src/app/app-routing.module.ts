import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BodyComponent } from './body/body.component';
import { SearchPageComponent } from './body/search-page.component';
import { YourLibraryComponent } from './body/your-library.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'search', component: SearchPageComponent},
  { path: 'your_library', component: YourLibraryComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
