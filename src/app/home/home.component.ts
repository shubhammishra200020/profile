import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { NgControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent,CommonModule,AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ifDisplay:boolean=false
}
