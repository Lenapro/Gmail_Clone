import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MainComponent } from './main/main.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarModule } from 'ng-sidebar';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MainComponent,
    ConnexionComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule,
    MatCardModule,
    MatSidenavModule,
    SidebarModule
  ],
  
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
