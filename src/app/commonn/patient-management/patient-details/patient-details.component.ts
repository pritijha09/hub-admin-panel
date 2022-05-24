import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CoreHttpService } from 'src/app/_services/coreHttpServices/core-http.service';
import { PatientDetails, PatientMedicalHostory, initialMedicalHistory, medicinePrecribed, EcgReportModel } from 'src/app/_model/patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
public patientMedicalHostory: PatientMedicalHostory = new PatientMedicalHostory();
public patientDetails: PatientDetails = new PatientDetails();
public initialMedicalHistory: initialMedicalHistory = new initialMedicalHistory();
public medicinePrecribed: medicinePrecribed[] = [];
public ecgReport: EcgReportModel[] = [];
    diagnosisAndOutcome: any;
  constructor(private activatedRoute: ActivatedRoute,
    private coreHttpService: CoreHttpService,
    private spinnerService: NgxSpinnerService) {
    this.activatedRoute.params.subscribe(params => {
        this.getPatientDetails(params.id);
      });
   }

  ngOnInit(): void {
  }

  getPatientDetails(id){
    let body = {
        "id": Number(id),
      }
    this.spinnerService.show();
    this.coreHttpService.post(`hub/get-patient-detail-by-id`, body).subscribe(res=>{
        this.spinnerService.hide();
        if(res.response===200){
          this.patientDetails = res.result[0].patient_detail[0];
          this.patientMedicalHostory = res.result[0].patient_medical_history[0];
          this.initialMedicalHistory = res.result[0].patient_initial_clinical_assessment[0];
          this.diagnosisAndOutcome = res.result[0].diagnosis_and_outcome[0];
          this.medicinePrecribed = res.result[0].medicine_prescribed;
          this.ecgReport = res.result[0].patient_ecg_report;
          console.log(res.result[0].medicine_prescribed)
        }
    },error=>{
        console.log(error)
        this.spinnerService.hide();
    })
  }

}
