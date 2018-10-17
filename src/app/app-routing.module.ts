import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LessonsListComponent} from "./lessons-list/lessons-list.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "lessons"},
    {path: "lessons", component: LessonsListComponent},
    {path: "settings", component: SettingsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
