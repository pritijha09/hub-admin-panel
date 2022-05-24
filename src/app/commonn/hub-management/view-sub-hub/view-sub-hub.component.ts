import { Component, OnInit } from '@angular/core';
import { CoreHttpService } from 'src/app/_services/coreHttpServices/core-http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ClinicListModel } from 'src/app/_model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-sub-hub',
  templateUrl: './view-sub-hub.component.html',
  styleUrls: ['./view-sub-hub.component.css']
})
export class ViewSubHubComponent implements OnInit {
    public clinicList: ClinicListModel[] = [];
    public searchText : string;
  constructor(private coreHttpService: CoreHttpService, private router: Router,  private spinnerService: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.coreHttpService.get(`hub/clinic-list`).subscribe(res=>{
        this.spinnerService.hide();
        if(res.response===200){
          this.clinicList = res.result;
        }
    },error=>{
        console.log(error)
        this.spinnerService.hide();
    })
  }

  goToPatientList(id){
    this.router.navigate(["/admin/patient-list/" + id]);
  }

  updateClinicList(id){
    this.router.navigate(["/admin/update-sub-hub/" + id]);
  }
}
