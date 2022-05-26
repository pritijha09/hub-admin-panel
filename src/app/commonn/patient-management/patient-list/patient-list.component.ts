import { Component, OnInit } from '@angular/core';
import { CoreHttpService } from 'src/app/_services/coreHttpServices/core-http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
    public patientList: any[] = [];
    public searchText : string;
  constructor(private activatedRoute: ActivatedRoute, private coreHttpService: CoreHttpService, private router: Router,  private spinnerService: NgxSpinnerService,) { 
    this.activatedRoute.params.subscribe(params => {
        if(params.id){
            this.getPatientList(params.id);
        } else{
            this.getAllPatientList();
        }
      });
  }

  ngOnInit(): void {
   
  }

   /** Method to get patient list */
   getPatientList(id){
       let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let body = {
      "id": Number(currentUser.id),
      "clinic_id": Number(id),
      "start_date":"2022-01-01",
      "end_date":"2022-05-30"
    }
  this.spinnerService.show();
  this.coreHttpService.post(`hub/get-patient-list-by-hub-and-clinic`, body).subscribe(res=>{
      this.spinnerService.hide();
      if(res.response===200){
        this.patientList = res.result;
      }
  },error=>{
      console.log(error)
      this.spinnerService.hide();
  })
}

  /** Method to get patient list */
  getAllPatientList(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let body = {
        "id": Number(currentUser.id),
        "start_date":"2022-01-01",
        "end_date":"2022-05-30"
      }
    this.spinnerService.show();
    this.coreHttpService.post(`hub/get-patient-list-by-hub`, body).subscribe(res=>{
        this.spinnerService.hide();
        if(res.response===200){
          this.patientList = res.result;
        }
    },error=>{
        console.log(error)
        this.spinnerService.hide();
    })
  }

  getPatientDetails(id){
    this.router.navigate(["/admin/patient-details/" + id]);
  }

}
