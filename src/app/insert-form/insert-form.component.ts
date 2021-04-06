import { Component } from '@angular/core';
import { DataRestClientService } from '../data-rest-client.service';
import { Employee } from '../shared/employee';

@Component({
  selector: 'insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.scss']
})
export class InsertFormComponent {

  visible : boolean = false;

  constructor(private restClient: DataRestClientService) {
    
  }

  showHideForm() : void {
    if(this.visible) this.visible = false;
    else this.visible = true;
  } 

  addEmployee(firstName : string, lastName : string, email : string, phone : string) : void {
    let employee: Employee = {
      "employeeId": Math.floor(Math.random()*10),
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "phone": phone
    }

    let data = JSON.stringify(employee);

    this.restClient.postData("http://localhost:8080/api/tutorial/1.0/employees", data);
  }

}
