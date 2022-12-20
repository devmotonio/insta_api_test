export class Post{
    id: string;
    media_type: string;
    media_url: string;

    constructor(id: string = '', media_type: string = '', media_url: string = '') {
        this.id = id;
        this.media_type = media_type;
        this.media_url = media_url;
    }
}