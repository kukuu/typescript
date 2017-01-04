import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';


@Component({
    selector: 'playlist',

    //You need to give the full file path to the html 
    //as it will be included and not transpiled

    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['videos']
})


export class PlaylistComponent {
//using an argument vid of type Video (class)

	saleHeading = Config.SALE_HEADING;

	onSelect(vid:Video){
		console.log(JSON.stringify(vid));
	}

	public shoppingListItems = [
		{name: "From Moscow with Love"},
		{name: "The Hunt for Red October"},
		{name: "Golden Eye"}
	];

	public selectedItem = { name: "" };

	onItemClicked(shoppingListItem){
		this.selectedItem = shoppingListItem;
	}

	onAddItem(shoppingListItem){
		//pass an object to push. Dont forget to append value to the variable.
		
		this.shoppingListItems.push({name: shoppingListItem.value})
	}

	onDeleteItem() {
		this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem), 1);
	}

	  
}




//This component will have to be imported into the main component
//of the application.
