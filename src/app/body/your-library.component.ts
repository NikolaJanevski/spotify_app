import { Component } from "@angular/core";
import { Playlist } from "./playlist.model";

@Component({
    selector: "spotify-your-library",
    templateUrl: "your-library.component.html"
})
export class YourLibraryComponent {
    playlists:Playlist[] = [];
}