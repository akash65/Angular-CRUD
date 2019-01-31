import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../services/service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  studentsDetails: any;
  sName: string ;
  sEmail: string ;
  sLocation: string ;
  // students = [];
  editable = false;
  isClose = false;
  obj;

  constructor(private httpService: HttpService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.httpService.get('http://192.168.14.97:8000/api/authors')
    .subscribe((res) => {
      // console.log(res);
      return this.studentsDetails = res;
    },
    (err) => {
      return err;
    });
  }

  getStudent() {
    this.obj = {
      name : this.sName,
      email : this.sEmail,
      location : this.sLocation
    };
    this.studentsDetails.push(this.obj);
    console.log(this.studentsDetails);
  }

  clear(name) {
    // console.log(typeof(this.studentsDetails));
    for( var i = 0; i < this.studentsDetails.length; i++ ) {
			if( this.studentsDetails[i].name === name ) {
        this.studentsDetails.splice(i, 1);
      }
    // this.changeDetectorRef.detectChanges();
  }
  }

  saveRecords(val) {
    // this.editable = !this.editable;
    val.editable = !val.editable;

  }

  close() {
    // this.isClose = true;

  }

  editRecords(val) {
    // console.log(event.target.outerText, name);
    // this.editable = !this.editable;
    val.editable = !val.editable;
  }

  addStudent() {
    this.studentsDetails.unshift({'name': '', 'email': '', 'location': '', editable: true});
  }

}
