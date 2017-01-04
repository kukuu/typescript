class Customer {
	//public CustomerName : string = "";

	//use private with setters and getters
	private _customerName : string = "";
	public set CustomerName(value: string) {
		this _customerName = value;
	}

	public get CustomerName(): string {
		return this _customerName;
	}
	
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