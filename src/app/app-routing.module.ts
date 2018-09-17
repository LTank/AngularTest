import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { SimonComponent } from './home/simon/simon.component';
import { HenrikComponent } from './home/henrik/henrik.component';
import { TobiasComponent } from './home/tobias/tobias.component';
import { AndreasComponent } from './home/andreas/andreas.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, children: 
    [
      {path: 'simon', component: SimonComponent},
      {path: 'henrik', component: HenrikComponent},
      {path: 'tobias', component: TobiasComponent},
      {path: 'andreas', component: AndreasComponent}
    ]
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
