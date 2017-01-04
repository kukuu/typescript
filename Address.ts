
//Working with Modules
//exporting only Address into global space i.e so Customer.ts can use as module

export class Address {
	
	public Street1: string = "";
}

//class DB will not be exported into global space

class DB {
	

}