import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private _doctorService:DoctorService) { }

  ngOnInit() {
  }

  buscarDoctor(specialty:string, city:string) {
/*
    this.doctorService.searchBy(specialty, city)
      .subscribe( (data:any) => {
        console.log(data);
      });
    console.log(specialty, city);
    */

    //this._router.navigate(['/search', ])
  }

}
