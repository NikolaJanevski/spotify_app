import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "spotify-auth",
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    public onSubmit(data: NgForm) {
        console.log("Button clicked");
        console.log(data.value);
    }
}