import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../services/service';

import { ToasterNotification } from '../services/toastr.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  studentsDetails: any;
  sName: string;
  sEmail: string;
  sLocation: string;
  // students = [];
  editable = false;
  isClose = false;
  obj;
  config: any;
  p: number = 1;
  search;


  constructor(
    private httpService: HttpService,
    private changeDetectorRef: ChangeDetectorRef,
    private toast: ToasterNotification,
    private activeModal: NgbModal) {

    // this.config = {
    //   currentPage: this.p,
    //   itemsPerPage: 7
    // };
  }

  ngOnInit() {
    // this.httpService.get('http://192.168.14.97:8000/api/authors')
    this.httpService.get('http://localhost:3000/customers')
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
      name: this.sName,
      email: this.sEmail,
      location: this.sLocation
    };
    this.studentsDetails.push(this.obj);
    console.log(this.studentsDetails);
  }

  clear(name) {
    // console.log(typeof(this.studentsDetails));
    for (let i = 0; i < this.studentsDetails.length; i++) {
      if (this.studentsDetails[i].name === name) {
        this.studentsDetails.splice(i, 1);
      }
      // this.changeDetectorRef.detectChanges();

    }
    this.toast.showSuccess('success', 'Record deleted successfully');
  }

  saveRecords(val) {
    // this.editable = !this.editable;
    val.editable = !val.editable;
    this.toast.showSuccess('update', 'Record upadated successfully');
  }

  close() {
    // this.isClose = true;

  }

  editRecords(val) {
    // console.log(event.target.outerText, name);
    // this.editable = !this.editable;
    val.editable = !val.editable;
    this.toast.warningMessage('warning', 'Editing records');
  }

  addStudent() {
    this.studentsDetails.unshift({ 'name': '', 'email': '', 'location': '', editable: true });
  }

  setToaster() {
    this.toast.warningMessage('warning', 'Editing records');
    // this.toast.success('successfully added');
    // this.toast.show('sdjkfhkj');
  }

  onModalChange(content) {
    this.activeModal.open(content);
  }

  pageChange(event) {

  }

}
