export class PatientDetails{
    id: number;
    user_id: string;
    patient_registration: string;
    hub_id: string;
    doctor_id: string;
    clinic_id: string;
    name: string;
    mobile: string;
    age: string;
    body_weight: string;
    gender: string;
    case_type_id: string;
    case_type_name: string;
    scene_assesment_id: string;
    chest_pain_onset_time: string;
    chest_pain: string;
    is_drugs:string;
    is_vomiting: string;
    is_chest_pain: string;
    is_restlessness: string;
    is_sweating: string;
    is_breathlessness: string;
    drugs_duration: string
    vomiting_duration: string;
    chest_pain_duration: string;
    restlessness_duration: string;
    sweating_duration: string;
    breathlessness_duration: string;
    incident_time: string;
    attendee_contact: string;
    patient_address: string;
    attending_clinic_id: string;
    attending_clinic_name: string;
    doctor_name: string;
    created_by: string;
    created_at: string;
    updated_at: string;
}

export class PatientAttendeeConsent {
    clinic_id: string;
consent_time: string;
created_at: string;
created_by: string;
description: string;
doctor_id: string;
general_consent: string;
hub_id: string;
id: number;
is_agree: string;
is_english: string;
patient_registration: string;
signature: string;
signature_text: string;
signature_url: string;;
updated_at: string;
user_id: string;
}

export class DoctorPrecription{
    almi: string;
anterior_wall: string;
asmi: string;
bradyarrhythmia: string;
bradyarrhythmia_other: string;
clinic_id: string;
created_at: string;
doctor_id: string;
doctor_signature: string;
doctor_signature_url: string;
hub_id: string;
id: number;
is_stemi: string;
iwmi: string;
medication_id: string;
medication_name: string;
nstemi: string;
patient_registration: string;
prescription_detail: string;
st_dep: string;
t_wave_inversion: string;
tachycardia: string;
thrombolysis_indicated: string;
updated_at: string;
user_id: string;
}

export class MedicationDetails{
    clinic_id: string;
created_at: string;
doctor_id: string;
grugs_given_time: string;
hub_id: string;
id: number;
medication: string;
medication_id: string;
past_medication_history: string;
patient_registration:string;
route: string;
route_id: string;
updated_at: string;
user_id: string;
}

export class PatientMedicalHostory{
    "id": number;
    "user_id": string;
    "patient_registration": string;
    "hub_id": string;
    "doctor_id": string;
    "clinic_id": string;
    "present_complaint_id": string;
    "allergy_id": string;
    "allergy_name": string;
    "past_medical_surgical_personal_history_id": string;
    "past_medical_surgical_personal_history_value": string;
    "chest_pain": string;
    "dyspnea_class": string;
    "sweating": string;
    "vomiting": string;
    "syncope": string;
    "confusion": string;
    "present_complaint_other": string;
    "onset_symptoms_time": string;
    "past_cardiac_case_history_id": string;
    "past_cardiac_case_history_name": string;
    "other_past_cardiac_case_history": string;
    "other_allergy": string;
    "created_at": string;
    "updated_at": string;
    "test_report_file_url": string;
    "test_report_file_name": string;
}

export class initialMedicalHistory{
    "id": number;
    "user_id": string;
    "patient_registration": string;
    "hub_id": string;
    "doctor_id": string;
    "clinic_id": string;
    "hypotension": string;
    "pulmonary_edem": string;
    "kilip_class": string;
    "created_at": string;
    "updated_at": string;
    "stable": string;
    "hf": string;
    "shock": string;
    "pulse": string
    "bp": string;
    "spo2": string;
    "outcome_tnk_is_success": string;
    "outcome_tnk_is_unsuccess": string;
    "outcome_tnk_chest_pain": string;
}

export class medicinePrecribed{
    "id": number
    "user_id": string;
    "prescription_id": string;
    "patient_registration": string;
    "hub_id": string;
    "doctor_id": string;
    "clinic_id": string;
    "medicine_id": string;
    "name": string;
    "created_at": string;
    "updated_at": string;
}

export class EcgReportModel{
    "id": number;
    "user_id": string;
    "patient_registration": string;
    "hub_id": string;
    "doctor_id": string;
    "clinic_id": string;
    "egc": string;
    "egc_url": string;
    "viewed_doctor_id": string;
    "is_viewed": string;
    "viewed_at": string;
    "ecg_date": string;
    "ecg_type": string;
    "ecg_time": string;
    "created_at": string;
    "updated_at": string;
}