import { Role } from './role';

export class User {
    name: string;
    institute_name: string;
    logo: string;
    user_image: string;
    password: string;
    email: string;
    role_id: number;
    role: Role;
    token: string;
    contact_number: string;
    user_type: string;
  }