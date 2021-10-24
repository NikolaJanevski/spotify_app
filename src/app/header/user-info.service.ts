import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn: 'root'})
export class UserInfoService {
    private baseUrl:string = 'https://spotify-app-4716b-default-rtdb.firebaseio.com/';
    private myInfoEndpoint:string = 'my-info.json';
    
    constructor(private http: HttpClient) {

    }

    getUserInfo() {
        console.log(this.baseUrl + this.myInfoEndpoint);
        return this.http.get<UserInfo>(this.baseUrl + this.myInfoEndpoint);
    }

    modifyUserInfo() {
        var temp: UserInfo = {
            FirstName: "John",
            LastName: "Smith",
            GitHub: "http",
            mix_id: "jsmith"
        }

        return this.http.put(this.baseUrl + this.myInfoEndpoint, temp);
    }
}