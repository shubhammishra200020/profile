import { Component } from '@angular/core';
import { Skills } from '../entity/skills';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
    frontend:Skills[]=[]
    basic:Skills[]=[]
    backend:Skills[]=[]
    constructor(){
      this.frontend=[
        new Skills(1,"HTML"),
        new Skills(2,"CSS"),
        new Skills(3,"JavaScript"),
        new Skills(4,"PHP"),
        new Skills(5,"React"),
        new Skills(6,"Angular"),
        new Skills(7,"TypeScript"),
      ]
      this.basic=[
        new Skills(1,"C"),
        new Skills(2,"DSA"),
        new Skills(3,"Python"),
        new Skills(4,"SQL"),
        new Skills(5,"No-SQL (Mongo DB)"),
        new Skills(1,"MVC"),

      ]
      this.backend=[
        new Skills(1,"Core Java"),
        new Skills(2,"Advance Java"),
        new Skills(3,"Sprint Boot"),
        new Skills(4,"Spring"),
        new Skills(5,"Hibernate"),
        new Skills(1,"JPA"),
        new Skills(1,"Rest API"),
      ]
    }
}
