import { Component, OnInit } from '@angular/core';
import { CoreHttpService } from 'src/app/_services/coreHttpServices/core-http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DoctorListModel } from 'src/app/_model';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {
    public doctorList: DoctorListModel[] = [];
    public searchText : string;
  constructor(private coreHttpService: CoreHttpService,  private spinnerService: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.coreHttpService.get(`hub/doctor-list`).subscribe(res=>{
        this.spinnerService.hide();
        if(res.response===200){
          this.doctorList = res.result;
        }
    },error=>{
        console.log(error)
        this.spinnerService.hide();
    })
  }

}
