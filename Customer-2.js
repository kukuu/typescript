"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Author - Alexander Adu-Sarkodie
var Address_1 = require("./Address");
var Customer = (function () {
    function Customer() {
        //you can use the module exported now as a type and instantiate it
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
    Customer.prototype.Add = function () { };
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
