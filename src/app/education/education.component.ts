import { Component } from '@angular/core';
import { Education } from '../entity/education';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
  export class EducationComponent {
    bsc:Education=new Education(1,"[2020-2023]","Nowrosjee Wadia College","Savitribai Phule Pune University","6.91 CGPA","BSC(CS)")
    Xll:Education=new Education(2,"[2017-2020]","Pranav Chatterjee Mahavidyalaya","Bihar School Examination Board, Patna","60%","XII")
    X:Education=new Education(3,"[2016-2017]","Sarswati Vidya Mandir","CBSC","7.0 CGPA","X")
}
