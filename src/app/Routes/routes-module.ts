import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";

// Components //
import { AppComponent } from "../app.component";
import { HomeComponent } from "../Pages/home/home.component";
import { BicepsComponent } from "../Pages/Exercises/biceps/biceps.component";
import { TricepsComponent } from "../Pages/Exercises/triceps/triceps.component";
import { ChestComponent } from "../Pages/Exercises/chest/chest.component";
import { ShouldersComponent } from "../Pages/Exercises/shoulders/shoulders.component";
import { LegsComponent } from "../Pages/Exercises/legs/legs.component";
import { GuideComponent } from "../Pages/Exercises/guide/guide.component";
import { AboutComponent } from "../Pages/Exercises/about/about.component";



@NgModule({
  imports: [
    RouterModule.forRoot([  
      {
        path: 'home',
        component: HomeComponent
      },
    {
        path: 'app',
        component: AppComponent
    },
    {
        path: "",
        component: HomeComponent
    },
    {
      path:"biceps",
      component:BicepsComponent
    },
    {
      path: 'triceps',
      component: TricepsComponent
    },
    {
      path: 'chest',
      component: ChestComponent
    },
    {
      path: 'shoulders',
      component: ShouldersComponent
    },
    {
      path:"legs",
      component: LegsComponent
    },
    {
      path:"guide",
      component:GuideComponent
    },
    {
      path:"about",
      component:AboutComponent
    }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class RoutesModule { }