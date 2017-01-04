//Working with Modules
//exporting only Address into global space i.e so Customer.ts can use as module
"use strict";
var Address = (function () {
    function Address() {
        this.Street1 = "";
    }
    return Address;
}());
exports.Address = Address;
//class DB will not be exported into global space
var DB = (function () {
    function DB() {
    }
    return DB;
}());
