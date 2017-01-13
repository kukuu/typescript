
//Author - Alexander Adu-Sarkodie
import  {Address} from "./Address";

export class Customer {
	
	private _customerName;
	
	//you can use the module exported now as a type and instantiate it
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
		Add() {}
	
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