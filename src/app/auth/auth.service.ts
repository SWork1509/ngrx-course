import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "./model/user.model";




@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    login(email: string, password: string): Observable<IUser> {
        return this.http.post<IUser>('/api/login', { email, password });
    }

}
