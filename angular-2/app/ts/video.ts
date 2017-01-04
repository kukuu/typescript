
export class Video {
	id:number;
	title:string;
	videoCode:string;
	desc:string;

	//Nothing too fancy for now so use a constructor

	constructor (id:number,title:string,videoCode:string,desc:string){
		this.id = id;
		this.title = title;
		this.videoCode = videoCode;
		this.desc = desc;
	}
}