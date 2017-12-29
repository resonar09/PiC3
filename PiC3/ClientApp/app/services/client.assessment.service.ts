import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { AuthService } from "./auth.service";

@Injectable()
export class ClientAssessmentService {
    base:string;
    constructor(private http: Http, private auth: AuthService, @Inject('BASE_URL') baseUrl: string) {
        this.base = baseUrl;
    }
    getClientAssessments(status: string) {
        return this.http.get(this.base + 'api/assessmentdata/GetAssessmentsByStatus/' + status, this.auth.tokenHeader).map(res => res.json());
    }
}