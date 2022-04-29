export class AddDoctor {
  hospital_name: string;
  doctor_name: string;
  email: string;
  mobile: string;
  state_id: string;
  district_id: string;
  address: string;
  department_name: string;
  department_id: string;
  photo: File;
  password: string;
}

export class AddClinicModel {
  hospital_name: string;
  email: string;
  mobile: string;
  state_id: string;
  district_id: string;
  address: string;
  department_name: string;
  department_id: string;
  hod_name: string;
  hod_contact: string;
  password: string;
}

export class DoctorListModel {
  address: string;
  created_at: string;
  created_by: string;
  department_id: string;
  department_name: string;
  district_id: string;
  doctor_name: string;
  email: string;
  fcm_device_id: string;
  hospital_name: string;
  hub_id: string;
  id: number;
  is_active: string;
  is_logged_in: string;
  logged_in_at: string;
  mobile: string;
  photo: string;
  photo_url: string;
  state_id: string;
  updated_at: string;
  updated_by: string;
}

export class ClinicListModel{
    address: string;
admin_id: string;
created_at: string;
created_by: string;
department_id: string;
department_name: string;
district_id: string;
email: string;
fcm_device_id: string;
hod_contact: string;
hod_name: string;
hospital_name: string;
hub_id: string;
id: string;
is_active: string;
is_logged_in: string
logged_in_at: string;
mobile: string;
profile_photo_url: string;
state_id: string;
updated_at: string;
updated_by: string;
}
