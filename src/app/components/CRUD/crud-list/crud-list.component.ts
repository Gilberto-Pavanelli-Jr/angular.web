import { Component, OnInit } from '@angular/core';
import { CRUD } from 'src/app/models/crud.model';
import { CrudsService } from 'src/app/services/cruds.service';
@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {

cruds: CRUD[]=[];

  constructor(private crudsService: CrudsService) { }

  ngOnInit(): void {
    this.crudsService.getCruds()
    .subscribe({
      next: (cruds) => {
       this.cruds = cruds;
        
      },
      error: (response) => {
        console.log(response);
      }
      
    })
   }

}
