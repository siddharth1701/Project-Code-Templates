import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BusnewsComponent } from "./busnews/busnews.component";
import { EntertainmentnewsComponent } from "./entertainmentnews/entertainmentnews.component";
import { GeneralnewsComponent } from "./generalnews/generalnews.component";
import { HealthnewsComponent } from "./healthnews/healthnews.component";
import { SciencenewsComponent } from "./sciencenews/sciencenews.component";
import { SportsnewsComponent } from "./sportsnews/sportsnews.component";
import { TechnewsComponent } from "./technews/technews.component";
import { TopheadlineComponent } from "./topheadline/topheadline.component";

const routes: Routes = [
  {
    path: "",
    component: TopheadlineComponent, // top headlines and home
  },
  {
    path: "business",
    component: BusnewsComponent,
  },
  {
    path: "entertainment",
    component: EntertainmentnewsComponent,
  },
  {
    path: "general",
    component: GeneralnewsComponent,
  },
  {
    path: "health",
    component: HealthnewsComponent,
  },
  {
    path: "science",
    component: SciencenewsComponent,
  },
  {
    path: "sports",
    component: SportsnewsComponent,
  },
  {
    path: "technology",
    component: TechnewsComponent,
  },
  {
    path: "**",
    component: TopheadlineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
