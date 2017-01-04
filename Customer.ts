//Implementing Interface
/*class Customer IDal{
	Add();
}*/

//Injecting interface into class
//class Customer Implements IDal {

//Mindful of curly brace and the string for the file at root level
import {Address} from "./Address"

//when using  AMDs i.e system.js, require.js, webpack to include modules the keyword export must preceed the customer class
//class Customer {
export class Customer {
	//public CustomerName : string = "";

	//use private with setters and getters once declared
	private _customerName : string = "";

	//you can use the module exported now
	public addressobj: Address = new Address()


	public set CustomerName(value: string) {

		//Handling exceptions
		if(value.length== 0){
			throw "Customer Name is required";
		}
		this._customerName = value;
	}

	public get CustomerName(): string {
		return this._customerName;
	}


	//referencing the interface method
	//Add() {}
	
//Validate(input:number) : boolean {
	Validate() {
		alert("Test - I am called Cudjoe by my my Mother's family");
		//return true;
	}
}

//inheritance
class SomeOtherCustomer extends Customer {
	Validate() {
		alert("This is a new Customer - I am called Daddy at home");
	}

}