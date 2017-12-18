

import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ClientAssessmentService {
    base:string;
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.base = baseUrl;
    }
    getClientAssessments(status: string) {
        return this.http.get(this.base + 'api/assessmentdata/GetAssessmentsByStatus/' + status).map(res => res.json());
    }
}