import { Component } from '@angular/core';
import { DataRestClientService } from '../data-rest-client.service';
import { InsertFormComponent } from "../insert-form/insert-form.component";

@Component({
    selector: 'data-table',
    templateUrl: './data-table.component.html',
    styleUrls:  ['./data-table.component.scss']
})
export class DataTableComponent {
    constructor(private restClient: DataRestClientService) {
        this.loadData();
    }

    data: any; 
    error: any;

    loadData(): void {
        this.restClient.getData("http://localhost:8080/api/tutorial/1.0/employees")
        .subscribe(data => this.data = data, error => this.error = error);
    }
}