import { Component, OnInit } from '@angular/core';
import { AddClinicModel } from 'src/app/_model';
import { NgForm } from '@angular/forms';
import { CoreHttpService } from 'src/app/_services/coreHttpServices/core-http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-sub-hub',
  templateUrl: './create-sub-hub.component.html',
  styleUrls: ['./create-sub-hub.component.css']
})
export class CreateSubHubComponent implements OnInit {
    
public stateList: any[] = [];
public districtList: any[] = [];

public addClinic: AddClinicModel = new AddClinicModel();
public departmentList = [{id: '1', name: 'Radiology Department (X-ray)'},
{id: '2', name: 'Operation Theatre Complex (OT)'},
{id: '3', name: 'Medical Department'},
{id: '4', name: 'Outpatient department (OPD)'}]
  constructor(private coreHttpService: CoreHttpService,  private SpinnerService: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.getStateList();
  }

   /** Method to get state list */
   getStateList() {
    this.SpinnerService.show();
    this.coreHttpService.get('get-state-list').subscribe(response=> {
        console.log(response);
        this.SpinnerService.hide();
        this.stateList = response.result;
    },error=>{
        this.SpinnerService.hide();
        console.log(error)
    })
  }

  /** Method to get selected state */
  getSelectedState(){
    this.SpinnerService.show();
      this.coreHttpService.post('get-district-list', {id: this.addClinic.state_id}).subscribe(response=> {
       this.SpinnerService.hide();
        this.districtList = response.result;
    },error=>{
        this.SpinnerService.hide();
        console.log(error)
    })
  }

    /** Method to get selected deplartment*/
    getSelectedDepartment(event) {
        this.addClinic.department_name = this.departmentList.find(ele=> ele.id === event).name;
    }

    /** Method to save new doctor */
    onSubmit(addClinicform: NgForm) {
        let userName= this.addClinic.mobile;
        let password = this.addClinic.password;
        this.SpinnerService.show();
        this.coreHttpService.post('hub/add-clinic', this.addClinic).subscribe(res =>{
            if(res.response === 200){
                this.SpinnerService.hide();
                addClinicform.reset();
                Swal.fire('Thank you...', `Username: ${userName}, Password: ${password}`, 'success') 
            }
        }, error=> {
            console.log(error)
            this.SpinnerService.hide();
        })
    }

}
