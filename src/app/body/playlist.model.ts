export class Playlist {
    title:string;
    author: string;
    imagePath: string;

    constructor({title, author, imagePath} : 
        {title:string, author:string, imagePath:string}) {
            this.title = title;
            this.author = author;
            this.imagePath = imagePath;
    }
}