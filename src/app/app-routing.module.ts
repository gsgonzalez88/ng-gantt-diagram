import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GanttDiagramComponent } from "./components/gantt-diagram/gantt-diagram.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
