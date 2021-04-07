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
  employee: Employee;
  result: any;
  data: any;

  constructor(private restClient: DataRestClientService) {
    this.employee = {employeeId: 0, firstName: "", lastName: "", email: "", phone: ""};
  }

  showHideForm() : void {
    if(this.visible) this.visible = false;
    else this.visible = true;
  } 

  addEmployee() : void {
    this.restClient.getData("http://localhost:4200/api/tutorial/1.0/employees").subscribe(
        data => {
            this.data = data;

            try {
              var id = this.data[this.data.length-1].employeeId;
            }
            catch {
              var id: any = 0;
            }

            this.employee.employeeId = ++id;
        
            this.restClient.postData("http://localhost:4200/api/tutorial/1.0/employees", this.employee)
            .subscribe(data => this.result = data);

            location.reload(); //"mistake"
        },
        error => console.log(error)
    );
  }
}
