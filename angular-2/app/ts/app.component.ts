//Author: Alexander Adu-Sarkodie

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
	//and the type is the name of the class Video. The name is passed as value to the array attribute in app.component.html

	videos: Array<Video>;

	//we now a build our constructor with list of videos
	//we include this list in the app.component.html using the playlist tag in the 
	//using the selector used in playlist.component.ts

	constructor(){
		this.videos = [
			new Video(1, "C-3PO", "qgGIqRFvFFk", "Heroes and Villains","one"),
			new Video(2, "Darth Vadar", "qgGIqRFvFPP", "THeroes and Villains","two"),
			new Video(3, "BB-8", "qgGIqRFvFZZ", "Heroes and Villains","three.gif"),
			new Video(4, "Boba Fett", "qgGIqRFvFUU", "Heroes and Villains","four"),
		]

	}
}




