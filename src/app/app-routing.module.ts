import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path : 'accueil', component : AccueilComponent },
  { path : 'main', component : MainComponent },
  { path: 'connexion', component: ConnexionComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path : '', redirectTo: 'accueil', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
