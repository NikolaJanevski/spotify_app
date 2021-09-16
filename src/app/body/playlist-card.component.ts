import { Component, Input } from "@angular/core";

@Component({
    selector: "spotify-playlist-card",
    templateUrl: "playlist-card.component.html"
})
export class PlaylistCardComponent {
    @Input() 
    title! :string;
    @Input()
    author! :string;
    @Input()
    imagePath!: string;
}