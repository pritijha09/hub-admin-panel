import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CoreHttpService } from 'src/app/_services/coreHttpServices/core-http.service';
import { PatientDetails, PatientMedicalHostory, initialMedicalHistory, medicinePrecribed, EcgReportModel, PatientAttendeeConsent, MedicationDetails, DoctorPrecription } from 'src/app/_model/patient';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
    attendeeSignature: any;
public patient_attendee_consent: PatientAttendeeConsent = new PatientAttendeeConsent();
public patientMedicalHostory: PatientMedicalHostory = new PatientMedicalHostory();
public patientDetails: PatientDetails = new PatientDetails();
public initialMedicalHistory: initialMedicalHistory = new initialMedicalHistory();
public medicinePrecribed: medicinePrecribed[] = [];
public ecgReportbefore: EcgReportModel = new EcgReportModel();
public ecgRepostAfter: EcgReportModel[] = [];
public doctorPrecription: DoctorPrecription = new DoctorPrecription();
    diagnosisAndOutcome: any;
    medicationDtails: MedicationDetails[] = [];
    medicationForTNK: MedicationDetails[] = [];
    ALMI: boolean;
  constructor(private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
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
          this.ecgReportbefore = res.result[0].patient_ecg_report[0];
          let dataecgafter = res.result[0].patient_ecg_report;
          dataecgafter.splice(0,1);
          this.ecgRepostAfter = dataecgafter;
          this.patient_attendee_consent = res.result[0].patient_attendee_consent[0];
          this.attendeeSignature = this.sanitizer.bypassSecurityTrustUrl(this.patient_attendee_consent.signature_url)
          this.medicationDtails = res.result[0].patient_medication_detail;
          this.medicationForTNK = res.result[0].patient_diagnosis_medication_detail;
          this.doctorPrecription = res.result[0].doctor_prescription[0];
          this.ALMI = this.doctorPrecription.almi === '1'? true: false;
        }
    },error=>{
        console.log(error)
        this.spinnerService.hide();
    })
  }

}
