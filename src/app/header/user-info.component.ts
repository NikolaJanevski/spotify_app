import { Component, Injectable, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";

@Component({
    selector: "spotify-user-info",
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit {
    myInfo: UserInfo | undefined;

    constructor(private userInfoService:UserInfoService) {
    }
    ngOnInit(): void {
        console.log("Registering showUserInfo as a subscriber");
        this.showUserInfo();
        this.userInfoService.modifyUserInfo().subscribe(data => {
            console.log(data);
        })
    }

    showUserInfo() {
        this.userInfoService.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}