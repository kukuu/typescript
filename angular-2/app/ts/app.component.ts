import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]

    //See above: whenever you set up and embed components into another 
    //you have to set up a directive in the parent component that embeds the child
})

export class AppComponent {
	//Data binding with class variables

	mainHeading = Config.MAIN_HEADING;
	saleHeading = Config.SALE_HEADING

	//include the video list. Give it a name (videos here), 
	//and the type is the name of the class Video

	videos: Array<Video>;

	//we now a build our constructor with list of videos
	//we include this list in the app.component.html using the playlist tag in the 
	//using the selector used in playlist.component.ts

	constructor(){
		this.videos = [
			new Video(1, "Beauty and The Beast", "qgGIqRFvFFk", "How to Spice up"),
			new Video(2, "Dirty Dancing", "qgGIqRFvFFk", "Temptations with a happy ending")
		]

	}
}
