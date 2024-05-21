import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"form",component:FormComponent},
    {path:"skill",component:SkillsComponent},
    {path:"education",component:EducationComponent},
    {path:"projects",component:ProjectsComponent}
];
