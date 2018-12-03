import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared Component/Navbar/navbar.component';
import { CarouselComponent } from './Shared Component/carousel/carousel.component';
import {CarouselModule} from "angular2-carousel";
import { HomeComponent } from './Pages/home/home.component';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './Routes/routes-module';
import { BicepsComponent } from './Pages/Exercises/biceps/biceps.component';
import { TricepsComponent } from './Pages/Exercises/triceps/triceps.component';
import { ChestComponent } from './Pages/Exercises/chest/chest.component';
import { ShouldersComponent } from './Pages/Exercises/shoulders/shoulders.component';
import { LegsComponent } from './Pages/Exercises/legs/legs.component';
import { GuideComponent } from './Pages/Exercises/guide/guide.component';
import { AboutComponent } from './Pages/Exercises/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    BicepsComponent,
    TricepsComponent,
    ChestComponent,
    ShouldersComponent,
    LegsComponent,
    GuideComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
