import { Component } from "@angular/core";
import { UserInfo } from "../header/user-info.model";
import { UserInfoService } from "../header/user-info.service";
import { DatabaseService } from "./database.service";

@Component({
    selector: 'spotify-edit-user-info',
    templateUrl: 'edit-user-info.component.html'
})
export class EditUserInfoComponent {

    constructor(private infoService: UserInfoService, private dbService:DatabaseService) {
        dbService.showData();
    }

    onUpdateUserInfo(data:UserInfo) {
        this.infoService.modifyUserInfo(data).subscribe(data => {
            console.log("Updated information sent to backend");
        });
    }
}