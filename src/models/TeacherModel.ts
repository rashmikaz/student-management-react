export class TeacherModel {
    name: string;
    nic: string;
    email: string;
    phone: string;
    address: string;
    subject: string;


    constructor(name: string, nic: string, email: string, phone: string, address: string, subject: string) {
        this.name = name;
        this.nic = nic;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.subject = subject;
    }
}
