import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./parent/child/child.component";

const appRoutes: Routes = [
  { path: "", component: ParentComponent },
  { path: "parent", component: ParentComponent },
  { path: "photo", component: ChildComponent },

  { path: "**", redirectTo: "parent" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
