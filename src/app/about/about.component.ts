import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsComponent } from '../skills/skills.component';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../projects/projects.component';
import { EducationComponent } from '../education/education.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillsComponent,CommonModule,ProjectsComponent,EducationComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private router: Router) { }
  educ(){
    this.router.navigate(['/about']);
  }
  project(){
    this.router.navigate(['/about']);
    alert("Hii")
  }
  skill(){
    
  }
}
