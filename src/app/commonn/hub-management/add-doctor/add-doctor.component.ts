import { Component, OnInit } from '@angular/core';
import { AddDoctor } from 'src/app/_model/common.model';
import { CoreHttpService } from 'src/app/_services/coreHttpServices/core-http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
    private apiBaseURL: string;
    
public stateList: any[] = [];
public districtList: any[] = [];

public addDoctor: AddDoctor = new AddDoctor();
public departmentList = [{id: '1', name: 'Radiology Department (X-ray)'},
{id: '2', name: 'Operation Theatre Complex (OT)'},
{id: '3', name: 'Medical Department'},
{id: '4', name: 'Outpatient department (OPD)'}]
   
  constructor(private httpClient: HttpClient, private coreHttpService: CoreHttpService,  private SpinnerService: NgxSpinnerService,) {
    
   }

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
      this.coreHttpService.post('get-district-list', {id: this.addDoctor.state_id}).subscribe(response=> {
        this.SpinnerService.hide();
        this.districtList = response.result;
        //this.stateList = response.result;
    },error=>{
        this.SpinnerService.hide();
        console.log(error)
    })
  }

    /** Method to get selected deplartment*/
    getSelectedDepartment(event) {
        this.addDoctor.department_name = this.departmentList.find(ele=> ele.id === event).name;
    }

    attachDocumentFile(event) {
        this.addDoctor.photo = event[0];
    }

    /** Method to save new doctor */
    onSubmit(addDoctorform: NgForm) {
       // let 
       let userName= this.addDoctor.mobile;
       let email = this.addDoctor.email;
       let password = this.addDoctor.password;
        this.SpinnerService.show();
        // var formData: FormData = new FormData();
        // formData.append('hospital_name', this.addDoctor.hospital_name);
        // formData.append('doctor_name', this.addDoctor.doctor_name);
        // formData.append('email', this.addDoctor.email);
        // formData.append('mobile', this.addDoctor.mobile);
        // formData.append('state_id', this.addDoctor.state_id);
        // formData.append('district_id', this.addDoctor.district_id);
        // formData.append('address', this.addDoctor.address);
        // formData.append('department_name', this.addDoctor.department_name);
        // formData.append('department_id', this.addDoctor.department_id);
        // if(this.addDoctor.photo){
        //     formData.append('photo', this.addDoctor.photo);
        // }
        
        // formData.append('password', this.addDoctor.password);
       
         this.coreHttpService.post('hub/add-doctor', this.addDoctor).subscribe(
            (res:any) =>{
                if(res.response === 200){
                    this.SpinnerService.hide();
                    addDoctorform.reset();
                    Swal.fire('Thank you...', `Email: ${email}, Password: ${password}`, 'success') 
                }
            }, error=> {
                console.log(error)
                this.SpinnerService.hide();
            }
         );
        // this.coreHttpService.postWithFile('hub/add-doctor', formData).subscribe()
    }

}
