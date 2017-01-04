//Implementing Interface
/*class Customer IDal{
    Add();
}*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Injecting interface into class
//class Customer Implements IDal {
//Mindful of curly brace and the string for the file at root level
var Address_1 = require("./Address");
//when using  AMDs i.e system.js, require.js, webpack to include modules the keyword export must preceed the customer class
//class Customer {
var Customer = (function () {
    function Customer() {
        //public CustomerName : string = "";
        //use private with setters and getters once declared
        this._customerName = "";
        //you can use the module exported now
        this.addressobj = new Address_1.Address();
    }
    Object.defineProperty(Customer.prototype, "CustomerName", {
        get: function () {
            return this._customerName;
        },
        set: function (value) {
            //Handling exceptions
            if (value.length == 0) {
                throw "Customer Name is required";
            }
            this._customerName = value;
        },
        enumerable: true,
        configurable: true
    });
    //referencing the interface method
    //Add() {}
    //Validate(input:number) : boolean {
    Customer.prototype.Validate = function () {
        alert("Test - I am called Cudjoe by my my Mother's family");
        //return true;
    };
    return Customer;
}());
exports.Customer = Customer;
//inheritance
var SomeOtherCustomer = (function (_super) {
    __extends(SomeOtherCustomer, _super);
    function SomeOtherCustomer() {
        _super.apply(this, arguments);
    }
    SomeOtherCustomer.prototype.Validate = function () {
        alert("This is a new Customer - I am called Daddy at home");
    };
    return SomeOtherCustomer;
}(Customer));
