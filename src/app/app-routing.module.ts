import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DogsComponent } from './dogs/dogs.component';

const routes: Routes = [
  {path:'auth',component:AuthComponent},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {path:'dogs',component:DogsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
