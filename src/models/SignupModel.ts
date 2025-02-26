
export class SignupModel {
    name: string;
    nic: string;
    email: string;
    phone: string;
    password: string;


    constructor(name: string, nic: string, email: string, phone: string, password: string) {
        this.name = name;
        this.nic = nic;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }
}