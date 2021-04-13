import { Component } from '@angular/core';
import { DataRestClientService } from '../data-rest-client.service';
import { Employee } from '../shared/employee';

@Component({
    selector: 'data-table',
    templateUrl: './data-table.component.html',
    styleUrls:  ['./data-table.component.scss']
})
export class DataTableComponent {
    constructor(private restClient: DataRestClientService) {
        this.loadData();
        this.employee = {employeeId: 0, firstName: "", lastName: "", email: "", phone: ""};
    }

    data: any; 
    error: any;
    visible: boolean = false;
    employee: Employee;
    id: any;

    showHideForm(event: any) : void {
        if(this.visible) this.visible = false;
        else this.visible = true;
        this.id = event.target.id;
        this.employee.employeeId = this.id;
    } 

    loadData(): void {
        this.restClient.getData("http://localhost:4200/api/tutorial/1.0/employees")
        .subscribe(data => this.data = data, error => this.error = error);
    }

    deleteEmployee(event: any): void {
        let id = event.target.id;
        this.restClient.deleteData('http://localhost:4200/api/tutorial/1.0/employees/' + id).subscribe();
        this.loadData();
    }

    updateEmployee(): void {
        this.restClient.updateData('http://localhost:4200/api/tutorial/1.0/employees/' + this.id, this.employee).subscribe();
        location.reload(); //"mistake"
    }
}