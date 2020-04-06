import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { CiclovitaComponent } from './ciclovita/ciclovita.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoBergamoRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { RatingComponent } from './forms/rating/rating.component';
import { ObservableExampleComponent } from './obshttp/observable-example/observable-example.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    SecondoComponent,
    CiclovitaComponent,
    PageNotFoundComponent,
    MenuComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    RatingComponent,
    ObservableExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DemoBergamoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
