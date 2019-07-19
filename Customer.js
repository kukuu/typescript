var Customer = (function () {
    function Customer() {
        this.CustomerName = "";
    }
    Customer.prototype.Validate = function () {
        //Validate(): void {
        alert("test");
        return true;
    };
    return Customer;
}());
